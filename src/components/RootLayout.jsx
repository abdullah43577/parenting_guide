import Footer from './Footer';

export default function RootLayout({ children }) {
  return (
    <>
      {/* <header>This is the header</header> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
