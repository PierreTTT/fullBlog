import { IPost } from "../../types/posts";
import Post from "./post";
import classes from "./posts-grid.module.css";

interface IPostsGridProps {
  posts: IPost[];
}

function PostsGrid(props: IPostsGridProps) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
