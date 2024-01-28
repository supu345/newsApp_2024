import NextTopLoader from "nextjs-toploader";
import "../assets/css/style.css";
import "../assets/css/dropdownmenu.css";
import "../assets/css/sidebar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Metadata } from "next";

const metadata = {
  title: "News App",
  description: "This is news app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="This is news app" content={metadata.description} />
        {/* Add other meta tags as needed */}
      </head>
      <body>
        {children}
        <NextTopLoader color="#E60000" height={2} speed={200} />
      </body>
    </html>
  );
}
