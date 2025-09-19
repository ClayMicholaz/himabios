import { designTokens, componentStyles } from "@/styles/designTokens";

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
    <div
      className={`${designTokens.gradients.card} ${componentStyles.card.base} ${componentStyles.card.padding} mb-8 border-2 ${componentStyles.card.border} relative overflow-hidden animate-fade-in`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5"></div>
      <div className="relative z-10">
        <h2
          className={`text-3xl md:text-4xl ${componentStyles.text.heading.primary} mb-6 text-center`}
        >
          🔍 Cek Status Penerimaan Anda
        </h2>
        <p
          className={`${componentStyles.text.body.secondary} mb-10 text-center text-xl leading-relaxed`}
        >
          Masukkan NIM Anda untuk melihat hasil seleksi dengan penuh kehebatan!
        </p>

        <div className="space-y-8">
          <div>
            <label
              htmlFor="nim"
              className={`block text-xl font-bold ${componentStyles.text.heading.secondary} mb-4 text-center`}
            >
              Nomor Induk Mahasiswa (NIM)
            </label>
            <input
              type="text"
              id="nim"
              value={nimInput}
              onChange={(e) => onNimInput(e.target.value)}
              placeholder="Contoh: 32250005"
              maxLength={8}
              className={`w-full px-8 py-6 ${
                componentStyles.input.base
              } text-center text-2xl font-mono ${
                nimError
                  ? componentStyles.input.invalid
                  : isNimValid
                  ? componentStyles.input.valid
                  : componentStyles.input.default
              }`}
              onKeyPress={(e) => e.key === "Enter" && isNimValid && onSearch()}
            />

            {/* Real-time validation message */}
            {nimError && (
              <div className="mt-2 text-error-500 dark:text-error-400 text-center font-medium animate-fade-in">
                {nimError}
              </div>
            )}

            {isNimValid && (
              <div className="mt-2 text-success-500 dark:text-success-400 text-center font-medium animate-fade-in">
                ✓ NIM ditemukan - siap untuk dicek!
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={onSearch}
              disabled={!isNimValid}
              className={`${componentStyles.button.base} ${componentStyles.button.primary} ${componentStyles.button.size.xl} disabled:from-neutral-400 disabled:to-neutral-500 disabled:cursor-not-allowed disabled:scale-100`}
            >
              🚀 Lihat Hasil Saya!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
