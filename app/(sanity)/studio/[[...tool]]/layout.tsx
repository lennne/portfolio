import { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio studio",
  description: "My Portfolio studio",
};

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      {children}
    </html>
  );
}

export default Layout