import "./globals.css";

export const metadata = {
  title: "Trading Web",
  description: "Simple Trading Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
