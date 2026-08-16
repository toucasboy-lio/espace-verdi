import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionTitle from '../components/SectionTitle';
import { projectData } from '../data/lots';

/**
 * Page Contact — Coordonnées et prise de contact.
 */
function ContactPage() {
  const { projectInfo } = projectData;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Contactez-nous"
        subtitle="Une question sur le programme Espace VERDI ? Notre équipe est à votre disposition."
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
              <ul className="mt-2 space-y-3">
                {projectInfo.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-lg text-emerald-brand transition-colors hover:text-emerald-700"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
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

          {/*<article className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
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
          </article>*/}
        </div>

        {/* Encart CTA + livraison */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-navy p-8 text-white">
            <h3 className="text-xl font-bold">Programme Espace VERDI</h3>
            <p className="mt-4 text-slate-300">
              Une vingtaine de lots tertiaires modulables — livraison{' '}
              <span className="font-semibold text-emerald-brand">
                {projectInfo.deliveryDate}
              </span>
            </p>
            <p className="mt-4 text-sm text-slate-400">
              {projectInfo.deliveryCondition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
