import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { DUMMY_POSTS } from "../../utils/DUMMY_DATA";

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage;
