export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/miawmatkul.svg"
              alt="MiawMatkul Logo"
              className="w-6 h-6 dark:invert saturate-150 transition-all opacity-80"
            />
            <span className="font-bold text-base">MiawMatkul</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-[var(--muted-foreground)]">
              Dibuat tanpa sawit oleh{" "}
              <a
                href="https://github.com/HiroAozora"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--primary)] hover:underline"
              >
                hiromalasngedit
              </a>
            </p>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">
              Mahasigma Ilmu Komputer UINSU
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
