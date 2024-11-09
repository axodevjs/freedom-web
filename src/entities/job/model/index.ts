export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string; // Тип работы (например, "Полный рабочий день")
  experience: string; // Требуемый опыт (например, "3 года")
  postedDate: string; // Дата публикации вакансии
  description: string; // Описание вакансии
  responsibilities: string[]; // Список обязанностей
  requirements: string[]; // Список требований
  benefits: string[]; // Список преимуществ
}

export const jobListings: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Co",
    location: "Москва",
    salary: "от 150 000 ₽",
    type: "Полный рабочий день",
    experience: "3 года",
    postedDate: "2024-11-01",
    description:
      "Мы ищем талантливого Frontend-разработчика для работы над современными веб-приложениями.",
    responsibilities: [
      "Разработка и поддержка UI-компонентов на React",
      "Работа с REST API и WebSocket",
      "Оптимизация производительности приложения",
    ],
    requirements: [
      "Глубокие знания JavaScript, HTML, CSS",
      "Опыт работы с React и Redux от 2 лет",
      "Умение работать с инструментами сборки (Webpack, Vite)",
    ],
    benefits: [
      "Гибкий график работы",
      "ДМС для сотрудников и их семей",
      "Корпоративные мероприятия и бонусы",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Software Inc",
    location: "Санкт-Петербург",
    salary: "от 180 000 ₽",
    type: "Удаленная работа",
    experience: "5 лет",
    postedDate: "2024-10-28",
    description:
      "Мы ищем опытного Backend-разработчика для работы с высоконагруженными системами.",
    responsibilities: [
      "Разработка и оптимизация серверной части приложения",
      "Работа с базами данных (PostgreSQL, MongoDB)",
      "Интеграция с внешними сервисами",
    ],
    requirements: [
      "Опыт работы с Node.js от 3 лет",
      "Знание принципов построения REST API",
      "Умение проектировать базы данных",
    ],
    benefits: [
      "Участие в международных проектах",
      "Гибкое расписание работы",
      "Оплата обучения и сертификации",
    ],
  },
  // Добавьте другие вакансии...
];
