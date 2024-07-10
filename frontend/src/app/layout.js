import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers/AuthContext";
import {NextUIProvider} from "@nextui-org/system";

import Nav from "./components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
      <link
    rel="stylesheet"
    href="https://cdn.tailgrids.com/tailgrids-fallback.css"
  />
      </head> */}
      <AuthProvider>
      <body>
      <Nav>
        {children}
      </Nav>

      </body>
      </AuthProvider>
    </html>
  );
}
