import {
  faCalculator,
  faChartLine,
  faPercent,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useMemo, useState } from 'react';
import Badge from '../components/Badge';
import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import { formatEuro, projectData } from '../data/lots';

const LOAN_TERMS = [10, 15, 20] as const;

const BENEFIT_POINTS: {
  title: string;
  description: string;
  icon: IconDefinition;
}[] = [
  {
    title: 'Protection de vos actifs',
    description:
      'Séparation claire entre votre immobilier professionnel et les risques de votre société d\'exploitation.',
    icon: faShieldHalved,
  },
  {
    title: 'Création de valeur',
    description:
      'Vos loyers ne sont plus une perte sèche, ils remboursent un bien qui vous appartiendra à 100 % pour votre retraite ou revente.',
    icon: faChartLine,
  },
  {
    title: 'Économie de TVA immédiate',
    description:
      'Récupération de 20 % de TVA sur l\'achat du bureau brut et sur la totalité de vos travaux d\'aménagement.',
    icon: faPercent,
  },
];

/**
 * Calcule la mensualité et le patrimoine constitué pour une acquisition directe.
 */
function computeAcquisitionSimulation(
  officePrice: number,
  amenagement: number,
  contribution: number,
  years: number,
  interestRate: number,
) {
  const totalProject = officePrice + amenagement;
  const effectiveContribution = Math.min(contribution, totalProject);
  const loanAmount = Math.max(0, totalProject - effectiveContribution);

  let monthlyPayment = 0;
  if (loanAmount > 0) {
    const monthlyRate = interestRate / 100 / 12;
    const months = years * 12;
    monthlyPayment = Math.round(
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1),
    );
  }

  return {
    totalProject,
    monthlyPayment,
    effectiveContribution,
    loanAmount,
  };
}

/**
 * Page Simulation — financement d'acquisition directe de bureaux.
 */
function SimulationPage() {
  const { simulationDefaults } = projectData;
  const { interestRate } = simulationDefaults;
  const formattedRate = interestRate.toLocaleString('fr-FR');

  const [officePrice, setOfficePrice] = useState(
    simulationDefaults.defaultOfficePriceHT,
  );
  const [amenagement, setAmenagement] = useState(
    simulationDefaults.defaultAmenagement,
  );
  const [contribution, setContribution] = useState(
    simulationDefaults.defaultPersonalContribution,
  );
  const [years, setYears] = useState(simulationDefaults.defaultYears);

  const { totalProject, monthlyPayment, effectiveContribution, loanAmount } =
    useMemo(
      () =>
        computeAcquisitionSimulation(
          officePrice,
          amenagement,
          contribution,
          years,
          interestRate,
        ),
      [officePrice, amenagement, contribution, years, interestRate],
    );

  const handleAmenagementChange = (value: string) => {
    const parsed = Number(value);
    setAmenagement(Number.isNaN(parsed) ? 0 : Math.max(0, parsed));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Transformez vos loyers en patrimoine."
        subtitle="Simulez le financement de vos bureaux et devenez propriétaire de votre outil de travail."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Bloc de saisie */}
        <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
              <FontAwesomeIcon icon={faCalculator} className="text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-navy">Votre projet</h3>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-600">
              Prix du bureau (HT) :{' '}
              <span className="text-emerald-brand">{formatEuro(officePrice)}</span>
            </span>
            <input
              type="range"
              min={simulationDefaults.officePriceMin}
              max={simulationDefaults.officePriceMax}
              step={1000}
              value={officePrice}
              onChange={(e) => setOfficePrice(Number(e.target.value))}
              className="mt-2 w-full accent-emerald-brand"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>{formatEuro(simulationDefaults.officePriceMin)}</span>
              <span>Lots modulables</span>
              <span>{formatEuro(simulationDefaults.officePriceMax)}</span>
            </div>
          </label>

          <label className="mt-8 block">
            <span className="text-sm font-medium text-slate-600">
              Aménagement (HT)
            </span>
            <input
              type="number"
              min={0}
              step={1000}
              value={amenagement}
              onChange={(e) => handleAmenagementChange(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-navy focus:border-emerald-brand focus:outline-none focus:ring-1 focus:ring-emerald-brand"
            />
          </label>

          <label className="mt-8 block">
            <span className="text-sm font-medium text-slate-600">
              Apport personnel :{' '}
              <span className="text-emerald-brand">
                {formatEuro(effectiveContribution)}
              </span>
            </span>
            <input
              type="range"
              min={0}
              max={simulationDefaults.personalContributionMax}
              step={1000}
              value={Math.min(contribution, simulationDefaults.personalContributionMax)}
              onChange={(e) => setContribution(Number(e.target.value))}
              className="mt-2 w-full accent-emerald-brand"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>{formatEuro(0)}</span>
              <span>{formatEuro(simulationDefaults.personalContributionMax)}</span>
            </div>
          </label>

          <div className="mt-8">
            <span className="text-sm font-medium text-slate-600">
              Durée du crédit :{' '}
              <span className="text-emerald-brand">{years} ans</span>
            </span>
            <div className="mt-3 flex gap-2">
              {LOAN_TERMS.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setYears(term)}
                  className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    years === term
                      ? 'bg-emerald-brand text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {term} ans
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Taux indicatif : {formattedRate} %
            </p>
          </div>
        </div>

        {/* Bloc résultat */}
        <div className="flex flex-col justify-center rounded-xl border border-emerald-brand/20 bg-emerald-brand/5 p-8 md:p-10">
          <div className="flex flex-wrap gap-2">
            <Badge label={`${years} ans`} variant="emerald" />
            <Badge label={`${formattedRate} %`} variant="emerald" />
            <Badge label={`Emprunt ${formatEuro(loanAmount)}`} variant="navy" />
          </div>

          <p className="mt-6 text-sm font-medium uppercase tracking-wide text-slate-500">
            Mensualité estimée
          </p>
          <p className="mt-1 text-4xl font-bold text-emerald-brand transition-all duration-300 md:text-5xl">
            {formatEuro(monthlyPayment)}
          </p>
          <p className="text-lg font-medium text-slate-600">/ mois</p>
          <p className="mt-2 text-sm text-slate-600">
            Calcul sur {years} ans à {formattedRate} % (hors assurance)
          </p>

          <div className="mt-8 border-t border-emerald-brand/20 pt-8">
            <p className="text-2xl font-bold leading-snug text-navy transition-all duration-300 md:text-3xl">
              Au bout de {years} ans, vous êtes 100&nbsp;% propriétaire de vos
              bureaux
            </p>
            <p className="mt-4 text-xl font-bold text-emerald-brand transition-all duration-300 md:text-2xl">
              Patrimoine constitué : {formatEuro(totalProject)} HT
            </p>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-slate-600">
            {simulationDefaults.tvaNotice}
          </p>

          <div className="mt-8">
            <CTAButton to="/contact" variant="emerald" className="w-full sm:w-auto">
              Contacter notre équipe pour ce projet
            </CTAButton>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Simulation indicative à visée marketing. Pour un chiffrage précis,
            consultez votre conseiller fiscal et financier.
          </p>
        </div>
      </div>

      {/* Bloc explicatif */}
      <section className="mt-16 rounded-xl bg-white p-8 shadow-sm md:p-12">
        <h3 className="text-xl font-bold text-navy">
          Un investissement rentable pour vous et votre entreprise
        </h3>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {BENEFIT_POINTS.map((point) => (
            <div key={point.title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
                <FontAwesomeIcon icon={point.icon} className="text-xl" />
              </div>
              <p className="font-semibold text-navy">{point.title}</p>
              <p className="mt-2 leading-relaxed text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SimulationPage;
