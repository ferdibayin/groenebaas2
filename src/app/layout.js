import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Groene Baas B.V.",
  description: "Created By Ferdi Bayin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        {children} 
      </body>
    </html>
  );
}
