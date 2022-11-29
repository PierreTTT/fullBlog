import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import PostContent from "../../components/posts/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { IParams } from "../../types/fetchData";
import { IPost } from "../../types/posts";

interface IPostPageProps{
  post:IPost;
}

function PostPage(props:IPostPageProps) {
  return <PostContent post={props.post} />;
}

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  const { params } = context;
  const { slug } = params as IParams;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData
    },
    revalidate: 10
  }
}


export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""))
  return {
    paths: slugs.map(slug =>({params:{slug}})), //indicates that no page needs be created at build time
    fallback: false //indicates the type of fallback
  }
}

export default PostPage;
