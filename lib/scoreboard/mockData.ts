import type { ScoreboardData } from "@/types/scoreboard";
export const scoreboardDataByKlant: Record<string, ScoreboardData> = {
  fitnessunique: {
    kpi: {
      visitors: {
        value: "248",
        subtitle: "203 naar conversiepagina's",
      },
      conversions: {
        value: "11",
        subtitle: "Conversiepercentage 4.4%",
      },
      goal: {
        value: "8",
        subtitle: "Voortgang 11 / 8",
      },
    },
    topPages: [
      { page: "/", visitors: 131, share: "52.8%" },
      { page: "/beweeg-in-2026", visitors: 114, share: "46.0%" },
      { page: "/aanbod/fitness", visitors: 90, share: "36.3%" },
      { page: "/aanbod/personal-training", visitors: 29, share: "11.7%" },
    ],
    lostTraffic: [
      { page: "/", lost: 26, share: "57.8%" },
      { page: "/beweeg-in-2026", lost: 14, share: "31.1%" },
      { page: "/aanbod/personal-training", lost: 2, share: "4.4%" },
    ],
    conversionEffectiveness: [
      { page: "/contact", visitors: 56, conversions: 8, rate: "14.3%" },
      { page: "/intake", visitors: 42, conversions: 2, rate: "4.8%" },
      { page: "/gratis-proefles", visitors: 31, conversions: 1, rate: "3.2%" },
    ],
  },

  sanotie: {
    kpi: {
      visitors: {
        value: "1.284",
        subtitle: "842 naar conversiepagina's",
      },
      conversions: {
        value: "37",
        subtitle: "Conversiepercentage 2.9%",
      },
      goal: {
        value: "25",
        subtitle: "Voortgang 37 / 25",
      },
    },
    topPages: [
      { page: "/", visitors: 602, share: "46.9%" },
      { page: "/behandeling", visitors: 401, share: "31.2%" },
      { page: "/over-ons", visitors: 210, share: "16.4%" },
      { page: "/contact", visitors: 122, share: "9.5%" },
    ],
    lostTraffic: [
      { page: "/", lost: 88, share: "48.9%" },
      { page: "/over-ons", lost: 47, share: "26.1%" },
      { page: "/behandeling", lost: 31, share: "17.2%" },
    ],
    conversionEffectiveness: [
      { page: "/contact", visitors: 122, conversions: 21, rate: "17.2%" },
      { page: "/afspraak-maken", visitors: 94, conversions: 12, rate: "12.8%" },
      { page: "/intake", visitors: 53, conversions: 4, rate: "7.5%" },
    ],
  },

  groeihero: {
    kpi: {
      visitors: {
        value: "912",
        subtitle: "615 naar conversiepagina's",
      },
      conversions: {
        value: "19",
        subtitle: "Conversiepercentage 2.1%",
      },
      goal: {
        value: "15",
        subtitle: "Voortgang 19 / 15",
      },
    },
    topPages: [
      { page: "/", visitors: 311, share: "34.1%" },
      { page: "/diensten", visitors: 244, share: "26.8%" },
      { page: "/cases", visitors: 163, share: "17.9%" },
      { page: "/contact", visitors: 88, share: "9.6%" },
    ],
    lostTraffic: [
      { page: "/", lost: 41, share: "39.4%" },
      { page: "/diensten", lost: 33, share: "31.7%" },
      { page: "/cases", lost: 17, share: "16.3%" },
    ],
    conversionEffectiveness: [
      { page: "/contact", visitors: 88, conversions: 10, rate: "11.4%" },
      { page: "/strategie-call", visitors: 64, conversions: 6, rate: "9.4%" },
      { page: "/demo", visitors: 41, conversions: 3, rate: "7.3%" },
    ],
  },

  horizon: {
    kpi: {
      visitors: {
        value: "2.041",
        subtitle: "1.121 naar conversiepagina's",
      },
      conversions: {
        value: "54",
        subtitle: "Conversiepercentage 2.6%",
      },
      goal: {
        value: "40",
        subtitle: "Voortgang 54 / 40",
      },
    },
    topPages: [
      { page: "/", visitors: 811, share: "39.7%" },
      { page: "/hypotheek-berekenen", visitors: 544, share: "26.7%" },
      { page: "/get-in-touch", visitors: 201, share: "9.8%" },
      { page: "/het-winnende-bod", visitors: 165, share: "8.1%" },
    ],
    lostTraffic: [
      { page: "/", lost: 111, share: "44.4%" },
      { page: "/hypotheek-berekenen", lost: 72, share: "28.8%" },
      { page: "/het-winnende-bod", lost: 29, share: "11.6%" },
    ],
    conversionEffectiveness: [
      { page: "/get-in-touch", visitors: 201, conversions: 22, rate: "10.9%" },
      { page: "/adviesgesprek", visitors: 130, conversions: 16, rate: "12.3%" },
      { page: "/bereken-je-hypotheek", visitors: 97, conversions: 8, rate: "8.2%" },
    ],
  },

  westnederlandbouw: {
    kpi: {
      visitors: {
        value: "643",
        subtitle: "318 naar conversiepagina's",
      },
      conversions: {
        value: "9",
        subtitle: "Conversiepercentage 1.4%",
      },
      goal: {
        value: "12",
        subtitle: "Voortgang 9 / 12",
      },
    },
    topPages: [
      { page: "/", visitors: 220, share: "34.2%" },
      { page: "/projecten", visitors: 141, share: "21.9%" },
      { page: "/diensten", visitors: 103, share: "16.0%" },
      { page: "/contact", visitors: 54, share: "8.4%" },
    ],
    lostTraffic: [
      { page: "/", lost: 37, share: "42.0%" },
      { page: "/projecten", lost: 22, share: "25.0%" },
      { page: "/diensten", lost: 14, share: "15.9%" },
    ],
    conversionEffectiveness: [
      { page: "/contact", visitors: 54, conversions: 5, rate: "9.3%" },
      { page: "/offerte-aanvragen", visitors: 34, conversions: 3, rate: "8.8%" },
      { page: "/project-aanmelden", visitors: 19, conversions: 1, rate: "5.3%" },
    ],
  },
} as const;
