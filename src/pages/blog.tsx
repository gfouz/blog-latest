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
    return <>
        {posts.map( post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return <BlogMain key={title}>
                <Headline>Post title:</Headline>
                <Link href={`/posts/${slug}`}>
                    <LinkLabel>{title}</LinkLabel>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
            </BlogMain>
        })}
    </>
}

const BlogMain = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 10px;
 border: 1px solid #999999;
 width: 320px;
 margin: 1em 0;
`;
const Headline = styled.h1`
  color: #ff0000;
`;

const LinkLabel = styled(Headline)`
  color: blue;
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
