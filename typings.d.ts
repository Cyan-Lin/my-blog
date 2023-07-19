import { Image, Reference, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Body[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  publishedAt: string;
  title: string;
}

interface Author extends Base {
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  alt: string;
  asset: Reference;
}

interface Reference {
  _rev: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Body extends Base {
  _type: "block" | "image" | "code";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  _key: string;
  asset: Reference;
  markDefs: any;
  children: Span[];
  filename: string;
  language: string;
  code: string;
}

interface Category extends Base {
  description: string;
  title: string;
}
