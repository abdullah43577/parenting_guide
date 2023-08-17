import Footer from './Footer';

export default function RootLayout({ children }) {
  return (
    <>
      <header>This is the header</header>
      <main className="max-w-full mx-8 xl:max-w-[900px] lg:mx-auto">{children}</main>
      <Footer />
    </>
  );
}
