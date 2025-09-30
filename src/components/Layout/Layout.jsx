import React from "react";
import Nav from "../nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
