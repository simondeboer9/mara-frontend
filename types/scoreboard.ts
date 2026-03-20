export type KPIBlock = {
  value: string;
  subtitle: string;
};

export type TopPagesRow = {
  page: string;
  visitors: number;
  share: string;
};

export type LostTrafficRow = {
  page: string;
  lost: number;
  share: string;
};

export type ConversionEffectivenessRow = {
  page: string;
  visitors: number;
  conversions: number;
  rate: string;
};

export type ScoreboardData = {
  kpi: {
    visitors: KPIBlock;
    conversions: KPIBlock;
    goal: KPIBlock;
  };
  topPages: TopPagesRow[];
  lostTraffic: LostTrafficRow[];
  conversionEffectiveness: ConversionEffectivenessRow[];
};
