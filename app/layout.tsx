import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "ONYXX THREADS | Handcrafted Masterpieces & Wearable Art",
  description: "Bespoke tapestry crochet and luxury wearable art handcrafted in Accra, Ghana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}