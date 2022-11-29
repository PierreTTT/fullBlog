import ReactMarkdown from "react-markdown";
import { DUMMY_POST } from "../../utils/DUMMY_DATA";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

function PostContent() {
  const imagePath = `/images/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>
      {DUMMY_POST.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
