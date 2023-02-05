import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Aside } from '../components/Aside'
import { Main } from '../components/Main'
import { Headline } from '../components/Headline'

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
       <BlogHeader>
           <Headline 
          p='1em 0'
          center 
          bolder 
          size='2em'
          color='#ffffff'
        >
            Let us read a little !
        </Headline>
       </BlogHeader>

       <BlogMain>
        <PictureContainer>
          <BlogMainPicture />
        </PictureContainer>
        
       </BlogMain>
       
       <BlogAside>
        <BlogList>
        <Headline color='#ffffff' bolder>Posts about technologies</Headline>
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
                    <Headline color='#ffffff'>{date}</Headline>
                   </BlogItem>
      
        })}
        </BlogList>
        </BlogAside>
        <BlogFooter>gfouz &copy;{ new Date().getFullYear() }</BlogFooter>
        </BlogContainer>
}
const BlogContainer = styled.div`
 display: grid;
  grid-template-areas:
    'header '
    'main'
    'aside'
    'footer';
  grid-template-columns: 1fr;

  @media (min-width: 550px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
    }
  }
 background-color: #1e1e1c;
`;
const BlogHeader = styled(Header)`
 height: 100px;
`;
const BlogMain = styled(Main)`
  display: flex;
  justify-content: center;
`;
const BlogAside = styled(Aside)`
 padding: 5em 0;
 text-align: center;
`;
const BlogFooter = styled(Footer)`
 color: #ffffff;
 height: 100px;
 line-height: 100px;
 text-align: center;
`;
const BlogList = styled.div`
 min-width: 100px;  
 padding: 1em;
 background-color: #1e1e1c;
`;
const BlogItem = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin: 1em 0;
 a {text-decoration: none;}
`;

const PictureContainer = styled.div`
 min-width: 300px;
`;
const BlogMainPicture = styled.img.attrs({ src: '/next-blog-2023/images/blog.jpg' , alt: 'blog'})`
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