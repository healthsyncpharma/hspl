import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealthSync Pharma Ltd | Pharmaceutical Wholesale in Zambia",
  description: "HealthSync Pharma Ltd - Zambia's modern wholesale pharmaceutical distributor. Sourcing quality medicines from global manufacturers since 1984.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
          <script src="https://chatebot.com/embed/019db48d-9acb-71ff-8557-f3a1fa0fcae3.js" defer></script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
