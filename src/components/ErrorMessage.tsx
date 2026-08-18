function ErrorMessage(props: { name: string; error: any; reset: any }) {
  return (
    <div class="bg-base-300/95 rounded-2xl ring-1 ring-base-content/5 px-5 py-3 flex flex-col gap-2">
      <div class="text-lg text-mono">{props.name}</div>
      <div class="flex items-center gap-1 text-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>{String(props.error)}</span>
      </div>
      <button class="btn btn-soft" onClick={() => props.reset()}>
        Restart
      </button>
    </div>
  );
}

export { ErrorMessage };
