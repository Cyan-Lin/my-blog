"use client";

import { usePreview } from "@/sanity/lib/preview";
import BlogList from "@/components/BlogList";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
}
