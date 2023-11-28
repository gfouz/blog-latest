import ReactMarkdown from 'react-markdown';
import markdownParser from 'lib/markdownParser';

interface MarkdownToHtmlProps {
  title: string;
  className: string;
}
type ObjectProps = {
  meta: { title: string };
  content: string;
};

//const url = "http://localhost:3000/api/markdowns";

export default async function MarkdownToHtml({
  title,
  className,
}: MarkdownToHtmlProps) {
  const markdowns = await markdownParser();
  const data = markdowns.find((item) => item.meta.title === title);

  return <ReactMarkdown className={className}>{data?.content}</ReactMarkdown>;
}
