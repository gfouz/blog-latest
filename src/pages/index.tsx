import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

type Tpost = {
    slug: any; 
    frontmatter: any;
};

interface IProps {
  posts: Tpost[], 
}

// The Blog Page Content
export default function Blog({posts}: IProps){

    return <BlogContainer>
        <BlogMain>
          <BlogImage />
        </BlogMain>
        <BlogList>
        <Headline>Posts about technologies</Headline>
        {posts.map( post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return <BlogItem key={title}>
                    <Link href={`/posts/${slug}`}>
                    <LinkLabel>{title}</LinkLabel>
                    </Link>
                    <Headline>{date}</Headline>
                   </BlogItem>
      
        })}
        </BlogList>
        </BlogContainer>
}
const BlogContainer = styled.div`
 display: flex;
 justify-content: center;
 min-height: 100vh;
 background-color: #1e1e1c;
`;
const BlogListContainer = styled.div`
 
`;
const BlogMain = styled.div`
 
`;
const BlogList = styled.div`
 padding: 1em;
 background-color: #000000;
`;
const BlogItem = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin: 1em 0;
 a {text-decoration: none;}
`;
const Headline = styled.h4`
  color: #f1f1f1;
`;
const BlogImage = styled.img.attrs({ src: './images/blog.jpg' , alt: 'blog'})`
  max-width: 100%;
  height: auto;
`;
const LinkLabel = styled(Headline)`
  color: #ff9800;
`;

//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const files = fs.readdirSync('src/posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`src/posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
          slug,
          frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
          posts,
        },
    };
}


//https://gfouz.github.io/next-blog-2023

/*
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/next-gh-pages/' : '',
}
*/