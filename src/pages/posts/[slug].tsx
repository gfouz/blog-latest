//@ts-nocheck
import fs from "fs";
import Image from 'next/image';
import Link from  'next/link';
import { useEffect } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { attached_1, attached_2 } from 'constants/constants';



// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, author, category, date, img, tags } = frontmatter; 
  
  return (
    <PostLayout>
      <PostHeader>
        GFOUZ BLOG
      </PostHeader>
      <PostContent>
       <BlackHeadline>{title}</BlackHeadline>

       <BlueHeadline>
          {date}
        </BlueHeadline>
        
        <PostMainPicture src={ `/next-blog-2023/images/${img}`}  />

        <ReactMarkdown>{content}</ReactMarkdown>

      </PostContent>
      <PostSidebar>
        <SidebarImage />
        <Paragraph>{ attached_1 }</Paragraph>
        <Paragraph>{ attached_2 }</Paragraph>
        <SidebarLinks>
        <Link href='https://github.com/gfouz'>Github Projects</Link>
        </SidebarLinks>
        </PostSidebar>
      <PostFooter>
        GFOUZ &copy; { new Date().getFullYear() }
      </PostFooter>
    </PostLayout>
  );
}

const PostLayout = styled.div`
 font-size: calc(0.6em + 1vw);
 background-color: #f5f5f5;
 display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto auto 60px;
  grid-template-areas:
    "header"
    "article"
    "aside"
    "footer";

  @media (min-width: 700px) {
  & {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 60px 1fr 60px;
    grid-template-areas:
      "header  header"
      "article  aside"
      "footer  footer";
  }  
`;
const PostHeader = styled.header`
 grid-area: header;
 display: flex;
 align-items: center;
 justify-content: center;
 color: #f1f1f1;
 background-color: #555555;
`;
const PostContent = styled.article`
  grid-area: article;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  color: #222222;
  background-color: #f5f5f5;
  h3 {
    text-align: left;
    color: #1769aa;
    margin: 0.5em 0 0 0;
  }
  
  p {
    color: #444444;
    text-align: left;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  code, pre {  
   display: block;
   & {
   @media (max-width: 900px) {
    max-width: 400px;
  }
 }
  color: #c5c8c6;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: break-all;
  line-height: 1.5;
  overflow: auto;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre {
  
  padding: 1em;
  margin: .5em 0;
  border-radius: 0.3em;
  background-color: #222222;
}

/* Inline code */
:not(pre) > code {
  padding: .1em;
  border-radius: .3em;
}
  
`;
const PostMainPicture = styled.img.attrs({ alt:'MainPicture'})`
 max-width: 100%;
 height: auto;
`;
const PostSidebar = styled.aside`
  grid-area: aside;
  padding: 1em 0;
  text-align: center;
  background-color: #999999;
  p, a {
    text-align: left;
    margin: 0.4em;
  }
;`
const SidebarImage = styled.img.attrs({ src: '/next-blog-2023/images/gfouz.png', alt: 'gfouz'})`
  width: 120px;
  height: 120px;
  float: left;
  object-fit: contain;
  position: relative;
  left: 7px;
  top: 5px;
`;
const SidebarLinks = styled.div`
 text-align: left;
 a { 
   color: #000000;
   font-weight: bolder;
 }
`;
const Paragraph = styled.p`
  color: #222222;
`;
const PostFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: footer;
  color: #f1f1f1;
  background-color: #555555;
`;
const Headline = styled.div`
  display: flex;
`;
const BlueHeadline = styled(Headline)`
  color: blue;
  font-size: 0.7em;
`;
const BlackHeadline = styled(Headline)`
  font-size: 1.3em;
  font-weight: bolder;
  color: #555555;
`;


// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("src/posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`src/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
