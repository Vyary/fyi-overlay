use active_win_pos_rs::get_active_window;
use std::time::Duration;
use tauri::{Emitter, Window};
use tokio::fs::File;
use tokio::io::{AsyncBufReadExt, AsyncSeekExt, BufReader, SeekFrom};

#[tauri::command]
async fn tail_file(window: Window, file_path: String) -> Result<(), String> {
    let file = File::open(&file_path).await.map_err(|e| e.to_string())?;
    let mut reader = BufReader::new(file);

    reader
        .seek(SeekFrom::End(0))
        .await
        .map_err(|e| e.to_string())?;

    loop {
        let mut line = String::new();
        match reader.read_line(&mut line).await {
            Ok(0) => {} // No new data
            Ok(_) => {
                let trimmed = line.trim();
                if !trimmed.is_empty() {
                    let _ = window.emit("tail-line", trimmed);
                }
            }
            Err(e) => return Err(e.to_string()),
        }

        tokio::time::sleep(Duration::from_millis(200)).await;
    }
}

#[tauri::command]
async fn window_monitor(app: tauri::AppHandle) -> Result<(), String> {
    tokio::spawn(async move {
        loop {
            tokio::time::sleep(Duration::from_millis(300)).await;

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
