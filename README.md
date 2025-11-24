# 🎰 SoftSwiss Project

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Sass](https://img.shields.io/badge/Sass-1.94.0-CC6699?style=for-the-badge&logo=sass)
![Node.js](https://img.shields.io/badge/Node.js-24.11.1-339933?style=for-the-badge&logo=node.js)
![Yarn](https://img.shields.io/badge/Yarn-1.22+-2C8EBB?style=for-the-badge&logo=yarn)

**React-приложение**

</div>

## 📖 О проекте

React-приложение, построенное на **Create React App** с использованием **Sass** для модульной стилизации. Проект включает современный стек технологий и оптимизированную структуру компонентов.

## 🛠 Технологический стек

### Frontend
| Технология | Версия | Назначение |
|------------|--------|------------|
| **React** | 19.2.0 | Современная версия фреймворка |
| **React Router DOM** | 7.9.6 | Клиентская маршрутизация |
| **Sass** | 1.94.0 | Препроцессор CSS |
| **React Scripts** | 5.0.1 | Инструменты сборки CRA |

### Инструменты разработки
- **Yarn** - менеджер пакетов
- **Node.js 24.11.1** - среда выполнения

## 🚀 Быстрый старт

### Предварительные требования

- **Node.js** 18+ (рекомендуется **24.11.1**)
- **Yarn** 1.22+

### Запуск

```bash
# Установка зависимостей
yarn install

# Запуск в режиме разработки
yarn start
```


### Структура проекта
```bash
softswiss/
├── 📁 public/                # Статические файлы
│   ├── 📁 fonts/             # Шрифты Lato
│   ├── 📁 images/            # Изображения   
│       └── 📁 optimized/     # Оптимизированные изображения
│   ├── favicon.svg           # Фавиконка
│   ├── index.html            # HTML шаблон
│   └── robots.txt            # SEO настройки
│
├── 📁 src/                   # Исходный код
│   ├── 📁 components/        # React компоненты
│   │   ├── 📁 common/        # Общие компоненты
│   │   ├── 📁 sections/      # Секции страниц
│   │   └── 📁 ui/            # UI компоненты
│   │
│   ├── 📁 data/              # Данные
│   │
│   ├── 📁 styles/            # Стили Sass
│   │   ├── 📁 blocks/        # Стили блоков
│   │   ├── 📁 elements/      # Стили элементов
│   │   ├── 📁 sections/      # Стили секций
│   │   ├── _base.scss        # Базовые стили
│   │   ├── _fonts.scss       # Подключение шрифтов
│   │   ├── _mixins.scss      # Sass миксины
│   │   ├── _variables.scss   # CSS переменные
│   │   └── main.scss         # Главный файл стилей
│   │
│   └── index.js              # Точка входа
│
├── package.json              # Зависимости и скрипты
├── README.md                 # Документация
└── yarn.lock                 # Lock-файл зависимостей
```

###  Архитектура стилей
###  Модульная система Sass

``` bash
@import 'variables';    // Переменные
@import 'mixins';       // Миксины
@import 'fonts';        // Шрифты
@import 'base';         // Базовые стили
@import 'elements/*';   // Элементы
@import 'blocks/*';     // Блоки
@import 'sections/*';   // Секции
```

###  Шрифты
Lato Bold, Lato ExtraBold, Lato Regular

