# SEO Guide for Blog Posts

## Front Matter (YAML Header)

Кожна стаття повинна мати front matter з SEO метаданими:

```yaml
---
title: "Your Article Title"
description: "SEO-friendly description (150-160 characters)"
date: "2025-11-11"
image: "/img/blog/your-slug/hero.webp"
author: "Advantage Agency"
tags: ["tag1", "tag2", "tag3"]
keywords: "keyword1, keyword2, keyword3, long tail keywords"
---
```

## SEO Поля

### Обов'язкові:
- **title**: Заголовок статті (використовується в `<title>` та Open Graph)
- **description**: Опис статті (150-160 символів, використовується в meta description)
- **date**: Дата публікації (формат: YYYY-MM-DD)

### Рекомендовані:
- **image**: Шлях до hero зображення (1200x630px для соціальних мереж)
- **author**: Автор статті
- **tags**: Масив тегів для категорізації
- **keywords**: Ключові слова через кому (використовуються в meta keywords)

## Де знаходяться SEO налаштування

SEO метадані генеруються автоматично в файлі:
- `app/[locale]/blog/[slug]/page.tsx` - функція `generateMetadata()`

Ця функція читає дані з front matter статті та створює:
- `<title>` тег
- Meta description
- Open Graph теги (для Facebook, LinkedIn)
- Twitter Card теги
- Canonical URL
- Robots meta tags
- Structured data (Schema.org)

## Як додати нову статтю з SEO

1. Створіть папку `content/blog/your-article-slug/`
2. Створіть файл `en.md` з front matter:
```yaml
---
title: "Your SEO-Optimized Title"
description: "Compelling description that includes main keywords"
date: "2025-11-11"
image: "/img/blog/your-article-slug/hero.webp"
author: "Advantage Agency"
tags: ["media buying", "gambling", "facebook ads"]
keywords: "media buying gambling, facebook ads gambling, GEO selection, affiliate marketing"
---
```

3. Додайте hero зображення в `public/img/blog/your-article-slug/hero.webp` (1200x630px)

4. SEO буде автоматично згенеровано з цих даних

## Рекомендації для SEO

- **Title**: 50-60 символів, включайте основне ключове слово
- **Description**: 150-160 символів, привабливий опис з ключовими словами
- **Keywords**: 5-10 релевантних ключових слів через кому
- **Tags**: 3-7 тегів для категорізації
- **Image**: 1200x630px для оптимального відображення в соціальних мережах

