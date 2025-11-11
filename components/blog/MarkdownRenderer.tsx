'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import Image from 'next/image';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg prose-invert max-w-none
      prose-headings:font-display 
      prose-headings:text-white
      prose-headings:font-bold
      prose-headings:mb-6
      prose-headings:mt-8
      prose-h1:text-4xl
      prose-h1:md:text-5xl
      prose-h1:bg-gradient-to-r
      prose-h1:from-white
      prose-h1:to-red-400
      prose-h1:bg-clip-text
      prose-h1:text-transparent
      prose-h1:mb-8
      prose-h2:text-3xl
      prose-h2:md:text-4xl
      prose-h2:bg-gradient-to-r
      prose-h2:from-white
      prose-h2:to-red-400
      prose-h2:bg-clip-text
      prose-h2:text-transparent
      prose-h2:mb-6
      prose-h2:mt-10
      prose-h3:text-2xl
      prose-h3:md:text-3xl
      prose-h3:text-red-400
      prose-h3:mb-4
      prose-h3:mt-8
      prose-h4:text-xl
      prose-h4:md:text-2xl
      prose-h4:text-red-400
      prose-h4:mb-4
      prose-h4:mt-6
      prose-p:text-gray-300
      prose-p:leading-relaxed
      prose-p:mb-6
      prose-p:font-normal
      prose-a:text-red-400
      prose-a:no-underline
      prose-a:font-semibold
      hover:prose-a:text-red-300
      hover:prose-a:underline
      prose-strong:text-white
      prose-strong:font-bold
      prose-strong:text-lg
      prose-em:text-gray-200
      prose-em:italic
      prose-ul:text-gray-300
      prose-ul:text-lg
      prose-ul:leading-relaxed
      prose-ul:mb-6
      prose-ul:pl-6
      prose-ul:list-disc
      prose-ul:space-y-2
      prose-ol:text-gray-300
      prose-ol:text-lg
      prose-ol:leading-relaxed
      prose-ol:mb-6
      prose-ol:pl-6
      prose-ol:list-decimal
      prose-ol:space-y-2
      prose-li:text-gray-300
      prose-li:mb-2
      prose-li:pl-2
      prose-li:marker:text-red-400
      prose-code:text-red-400
      prose-code:bg-zinc-900
      prose-code:px-2
      prose-code:py-1
      prose-code:rounded
      prose-code:text-base
      prose-code:font-mono
      prose-code:border
      prose-code:border-red-500/30
      prose-pre:bg-zinc-900
      prose-pre:border
      prose-pre:border-red-500/30
      prose-pre:rounded-lg
      prose-pre:p-6
      prose-pre:overflow-x-auto
      prose-blockquote:border-l-4
      prose-blockquote:border-red-500
      prose-blockquote:pl-6
      prose-blockquote:italic
      prose-blockquote:text-gray-400
      prose-blockquote:bg-zinc-900/50
      prose-blockquote:py-4
      prose-blockquote:my-6
      prose-img:rounded-lg
      prose-img:shadow-xl
      prose-img:my-8
      prose-hr:border-gray-700
      prose-hr:my-8
      prose-table:text-gray-300
      prose-table:w-full
      prose-table:my-6
      prose-th:text-white
      prose-th:bg-zinc-900
      prose-th:border
      prose-th:border-gray-700
      prose-th:px-4
      prose-th:py-3
      prose-th:font-semibold
      prose-td:border
      prose-td:border-gray-700
      prose-td:px-4
      prose-td:py-3">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeRaw, rehypeUnwrapImages, rehypeSanitize]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-8 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-10 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-red-400" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-300 text-lg leading-relaxed mb-6" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="text-white font-bold" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="text-gray-200 italic" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="text-gray-300 text-lg leading-relaxed mb-6 pl-6 list-disc space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="text-gray-300 text-lg leading-relaxed mb-6 pl-6 list-decimal space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-gray-300 mb-2 pl-2 marker:text-red-400" {...props} />
          ),
          img: ({ node, ...props }: any) => {
            const src = props.src || '';
            if (src.startsWith('http')) {
              return (
                <div className="my-8">
                  <img
                    {...props}
                    alt={props.alt || ''}
                    className="rounded-lg shadow-xl max-w-full h-auto"
                  />
                </div>
              );
            }
            return (
              <div className="relative w-full h-96 my-8">
                <Image
                  src={src}
                  alt={props.alt || ''}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                />
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

