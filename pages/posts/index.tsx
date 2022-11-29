import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "../../utils/DUMMY_DATA";

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
