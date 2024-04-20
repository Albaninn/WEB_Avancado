// src/app/RootLayout.tsx
import React, { ReactNode } from 'react';
import './globals.css'

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <header>
        {/* Seu cabeçalho aqui */}
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer>
        {/* Seu rodapé aqui */}
      </footer>
    </>
  );
}
