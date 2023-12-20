//@ts-nocheck
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import sidebar_image from '../../../../public/images/news-live.png';
import BackButton from 'components/backbutton/BackButton';
import Postlink from 'components/postlink/Postlink';
import BreakingNews from 'components/breakingnews/BreakingNews';
import getPosts, { getPost } from 'lib/get-post';
import Footer from 'components/footer/Footer';

export default async function Post({ params }: any ) {
  const post = await getPost(params.slug);
  const posts = await getPosts();

  return (
    <div className='relative overflow-hidden p-1' data-theme='pastel'>
      <section className='grid-mobile-template md:grid-tablet-template'>
        <header className='grid-navbar text-center'>
          <h1 className='text-[3vw]' data-theme='coffee'>
            Post about web technology
          </h1>
        </header>
        <main className='grid-main'>
          <img
            className='responsive-img'
            src={post?.meta?.src}
            alt={post?.meta?.alt}
          />

          <article className='p-2 text-left'>
            <ReactMarkdown
              className='markdown'
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      language='javascript'
                      PreTag='div'
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post?.content}
            </ReactMarkdown>
          </article>
        </main>
        <aside className='grid-aside p-2' data-theme='coffee'>
          <h2 className='sm-title text-left'>
            Easy navigation to another post
          </h2>
          <Postlink posts={posts} />
          <hr className='my-4' />
          <h2 className=''>
            Headlines from The Guardian
          </h2>
          <BreakingNews />
          
        </aside>
        <BackButton />
        <div className='grid-footer'>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/posts'));
  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
  return paths;
}
