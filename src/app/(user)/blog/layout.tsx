import "@/src/app/globals.css";

export const metadata = {
  title: "Cyan's Blog",
  description: "This is a blog created by Cyan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-3xl font-bold w-7/12 mx-auto py-5 mt-2 px-10">
        {/* Cyan's Blog */}
        BLOG
      </h2>
      {children}
    </>
  );
}
