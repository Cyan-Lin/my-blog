import "@/src/app/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Cyan's Home",
  description: "This is a description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="header-container g-h-screen font-sans bg-[--color-grey-light-1]">
          <Header />
          <div className="pb-5">{children}</div>
        </body>
      </html>
      {/* <style jsx>{`
        .h-screen {
          height: 100vh;
        }
      `}</style> */}
    </>
  );
}
