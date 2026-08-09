import { faBars, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { projectData } from '../data/lots';
import CTAButton from './CTAButton';

/** Liens de navigation principaux */
const navLinks = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/le-programme', label: 'Le Programme', end: false },
  { to: '/offres', label: 'Offres', end: false },
  // { to: '/simulation', label: 'Simulation', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

/**
 * Barre de navigation sticky avec menu hamburger mobile.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { name } = projectData.projectInfo;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-emerald-brand ${
      isActive ? 'nav-link-active' : 'text-slate-600'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-navy md:text-2xl"
        >
          {name}
        </NavLink>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton
            href="/dossier-espace-verdi.pdf"
            download
            variant="emerald"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Dossier Commercial
          </CTAButton>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-xl" />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton
                href="/dossier-espace-verdi.pdf"
                download
                variant="emerald"
                className="w-full"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Dossier Commercial
              </CTAButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
