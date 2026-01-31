use active_win_pos_rs::get_active_window;
use std::fs;
use std::time::Duration;
use tauri::{Emitter, Window};

#[tauri::command]
async fn tail_file(window: Window, file_path: String) -> Result<(), String> {
    let mut last_line = String::new();

    loop {
        match fs::read_to_string(&file_path) {
            Ok(contents) => {
                if let Some(line) = contents.lines().last() {
                    if line != last_line {
                        last_line = line.to_string();
                        let _ = window.emit("tail-line", line);
                    }
                }
            }
            Err(e) => return Err(e.to_string()),
        }
        tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
    }
}

#[tauri::command]
async fn window_monitor(app: tauri::AppHandle) -> Result<(), String> {
    tokio::spawn(async move {
        loop {
            tokio::time::sleep(Duration::from_millis(1000)).await;

            match get_active_window() {
                Ok(active_window) => {
                    let _ = app.emit("active-window-changed", &active_window.title);
                }
                Err(_) => {
                    let _ = app.emit("active-window-changed", "");
                }
            }
        }
    });

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![tail_file, window_monitor])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
