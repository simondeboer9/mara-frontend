export type VisualInspectorVersion = {
  id: string;
  label: string;
  updatedAt: string;
  note: string;
};

export type VisualInspectorPageOption = {
  id: string;
  label: string;
  path: string;
};

export type VisualInspectorDevice = "desktop" | "tablet" | "mobile";
export type VisualInspectorPeriod =
  | "7dagen"
  | "30dagen"
  | "deze-maand"
  | "vorige-maand";

export type VisualInspectorPeriodOption = {
  id: VisualInspectorPeriod;
  label: string;
};

export type VisualInspectorTraffic =
  | "total"
  | "search"
  | "direct"
  | "referral"
  | "social"
  | "paid";

export type VisualInspectorTrafficOption = {
  id: VisualInspectorTraffic;
  label: string;
};

export type DwellTrafficMetrics = {
  visitors: number;
  shareOfPage: string;
  avgActiveTime: string;
  clicks: number;
};

export type DwellSection = {
  dwellId: string;
  label: string;
  top: number;
  height: number;
  visitors: number;
  shareOfPage: string;
  avgActiveTime: string;
  clicks: number;
  attentionIntensity: number;
  dropOffPercentage: number | null;
  trafficMetrics: Record<VisualInspectorTraffic, DwellTrafficMetrics>;
};

export type VisualInspectorData = {
  klantId: string;
  klantNaam: string;
  pages: VisualInspectorPageOption[];
  versions: VisualInspectorVersion[];
  periods: VisualInspectorPeriodOption[];
  trafficOptions: VisualInspectorTrafficOption[];
  dwellSections: DwellSection[];
  pageHeight: number;
  selectedPage: VisualInspectorPageOption;
  selectedVersion: VisualInspectorVersion;
  selectedDevice: VisualInspectorDevice;
  selectedPeriod: VisualInspectorPeriod;
  selectedTraffic: VisualInspectorTraffic[];
  selectedTrafficParam: string;
};

const klantNamen: Record<string, string> = {
  fitnessunique: "Fitness Unique",
  sanotie: "Sanotie",
  groeihero: "Groeihero",
  horizon: "Horizon Hypotheek",
  westnederlandbouw: "West Nederland Bouw",
};

const pageOptionsByKlant: Record<string, VisualInspectorPageOption[]> = {
  fitnessunique: [
    { id: "home", label: "Homepage", path: "/" },
    { id: "beweeg", label: "Beweeg in 2026", path: "/beweeg-in-2026" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],
  sanotie: [
    { id: "home", label: "Homepage", path: "/" },
    { id: "behandeling", label: "Behandeling", path: "/behandeling" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],
  groeihero: [
    { id: "home", label: "Homepage", path: "/" },
    { id: "diensten", label: "Diensten", path: "/diensten" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],
  horizon: [
    { id: "home", label: "Homepage", path: "/" },
    { id: "hypotheek", label: "Hypotheek berekenen", path: "/hypotheek-berekenen" },
    { id: "advies", label: "Adviesgesprek", path: "/adviesgesprek" },
  ],
  westnederlandbouw: [
    { id: "home", label: "Homepage", path: "/" },
    { id: "projecten", label: "Projecten", path: "/projecten" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],
};

const versions: VisualInspectorVersion[] = [
  {
    id: "v1",
    label: "V1",
    updatedAt: "3 maart 2026",
    note: "Eerste baseline zonder optimalisaties.",
  },
  {
    id: "v2",
    label: "V2",
    updatedAt: "7 maart 2026",
    note: "Nieuwe hero en duidelijkere CTA-hiërarchie.",
  },
  {
    id: "v3",
    label: "V3",
    updatedAt: "12 maart 2026",
    note: "Verbeterde spacing en trust-sectie toegevoegd.",
  },
  {
    id: "v4",
    label: "V4",
    updatedAt: "18 maart 2026",
    note: "Huidige voorkeursvariant voor verdere evaluatie.",
  },
];

const periods: VisualInspectorPeriodOption[] = [
  { id: "7dagen", label: "Laatste 7 dagen" },
  { id: "30dagen", label: "Laatste 30 dagen" },
  { id: "deze-maand", label: "Deze maand" },
  { id: "vorige-maand", label: "Vorige maand" },
];

const trafficOptions: VisualInspectorTrafficOption[] = [
  { id: "total", label: "Totaal" },
  { id: "search", label: "Search" },
  { id: "direct", label: "Direct" },
  { id: "referral", label: "Referral" },
  { id: "social", label: "Social" },
  { id: "paid", label: "Paid" },
];

const trafficFactors: Record<
  Exclude<VisualInspectorTraffic, "total">,
  { visitors: number; share: number; clicks: number; time: number }
> = {
  search: { visitors: 0.46, share: 0.88, clicks: 0.42, time: 1.08 },
  direct: { visitors: 0.24, share: 0.71, clicks: 0.22, time: 0.92 },
  referral: { visitors: 0.12, share: 0.54, clicks: 0.11, time: 0.83 },
  social: { visitors: 0.1, share: 0.48, clicks: 0.16, time: 0.74 },
  paid: { visitors: 0.18, share: 0.63, clicks: 0.28, time: 0.89 },
};

function formatSeconds(seconds: number) {
  return `${seconds.toFixed(1)}s`;
}

function buildTrafficMetrics(
  section: Omit<DwellSection, "trafficMetrics" | "attentionIntensity" | "dropOffPercentage">,
  index: number
): Record<VisualInspectorTraffic, DwellTrafficMetrics> {
  const totalSeconds = Number.parseFloat(section.avgActiveTime.replace("s", ""));

  const metrics: Record<VisualInspectorTraffic, DwellTrafficMetrics> = {
    total: {
      visitors: section.visitors,
      shareOfPage: section.shareOfPage,
      avgActiveTime: section.avgActiveTime,
      clicks: section.clicks,
    },
    search: { visitors: 0, shareOfPage: "0%", avgActiveTime: "0.0s", clicks: 0 },
    direct: { visitors: 0, shareOfPage: "0%", avgActiveTime: "0.0s", clicks: 0 },
    referral: { visitors: 0, shareOfPage: "0%", avgActiveTime: "0.0s", clicks: 0 },
    social: { visitors: 0, shareOfPage: "0%", avgActiveTime: "0.0s", clicks: 0 },
    paid: { visitors: 0, shareOfPage: "0%", avgActiveTime: "0.0s", clicks: 0 },
  };

  (Object.keys(trafficFactors) as Array<Exclude<VisualInspectorTraffic, "total">>).forEach(
    (traffic, trafficIndex) => {
      const factor = trafficFactors[traffic];
      const variance = 1 + ((index + trafficIndex) % 3) * 0.035;

      metrics[traffic] = {
        visitors: Math.round(section.visitors * factor.visitors * variance),
        shareOfPage: `${Math.max(
          4,
          Math.round(Number.parseFloat(section.shareOfPage) * factor.share)
        )}%`,
        avgActiveTime: formatSeconds(totalSeconds * factor.time),
        clicks: Math.max(1, Math.round(section.clicks * factor.clicks * variance)),
      };
    }
  );

  return metrics;
}

function withTrafficMetrics(
  sections: Omit<DwellSection, "trafficMetrics" | "attentionIntensity" | "dropOffPercentage">[]
): DwellSection[] {
  const maxVisitors = Math.max(...sections.map((section) => section.visitors));

  return sections.map((section, index) => {
    const previousVisitors = sections[index - 1]?.visitors;
    const shareWeight = Number.parseFloat(section.shareOfPage) / 100;
    const visitorWeight = section.visitors / maxVisitors;
    const attentionIntensity = Number((shareWeight * 0.6 + visitorWeight * 0.4).toFixed(2));
    const dropOffPercentage =
      typeof previousVisitors === "number"
        ? Math.round(((section.visitors - previousVisitors) / previousVisitors) * 100)
        : null;

    return {
      ...section,
      attentionIntensity,
      dropOffPercentage,
      trafficMetrics: buildTrafficMetrics(section, index),
    };
  });
}

const dwellSectionsByPage: Record<string, DwellSection[]> = {
  home: withTrafficMetrics([
    {
      dwellId: "D1",
      label: "Hero en primaire CTA",
      top: 88,
      height: 260,
      visitors: 1284,
      shareOfPage: "100%",
      avgActiveTime: "18.2s",
      clicks: 214,
    },
    {
      dwellId: "D2",
      label: "Intro en proposition block",
      top: 380,
      height: 220,
      visitors: 1108,
      shareOfPage: "86%",
      avgActiveTime: "12.7s",
      clicks: 129,
    },
    {
      dwellId: "D3",
      label: "Features en voordelen",
      top: 640,
      height: 280,
      visitors: 924,
      shareOfPage: "72%",
      avgActiveTime: "10.9s",
      clicks: 76,
    },
    {
      dwellId: "D4",
      label: "Social proof en reviews",
      top: 960,
      height: 240,
      visitors: 716,
      shareOfPage: "56%",
      avgActiveTime: "8.1s",
      clicks: 34,
    },
    {
      dwellId: "D5",
      label: "Secondary CTA blok",
      top: 1240,
      height: 220,
      visitors: 498,
      shareOfPage: "39%",
      avgActiveTime: "6.4s",
      clicks: 41,
    },
    {
      dwellId: "D6",
      label: "Footer en contact",
      top: 1490,
      height: 190,
      visitors: 284,
      shareOfPage: "22%",
      avgActiveTime: "4.2s",
      clicks: 17,
    },
  ]),
  beweeg: withTrafficMetrics([
    {
      dwellId: "D1",
      label: "Campaign hero",
      top: 88,
      height: 280,
      visitors: 1142,
      shareOfPage: "100%",
      avgActiveTime: "20.5s",
      clicks: 188,
    },
    {
      dwellId: "D2",
      label: "Programma-overzicht",
      top: 404,
      height: 260,
      visitors: 948,
      shareOfPage: "83%",
      avgActiveTime: "14.0s",
      clicks: 120,
    },
    {
      dwellId: "D3",
      label: "Resultaten en cases",
      top: 704,
      height: 250,
      visitors: 731,
      shareOfPage: "64%",
      avgActiveTime: "9.8s",
      clicks: 54,
    },
    {
      dwellId: "D4",
      label: "Aanmeldformulier intro",
      top: 986,
      height: 230,
      visitors: 544,
      shareOfPage: "48%",
      avgActiveTime: "8.7s",
      clicks: 67,
    },
    {
      dwellId: "D5",
      label: "FAQ en bezwaar-reductie",
      top: 1250,
      height: 230,
      visitors: 366,
      shareOfPage: "32%",
      avgActiveTime: "5.5s",
      clicks: 16,
    },
    {
      dwellId: "D6",
      label: "Footer CTA",
      top: 1510,
      height: 180,
      visitors: 192,
      shareOfPage: "17%",
      avgActiveTime: "3.8s",
      clicks: 12,
    },
  ]),
  contact: withTrafficMetrics([
    {
      dwellId: "D1",
      label: "Contact hero",
      top: 88,
      height: 220,
      visitors: 622,
      shareOfPage: "100%",
      avgActiveTime: "11.4s",
      clicks: 82,
    },
    {
      dwellId: "D2",
      label: "Contactopties",
      top: 344,
      height: 260,
      visitors: 534,
      shareOfPage: "86%",
      avgActiveTime: "13.1s",
      clicks: 64,
    },
    {
      dwellId: "D3",
      label: "Formulier",
      top: 644,
      height: 320,
      visitors: 462,
      shareOfPage: "74%",
      avgActiveTime: "17.6s",
      clicks: 93,
    },
    {
      dwellId: "D4",
      label: "Praktische info en kaart",
      top: 1000,
      height: 260,
      visitors: 271,
      shareOfPage: "44%",
      avgActiveTime: "6.2s",
      clicks: 18,
    },
    {
      dwellId: "D5",
      label: "Footer",
      top: 1290,
      height: 170,
      visitors: 138,
      shareOfPage: "22%",
      avgActiveTime: "3.7s",
      clicks: 7,
    },
  ]),
};

export function getVisualInspectorData(params: {
  klantId?: string;
  pageId?: string;
  device?: string;
  versionId?: string;
  period?: string;
  traffic?: string;
}): VisualInspectorData {
  const klantId = params.klantId?.toLowerCase() ?? "fitnessunique";
  const pages = pageOptionsByKlant[klantId] ?? pageOptionsByKlant.fitnessunique;
  const selectedPage =
    pages.find((page) => page.id === params.pageId) ?? pages[0];
  const selectedVersion =
    versions.find((version) => version.id === params.versionId) ??
    versions[versions.length - 1];
  const selectedDevice: VisualInspectorDevice =
    params.device === "tablet" || params.device === "mobile"
      ? params.device
      : "desktop";
  const selectedPeriod: VisualInspectorPeriod =
    params.period === "7dagen" ||
    params.period === "30dagen" ||
    params.period === "deze-maand" ||
    params.period === "vorige-maand"
      ? params.period
      : "30dagen";
  const requestedTraffic = (params.traffic ?? "total")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const selectedTraffic = requestedTraffic.filter((traffic): traffic is VisualInspectorTraffic =>
    trafficOptions.some((option) => option.id === traffic)
  );
  const uniqueSelectedTraffic = Array.from(new Set(selectedTraffic)).slice(0, 3);
  const finalSelectedTraffic = uniqueSelectedTraffic.length > 0 ? uniqueSelectedTraffic : ["total"];
  const selectedTrafficParam = finalSelectedTraffic.join(",");
  const dwellSections =
    dwellSectionsByPage[selectedPage.id] ?? dwellSectionsByPage.home;
  const pageHeight =
    Math.max(...dwellSections.map((section) => section.top + section.height)) + 80;

  return {
    klantId,
    klantNaam: klantNamen[klantId] ?? klantId,
    pages,
    versions,
    periods,
    trafficOptions,
    dwellSections,
    pageHeight,
    selectedPage,
    selectedVersion,
    selectedDevice,
    selectedPeriod,
    selectedTraffic: finalSelectedTraffic,
    selectedTrafficParam,
  };
}
