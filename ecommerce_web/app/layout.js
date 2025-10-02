
import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Header from "@/components/header";


export const metadata = {
  title: "Mukaza Store",
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
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
