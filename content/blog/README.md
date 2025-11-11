# Blog Posts Structure

This directory contains all blog posts in Markdown format.

## Structure

Each blog post should be in its own directory with the following structure:

```
content/blog/
  your-post-slug/
    en.md    # English version
    uk.md    # Ukrainian version
```

## Front Matter

Each markdown file must start with front matter (YAML) containing metadata:

```yaml
---
title: "Your Post Title"
description: "A brief description of the post"
date: "2025-11-11"
image: "/img/blog/your-image.webp"
author: "Advantage Agency"
tags: ["tag1", "tag2", "tag3"]
---
```

### Required Fields:
- `title`: Post title
- `description`: Brief description (used in meta tags and previews)
- `date`: Publication date in YYYY-MM-DD format

### Optional Fields:
- `image`: Path to hero image (relative to public folder or absolute URL)
- `author`: Author name (defaults to "Advantage Agency")
- `tags`: Array of tags for categorization

## Content

After the front matter, write your content in Markdown format. Supported features:

- Headers (# ## ###)
- Bold and italic text
- Lists (ordered and unordered)
- Links
- Images
- Code blocks
- Blockquotes
- Tables (GitHub Flavored Markdown)

## Examples

See `example-post/` directory for a complete example.

## Adding a New Post

1. Create a new directory in `content/blog/` with a URL-friendly slug
2. Create `en.md` and `uk.md` files in that directory
3. Add front matter with all required fields
4. Write your content in Markdown
5. The post will automatically appear on the blog page

## Image Paths

- Use relative paths starting with `/` for images in the `public` folder
- Example: `/img/blog/my-image.webp`
- Or use absolute URLs for external images

