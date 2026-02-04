import "./globals.css";

export const metadata = {
  title: "Trading Risk Manager",
  description: "Professional trading risk & journaling tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center">
        <main className="w-full max-w-md p-4">
          {children}
        </main>
      </body>
    </html>
  );
}