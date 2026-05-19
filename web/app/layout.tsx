import "./globals.css";

export const metadata = {
  title: "Golden Nest Holiday Homes",
  description: "Holiday homes in Dubai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
