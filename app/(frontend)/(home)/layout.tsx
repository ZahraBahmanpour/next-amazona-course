import Header from "@/components/header/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <footer className="flex justify-center items-center p-4  text-grayHoverColor">
        <p>Copyright © 2023 - All right reserved by Next Amazona V2</p>
      </footer>
    </div>
  );
}
