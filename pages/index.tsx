import Head from "next/head";
import { Fragment } from "react";
import FeaturedPost from "../components/featured-posts/featured-posts";
import Hero from "../components/hero/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import { IPost } from "../types/posts";
interface IHomePageProps {
  posts: IPost[];
}

function HomePage(props: IHomePageProps) {

  return (
    <Fragment>
      <Head>
        <title>Luke's Blog</title>
        <meta name="description" content=" Nutrition, Programming, Blockchain" />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

// use getStatisProps cause the data almost never change

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();


  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800, // telling nextjs to not only execute once during build proccess but also every 100 sec
    //this is to ensure our data would still be updated on the client side even after deployment
    // if you dont write revalidate, then after build deployment, there wont be any change to the data
  };
}

export default HomePage;
