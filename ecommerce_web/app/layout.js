
import "./globals.css";
import "./fanta.css";
import Header from "./header";
import Head from "./head";
import Footer from "./footer";


export const metadata = {
  title: "Mu-Store",
  description: "People's store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div id="portal" />
        <div id="app">
          <Header />
          <main>
            {children}
          </main>
          <div className="hr" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
