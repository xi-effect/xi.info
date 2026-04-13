export type MilestoneStatusT = 'Фундамент' | 'Продукт' | 'Рост' | 'Масштабирование';

export type MilestoneT = {
  title: string;
  period: string;
  description: string;
  status: MilestoneStatusT;
  bullets: string[];
};

export type QuarterT = {
  quarter: string;
  accent: string;
  focus: string;
  summary: string;
  milestones: MilestoneT[];
};
