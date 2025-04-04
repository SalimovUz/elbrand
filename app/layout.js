import "./globals.css";
import favicon from "@/public/elbrandlogo.png";

export const metadata = {
  title: "Elbrand",
  description: "Created by Salimov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/elbrandlogo" type="image/jpeg" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
