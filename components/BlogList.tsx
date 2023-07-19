"use client";

import { urlForImage } from "@/sanity/lib/image";
import category from "@/sanity/schemas/category";
import { Post } from "@/typings";
import Image from "next/image";
import IconSvg from "./svg";
// import { useEffect } from "react";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  // useEffect(() => {
  //   console.log("Your posts:", posts);
  // }, []);
  console.log("Your posts:", posts);

  return (
    <div className="w-7/12 mx-auto">
      {/* <hr className="border-[--color-light-cyan] mb-10" /> */}
      {/* Posts */}
      {posts.map((post) => (
        <div
          key={post._id}
          className="relative w-full mb-6 px-8 py-4 cursor-pointer border-2 border-[--color-grey-light-1] rounded-md shadow bg-[--color-white] group"
        >
          <div className="w-full h-full group-hover:backdrop-blur-sm absolute top-0 left-0 transition-all"></div>
          <button className="flex items-center gap-1 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-0.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-transform">
            Read Post
            <IconSvg
              fill={"transparent"}
              stroke={"var(--color-black)"}
              strokeWidth={2}
              size={12}
              type="upRightArrow"
            />
          </button>
          <div className="">
            {/* <Image
              className="object-cover object-left lg:object-center hover:scale-105 transition-transform duration-200 ease-out"
              src={urlForImage(post.mainImage).url()}
              alt={post.author.name}
              fill
            /> */}
            <div className="">
              <h3 className="text-xl font-bold mb-5">{post.title}</h3>
              <p className="line-clamp-5">
                NPM v7 預設會安裝
                peerDependencies，這可能會導致有些套件出現相依性問題，這時可以在
                npm install 的時候加上 --legacy-peer-deps
                參數來解決，這篇來了解一下為什麼會發生這問題。 NPM v7 預設會安裝
                peerDependencies，這可能會導致有些套件出現相依性問題，這時可以在
                npm install 的時候加上 --legacy-peer-deps
                參數來解決，這篇來了解一下為什麼會發生這問題。
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* <p className="">{post.title}</p> */}
            {/* <p className="">{post.body[0].code}</p> */}
            <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
              {post.categories.map((category) => {
                return (
                  <div className="bg-[--color-grey-light-2] text-center text-black px-3 py-1 rounded-sm text-sm">
                    <p>{category.title}</p>
                  </div>
                );
              })}
            </div>
            <span className="text-xs text-[--color-grey-dark-4]">
              {new Intl.DateTimeFormat("zh-tw", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                timeZone: "Asia/Taipei",
              }).format(new Date(post._createdAt))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
