import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import PreviewSuspense from "@/components/PreviewSuspense";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

async function Blog() {
  const { isEnabled } = draftMode(); // draftMode 是preview的新版
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <>
      {/* <div className="">We're not in Preview Mode!</div> */}
      <BlogList posts={posts} />
    </>
  );
}

export default Blog;
