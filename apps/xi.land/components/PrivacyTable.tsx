import React from 'react';

interface TableRow {
  category: string;
  goals: string;
  basis: string;
}

const PrivacyTable: React.FC = () => {
  const data: TableRow[] = [
    {
      category: 'Рег. данные/профиль',
      goals: 'Создание/ведение аккаунта; аутентификация; персонализация',
      basis: 'Исполнение пользовательского соглашения; согласие',
    },
    {
      category: 'Коммуникации/файлы',
      goals: 'Обмен сообщениями и материалами между пользователями; хранение истории',
      basis: 'Исполнение соглашения',
    },
    {
      category: 'Календарь/уведомления',
      goals: 'Организация занятий; напоминания',
      basis: 'Исполнение соглашения',
    },
    {
      category: 'Техданные, логи, cookies',
      goals:
        'Работоспособность; безопасность; предупреждение злоупотреблений; аналитика и улучшение качества',
      basis:
        'Законный интерес; исполнение соглашения; согласие (для аналитики/маркетинга через cookies)',
    },
    {
      category: 'Маркетинговые письма',
      goals: 'Новости и рекомендации по Сервису',
      basis: 'Согласие (как часть Пользовательского соглашения; отписка в каждом письме)',
    },
    {
      category: 'Поддержка',
      goals: 'Ответы на обращения; реализация прав субъектов ПДн',
      basis: 'Исполнение соглашения; законные обязанности',
    },
  ];

  return (
    <div className="my-8 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Категория
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Цели
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Основание
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-10 transition-colors duration-200 ease-in-out"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{row.category}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-700 leading-relaxed">{row.goals}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600 leading-relaxed">{row.basis}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with additional info */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <p className="text-sm text-gray-20">
          <strong>Примечание:</strong> Вы можете отозвать согласие, написав на{' '}
          <a
            href="mailto:support@sovlium.ru"
            className="text-brand-20 hover:text-brand-40 underline transition-colors duration-200"
          >
            support@sovlium.ru
          </a>
          ; это не влияет на законность обработки до момента отзыва.
        </p>
      </div>
    </div>
  );
};

export default PrivacyTable;
