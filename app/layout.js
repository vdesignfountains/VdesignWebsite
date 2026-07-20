import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "V Design Fountains and Waterfalls",
  description:
    "Premium fountain and waterfall design & installation for homes, gardens, resorts, and commercial spaces. Crafting living water, designing timeless elegance.",
  keywords:
    "fountains, waterfalls, water features, garden fountains, wall waterfalls, pool fountains, landscape design, luxury water features",
  openGraph: {
    title: "V Design Fountains and Waterfalls",
    description:
      "Premium fountain and waterfall design & installation. Crafting living water, designing timeless elegance.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#C1621D" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
