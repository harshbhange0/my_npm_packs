import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string(),
});
export const logInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export const createBlog = z.object({
  title: z.string(),
  content: z.string(),
});
export const updateBlog = z.object({
  title: z.string(),
  content: z.string(),
});
export type RegisterInputs = z.infer<typeof registerSchema>;
export type LogInInputs = z.infer<typeof logInSchema>;
export type CreateBlogInputs = z.infer<typeof createBlog>;
export type UpdateBlogInputs = z.infer<typeof updateBlog>;
export interface PostTypes {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  authorId?: string;
  authorEmail?: string;
  authorName?: string;
  type?: "normal-post" | "update-post";
}
export type PostsTypes = PostTypes[];
