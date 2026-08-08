import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Enveloppe globale : Navbar + contenu principal + Footer.
 */
function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-navy">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
