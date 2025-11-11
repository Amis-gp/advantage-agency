'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import Image from 'next/image';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg prose-invert max-w-none
      prose-headings:font-display 
      prose-headings:text-white 
      prose-headings:bg-gradient-to-r 
      prose-headings:from-white 
      prose-headings:to-blue-400 
      prose-headings:bg-clip-text 
      prose-headings:text-transparent
      prose-p:text-gray-300 
      prose-p:leading-relaxed 
      prose-p:mb-6
      prose-a:text-blue-400 
      prose-a:no-underline 
      hover:prose-a:text-blue-300
      prose-strong:text-white
      prose-strong:font-semibold
      prose-ul:text-gray-300
      prose-ol:text-gray-300
      prose-li:text-gray-300
      prose-code:text-blue-400
      prose-code:bg-gray-800
      prose-code:px-1
      prose-code:py-0.5
      prose-code:rounded
      prose-code:text-sm
      prose-pre:bg-gray-900
      prose-pre:border
      prose-pre:border-gray-700
      prose-pre:rounded-lg
      prose-pre:p-4
      prose-blockquote:border-l-4
      prose-blockquote:border-blue-500
      prose-blockquote:pl-4
      prose-blockquote:italic
      prose-blockquote:text-gray-400
      prose-img:rounded-lg
      prose-img:shadow-lg
      prose-hr:border-gray-700
      prose-table:text-gray-300
      prose-th:text-white
      prose-th:border-gray-700
      prose-td:border-gray-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          img: ({ node, ...props }) => {
            const src = props.src || '';
            if (src.startsWith('http')) {
              return (
                <img
                  {...props}
                  alt={props.alt || ''}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
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

