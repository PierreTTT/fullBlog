import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IMarkdown, IPostData } from "../types/posts";

type IAllPost = IMarkdown & IPostData;
const postsDirectory = path.join(process.cwd(), "data", "posts");

export function getPostData(fileName: string): IAllPost {
  const filePath = path.join(postsDirectory, fileName);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, "");

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
  const postFiles = fs.readdirSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
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
