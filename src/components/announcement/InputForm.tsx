import clsx from "clsx";

interface InputFormProps {
  nimInput: string;
  nimError: string;
  isNimValid: boolean;
  onNimInput: (value: string) => void;
  onSearch: () => void;
}

export default function InputForm({
  nimInput,
  nimError,
  isNimValid,
  onNimInput,
  onSearch,
}: InputFormProps) {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <span className="font-mono text-sm tracking-widest text-accent">
          &gt; HASIL SELEKSI PENGURUS
        </span>
        <h1 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-heading sm:text-4xl">
          Cek hasilmu dengan NIM.
        </h1>
      </header>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (isNimValid) onSearch();
        }}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nim" className="font-mono text-sm text-fg">
            NIM (8 digit)
          </label>
          <input
            type="text"
            id="nim"
            inputMode="numeric"
            autoComplete="off"
            value={nimInput}
            onChange={(e) => onNimInput(e.target.value)}
            placeholder="32250005"
            maxLength={8}
            aria-invalid={Boolean(nimError)}
            aria-describedby="nim-status"
            className={clsx(
              "w-full rounded border-2 bg-surface px-4 py-3.5 font-mono text-lg tracking-[0.14em] text-heading transition-colors placeholder:text-muted/60 focus:outline-hidden sm:text-xl",
              nimError
                ? "border-danger"
                : isNimValid
                  ? "border-accent"
                  : "border-line focus:border-silver-300",
            )}
          />
          <p id="nim-status" aria-live="polite" className="min-h-5 text-sm">
            {nimError ? (
              <span className="font-medium text-danger">{nimError}</span>
            ) : isNimValid ? (
              <span className="font-medium text-accent">
                ✓ NIM ditemukan dalam sistem
              </span>
            ) : null}
          </p>
        </div>

        <button
          type="submit"
          disabled={!isNimValid}
          className={clsx(
            "w-full rounded px-6 py-4 font-display text-lg font-bold transition-opacity",
            isNimValid
              ? "cursor-pointer bg-cta text-on-cta hover:opacity-90"
              : "cursor-not-allowed bg-raised text-muted",
          )}
        >
          Cek hasil ↵
        </button>
      </form>
    </div>
  );
}
