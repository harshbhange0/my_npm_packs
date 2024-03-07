import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
}, {
    email: string;
    password: string;
    name: string;
}>;
export declare const logInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createBlog: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updateBlog: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type RegisterInputs = z.infer<typeof registerSchema>;
export type LogInInputs = z.infer<typeof logInSchema>;
export type CreateBlogInputs = z.infer<typeof createBlog>;
export type UpdateBlogInputs = z.infer<typeof updateBlog>;
export interface authorInfo {
    id: string;
    name: string;
    email: string;
}
export interface PostTypes {
    id: string;
    title: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    author: authorInfo;
    published?: boolean;
    type?: "normal-post" | "update-post";
}
export type PostsTypes = PostTypes[];
