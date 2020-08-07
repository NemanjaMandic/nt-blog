import Network from "./network";

const BASE_URL = `https://frontend-api-test-nultien.azurewebsites.net/api`;
const BLOG_POSTS = `BlogPosts`;
const CATEGORY = `Category`;

export const getBlogPostsAPI = () => Network.get(`${BASE_URL}/${BLOG_POSTS}`);
export const sendBlogPostAPI = (data) =>
  Network.post(`${BASE_URL}/${BLOG_POSTS}`, data);

export const deleteBlogPostAPI = (id) =>
  Network.delete(`${BASE_URL}/${BLOG_POSTS}`, id);

export const getCategoriesAPI = () => Network.get(`${BASE_URL}/${CATEGORY}`);
