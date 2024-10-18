import "./globals.css";


export const metadata = {
  title: "Horgan Mediation Solutions",
  description: "Horgan Mediation Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

