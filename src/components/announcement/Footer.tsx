import { componentStyles } from "@/styles/designTokens";

export default function Footer() {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 max-w-lg mx-auto shadow-lg border border-gray-200 dark:border-gray-600">
        <p
          className={`${componentStyles.text.body.primary} text-base md:text-lg font-semibold`}
        >
          🎓 © 2025 HIMA BIOS - Universitas Bunda Mulia
        </p>
        <p className={`${componentStyles.text.body.secondary} text-sm mt-2`}>
          Mewujudkan Mahasiswa Berkarakter dan Berprestasi
        </p>
      </div>
    </div>
  );
}
