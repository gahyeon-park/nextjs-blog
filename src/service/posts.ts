import { readFile } from "fs/promises";
import path from "path";

export type Tpost = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: false;
};

export const getPosts = async (): Promise<Tpost[]> => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  let postData = await readFile(filePath, 'utf-8');
  return JSON.parse(postData);
}