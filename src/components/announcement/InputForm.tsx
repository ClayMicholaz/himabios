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
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-3 sm:mb-4">
        Cek Status Penerimaan
      </h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center mb-8 sm:mb-12">
        Masukkan NIM Anda untuk melihat hasil seleksi
      </p>

      <div className="space-y-5 sm:space-y-6">
        {/* Input Group */}
        <div>
          <input
            type="text"
            id="nim"
            value={nimInput}
            onChange={(e) => onNimInput(e.target.value)}
            placeholder="Contoh: 32250005"
            maxLength={8}
            className={`w-full px-5 sm:px-6 py-4 sm:py-5 rounded-lg border-2 font-mono text-base sm:text-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-green-500 dark:focus:ring-teal-500 ${
              nimError
                ? "border-red-300 dark:border-red-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                : isNimValid
                  ? "border-green-300 dark:border-teal-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            }`}
            onKeyPress={(e) => e.key === "Enter" && isNimValid && onSearch()}
          />

          {nimError && (
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-red-600 dark:text-red-400 font-medium">
              {nimError}
            </p>
          )}

          {isNimValid && !nimError && (
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-green-600 dark:text-teal-400 font-medium">
              ✓ NIM ditemukan dalam sistem
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 sm:pt-4">
          <button
            onClick={onSearch}
            disabled={!isNimValid}
            className={`w-full px-6 sm:px-8 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
              isNimValid
                ? "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white focus:ring-green-400"
                : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            Cek Status
          </button>
        </div>
      </div>
    </div>
  );
}
