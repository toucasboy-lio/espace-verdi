import { faChartLine, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';
import KeyFigure from '../components/KeyFigure';
import SectionTitle from '../components/SectionTitle';
import {
  formatEuro,
  getAverageStartingPrice,
  projectData,
} from '../data/lots';

/** Bornes des curseurs du simulateur */
const RENT_MIN = 500;
const RENT_MAX = 5000;
const YEARS_MIN = 5;
const YEARS_MAX = 30;

/**
 * Calcule les montants comparatifs location vs achat SCI.
 * Logique marketing simplifiée — à affiner avec un conseiller fiscal.
 */
function computeSimulation(monthlyRent: number, years: number) {
  const averagePrice = getAverageStartingPrice();

  /** Loyers versés sans retour sur investissement */
  const lostRent = monthlyRent * 12 * years;

  /**
   * Capital constitué estimé en SCI :
   * - Valorisation du bien (~2 %/an)
   * - Part des loyers remboursant le crédit (~85 %)
   */
  const propertyValue = averagePrice * Math.pow(1.02, years);
  const creditRepayment = monthlyRent * 12 * years * 0.85;
  const capitalBuilt = Math.round(propertyValue + creditRepayment);

  const netGain = capitalBuilt - lostRent;

  return { lostRent, capitalBuilt, netGain, averagePrice };
}

/**
 * Page Simulation — Simulateur Patrimoine & Retraite SCI interactif.
 */
function SimulationPage() {
  const { simulationDefaults } = projectData;

  const [monthlyRent, setMonthlyRent] = useState(
    simulationDefaults.defaultMonthlyRent,
  );
  const [years, setYears] = useState(simulationDefaults.defaultYears);

  const { lostRent, capitalBuilt, netGain } = useMemo(
    () => computeSimulation(monthlyRent, years),
    [monthlyRent, years],
  );

  /** Pourcentage max des barres comparatives */
  const maxValue = Math.max(lostRent, capitalBuilt, 1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionTitle
        title="Simulateur Patrimoine & Retraite SCI"
        subtitle="Comparez vos loyers à fonds perdus et le capital que vous pourriez constituer en achetant via une SCI."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Curseurs d'entrée */}
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-lg font-semibold text-navy">
            Votre situation
          </h3>

          <label className="block">
            <span className="text-sm font-medium text-slate-600">
              Loyer mensuel actuel :{' '}
              <span className="text-emerald-brand">{formatEuro(monthlyRent)}</span>
            </span>
            <input
              type="range"
              min={RENT_MIN}
              max={RENT_MAX}
              step={50}
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="mt-2 w-full accent-emerald-brand"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>{formatEuro(RENT_MIN)}</span>
              <span>{formatEuro(RENT_MAX)}</span>
            </div>
          </label>

          <label className="mt-8 block">
            <span className="text-sm font-medium text-slate-600">
              Années d&apos;exercice restantes :{' '}
              <span className="text-emerald-brand">{years} ans</span>
            </span>
            <input
              type="range"
              min={YEARS_MIN}
              max={YEARS_MAX}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="mt-2 w-full accent-emerald-brand"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>{YEARS_MIN} ans</span>
              <span>{YEARS_MAX} ans</span>
            </div>
          </label>
        </div>

        {/* Chiffres clés */}
        <div className="grid gap-4 sm:grid-cols-2">
          <KeyFigure
            value={formatEuro(lostRent)}
            label="Loyers à fonds perdus (location)"
            accent="navy"
          />
          <KeyFigure
            value={formatEuro(capitalBuilt)}
            label="Capital constitué estimé (SCI)"
            accent="emerald"
          />
          <div className="sm:col-span-2">
            <KeyFigure
              value={`${netGain >= 0 ? '+' : ''}${formatEuro(netGain)}`}
              label="Écart estimé en votre faveur (SCI vs location)"
              accent={netGain >= 0 ? 'emerald' : 'navy'}
            />
          </div>
        </div>
      </div>

      {/* Jauges comparatives */}
      <section className="mt-12 rounded-xl bg-white p-8 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-navy">
          <FontAwesomeIcon icon={faChartLine} className="text-emerald-brand" />
          Comparatif visuel sur {years} ans
        </h3>

        <div className="space-y-6">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-slate-600">
                Location classique — fonds perdus
              </span>
              <span className="font-semibold text-navy">{formatEuro(lostRent)}</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-500 transition-all duration-300"
                style={{ width: `${(lostRent / maxValue) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-slate-600">
                Achat via SCI — capital constitué
              </span>
              <span className="font-semibold text-emerald-brand">
                {formatEuro(capitalBuilt)}
              </span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-emerald-brand transition-all duration-300"
                style={{ width: `${(capitalBuilt / maxValue) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Encart explicatif TVA et remboursement crédit */}
      <section className="mt-10 rounded-xl border border-emerald-brand/20 bg-emerald-brand/5 p-8">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
          <FontAwesomeIcon icon={faInfoCircle} className="text-emerald-brand" />
          Comment fonctionne l&apos;achat en SCI ?
        </h3>
        <p className="mt-4 leading-relaxed text-slate-600">
          {simulationDefaults.tvaNotice}
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Le loyer versé par votre société d&apos;exploitation à la SCI rembourse
          le crédit immobilier, tandis que vous constituez un patrimoine
          immobilier pour votre retraite. À l&apos;inverse, en location classique,
          les loyers versés au bailleur sont des charges sans retour sur
          investissement.
        </p>
        <p className="mt-4 text-xs text-slate-500">
          Simulation indicative à visée marketing. Pour un chiffrage précis,
          consultez votre conseiller fiscal et financier.
        </p>
      </section>
    </div>
  );
}

export default SimulationPage;
