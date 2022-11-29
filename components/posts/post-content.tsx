import ReactMarkdown from "react-markdown";
import { IPost } from "../../types/posts";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

interface IPostContentProps{
  post:IPost;
}

function PostContent({post}:IPostContentProps) {
  const imagePath = `/images/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>
      {post.description}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
