import {
  faClock,
  faDownload,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import { projectData } from '../data/lots';

/** Horaires de contact placeholder — à personnaliser */
const contactHours = [
  'Lundi – Vendredi : 9h00 – 12h30 / 14h00 – 18h00',
  'Samedi : sur rendez-vous',
];

/**
 * Page Contact — Coordonnées et prise de contact.
 */
function ContactPage() {
  const { projectInfo } = projectData;
  const phoneHref = `tel:${projectInfo.phone.replace(/\s/g, '')}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Contactez-nous"
        subtitle="Une question sur le programme Espace VERDI ? Notre équipe commerciale est à votre disposition."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Coordonnées */}
        <div className="space-y-6">
          <article className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-navy">Téléphone</h3>
              <a
                href={phoneHref}
                className="mt-1 block text-lg text-emerald-brand transition-colors hover:text-emerald-700"
              >
                {projectInfo.phone}
              </a>
            </div>
          </article>

          <article className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-navy">Email</h3>
              <a
                href={`mailto:${projectInfo.email}`}
                className="mt-1 block text-lg text-emerald-brand transition-colors hover:text-emerald-700"
              >
                {projectInfo.email}
              </a>
            </div>
          </article>

          <article className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
              <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-navy">Adresse du programme</h3>
              <p className="mt-1 text-slate-600">{projectInfo.address}</p>
              <p className="mt-2 text-sm text-slate-500">
                {projectInfo.locationDetails}
              </p>
            </div>
          </article>

          <article className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
              <FontAwesomeIcon icon={faClock} className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-navy">Horaires</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {contactHours.map((slot) => (
                  <li key={slot}>{slot}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        {/* Encart CTA + livraison */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-navy p-8 text-white">
            <h3 className="text-xl font-bold">Programme Espace VERDI</h3>
            <p className="mt-4 text-slate-300">
              {projectInfo.totalLotsCount} lots tertiaires modulables — livraison{' '}
              <span className="font-semibold text-emerald-brand">
                {projectInfo.deliveryDate}
              </span>
            </p>
            <p className="mt-4 text-sm text-slate-400">
              {projectInfo.deliveryCondition}
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-navy">
              Dossier commercial complet
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Plans, surfaces, conditions de vente et argumentaire fiscal SCI.
            </p>
            <div className="mt-6">
              <CTAButton href="/dossier-espace-verdi.pdf" download variant="emerald">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Télécharger le dossier
              </CTAButton>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-surface p-6">
            <p className="text-sm leading-relaxed text-slate-600">
              Les coordonnées affichées sont provisoires. Remplacez-les dans{' '}
              <code className="rounded bg-slate-200 px-1 text-xs">src/data/lots.ts</code>{' '}
              lorsque vos informations définitives seront disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
