import Post from "./post";
import classes from "./posts-grid.module.css";

export type Post = {
  title: string;
  image: string;
  description: string;
  date: string;
  slug: string;
};

type PostsGridProps = {
  posts: Post[];
};

function PostsGrid(props:PostsGridProps) {
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
