import MasterLayout from "./MasterLayout";
import "./global.css";

export const metadata = {
  title: "Ramandeep Bedi",
  description: "Welcome to my own personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MasterLayout>{children}</MasterLayout>
      </body>
    </html>
  );
}
