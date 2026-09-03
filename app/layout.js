import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://vdesignfountains.com"),
  title: "V Design Fountains and Waterfalls",
  description:
    "Premium fountain and waterfall design & installation for homes, gardens, resorts, and commercial spaces. Crafting living water, designing timeless elegance.",
  keywords:
    "fountains, waterfalls, water features, garden fountains, wall waterfalls, pool fountains, landscape design, luxury water features",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "V Design Fountains and Waterfalls",
    description:
      "Premium fountain and waterfall design & installation. Crafting living water, designing timeless elegance.",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "V Design Fountains and Waterfalls",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
