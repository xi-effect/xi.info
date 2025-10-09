import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Юридические документы | Sovlium',
  description:
    'Условия использования, политика конфиденциальности и согласие на обработку персональных данных платформы Sovlium.',
  openGraph: {
    title: 'Юридические документы | Sovlium',
    description:
      'Условия использования, политика конфиденциальности и согласие на обработку персональных данных платформы Sovlium.',
    url: 'https://sovlium.ru/legal',
    siteName: 'Sovlium',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
      },
    ],
    type: 'website',
  },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Юридические документы</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/legal/terms"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Условия использования</h2>
            <p className="text-gray-600">
              Правила и условия использования платформы Sovlium, права и обязанности пользователей.
            </p>
          </Link>

          <Link
            href="/legal/privacy"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Политика конфиденциальности
            </h2>
            <p className="text-gray-600">
              Информация о том, как мы собираем, используем и защищаем ваши персональные данные.
            </p>
          </Link>

          <Link
            href="/legal/consent"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Согласие на обработку данных
            </h2>
            <p className="text-gray-600">
              Ваше согласие на обработку персональных данных в соответствии с российским
              законодательством.
            </p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Нужна помощь?</h3>
          <p className="text-blue-800 mb-4">
            Если у вас есть вопросы по юридическим документам, обращайтесь к нам:
          </p>
          <div className="space-y-2 text-blue-800">
            <p>📧 Email: legal@sovlium.ru</p>
            <p>📞 Телефон: +7 (800) 123-45-67</p>
          </div>
        </div>
      </div>
    </div>
  );
}
