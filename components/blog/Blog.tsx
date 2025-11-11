import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';

interface BlogProps {
  params: { locale: string };
}

export default function BlogIndexPage({ params }: BlogProps) {
  const posts = getBlogPosts(params.locale);
  const isUkrainian = params.locale === 'uk';

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {isUkrainian ? 'Блог' : 'Blog'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {isUkrainian
              ? 'Досліджуйте наші останні статті, інсайти та кейси'
              : 'Explore our latest articles, insights, and case studies'}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              {isUkrainian
                ? 'Статті будуть додані найближчим часом'
                : 'Articles will be added soon'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                href={`/${params.locale}/blog/${post.slug}`}
                key={post.slug}
                className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full"
              >
                {post.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image.startsWith('http') ? post.image : post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-sm text-blue-400 mb-2">
                    {new Date(post.date).toLocaleDateString(
                      isUkrainian ? 'uk-UA' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto text-blue-400 font-medium">
                    {isUkrainian ? 'Читати далі' : 'Read More'} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}