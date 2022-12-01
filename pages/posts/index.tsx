import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { IPost } from "../../types/posts";

interface IAllPostsPageProps {
  posts:IPost[];
}

function AllPostsPage(props:IAllPostsPageProps) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All posts"/>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
