import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "ONYXX THREADS // Tapestry Portraits & Custom Crochet",
  description:
    "Handmade tapestry crochet art, portraiture, and custom clothing by Onyxx Threads. Handcrafted in Ghana. Worldwide shipping.",
  keywords: [
    "Onyxx Threads",
    "Tapestry Crochet",
    "Crochet Ghana",
    "Custom Crochet Clothes",
    "Handmade Tapestry Art",
    "Crochet Portraits",
    "Kwame Nkrumah Tapestry",
  ],
  authors: [{ name: "Onyxx Threads" }],
  openGraph: {
    title: "ONYXX THREADS // Tapestry Portraits & Custom Crochet",
    description:
      "Handmade tapestry crochet art, portraiture, and custom clothing by Onyxx Threads. Handcrafted in Ghana. Worldwide shipping.",
    url: "https://onyxxthreads.vercel.app",
    siteName: "Onyxx Threads",
    images: [
      {
        url: "/nkrumah.jpg",
        width: 1200,
        height: 630,
        alt: "Onyxx Threads - Kwame Nkrumah Tapestry Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONYXX THREADS // Tapestry Portraits & Custom Crochet",
    description:
      "Handmade tapestry crochet art, portraiture, and custom clothing by Onyxx Threads. Handcrafted in Ghana. Worldwide shipping.",
    images: ["/nkrumah.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ backgroundColor: "#050507", margin: 0, padding: 0 }}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}