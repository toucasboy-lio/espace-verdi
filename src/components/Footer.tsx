import { projectData } from '../data/lots';

/**
 * Pied de page : coordonnées, livraison, mentions légales.
 */
function Footer() {
  const { projectInfo } = projectData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Coordonnées */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{projectInfo.name}</h3>
            <address className="not-italic text-sm leading-relaxed text-slate-300">
              <p>{projectInfo.address}</p>
              {projectInfo.phones.map((phone) => (
                <p key={phone} className="mt-2">
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="transition-colors hover:text-emerald-brand"
                  >
                    {phone}
                  </a>
                </p>
              ))}
              <p>
                <a
                  href={`mailto:${projectInfo.email}`}
                  className="transition-colors hover:text-emerald-brand"
                >
                  {projectInfo.email}
                </a>
              </p>
            </address>
          </div>

          {/* Livraison */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Livraison</h3>
            <p className="text-sm text-slate-300">
              <span className="font-medium text-white">
                {projectInfo.deliveryDate}
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-300">
              {projectInfo.deliveryCondition}
            </p>
          </div>

          {/* Mentions légales */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Informations</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" className="transition-colors hover:text-emerald-brand">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-emerald-brand">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-emerald-brand">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
          © {currentYear} {projectInfo.name}. Tous droits réservés. Programme
          immobilier tertiaire — {projectInfo.totalLotsCount} lots modulables.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
