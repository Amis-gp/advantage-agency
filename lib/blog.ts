import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  author?: string;
  tags?: string[];
  content: string;
  locale: string;
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getBlogPosts(locale: string = 'en'): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: BlogPost[] = [];

    fileNames.forEach((fileName) => {
      try {
        const fullPath = path.join(postsDirectory, fileName);
        if (fs.statSync(fullPath).isDirectory()) {
          const localePath = path.join(fullPath, `${locale}.md`);
          if (fs.existsSync(localePath)) {
            const fileContents = fs.readFileSync(localePath, 'utf8');
            const { data, content } = matter(fileContents);
            
            posts.push({
              slug: fileName,
              title: data.title || '',
              description: data.description || '',
              date: data.date || '',
              image: data.image,
              author: data.author || 'Advantage Agency',
              tags: data.tags || [],
              content,
              locale,
            });
          }
        }
      } catch (error) {
        console.error(`Error reading blog post ${fileName}:`, error);
      }
    });

    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string, locale: string = 'en'): BlogPost | null {
  try {
    const postPath = path.join(postsDirectory, slug, `${locale}.md`);
    
    if (!fs.existsSync(postPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      image: data.image,
      author: data.author || 'Advantage Agency',
      tags: data.tags || [],
      content,
      locale,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    return fs.readdirSync(postsDirectory).filter((fileName) => {
      try {
        const fullPath = path.join(postsDirectory, fileName);
        return fs.statSync(fullPath).isDirectory();
      } catch {
        return false;
      }
    });
  } catch (error) {
    console.error('Error reading blog post slugs:', error);
    return [];
  }
}

