import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import React from "react";

export default function RootLayout() {
  const { pathname } = useLocation();
  const element = useOutlet();
  return (
    <div className="root-layout">
      <NavBar />
      <main className="py-8">
        <AnimatePresence mode="wait" initial={false}>
          {element && React.cloneElement(element, { key: pathname })}
        </AnimatePresence>
      </main>
    </div>
  );
}
