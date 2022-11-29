import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IMarkdown, IPostData } from "../types/posts";

type IAllPost = IMarkdown & IPostData;
const postsDirectory = path.join(process.cwd(), "data", "posts");

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export function getPostData(postIdentifier: string): IAllPost {
  const filePath = path.join(postsDirectory, `${postIdentifier}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = postIdentifier.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    title: data.title,
    date: data.date,
    image: data.image,
    description: data.description,
    isFeatured: data.isFeatured,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile.replace(/\.md$/, ""));
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
