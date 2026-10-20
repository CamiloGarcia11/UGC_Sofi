export interface CMService {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface CMCaseStudy {
  id: string;
  client: string;
  niche: string;
  timeframe: string;
  reachGrowth: string;
  engagementGrowth: string;
  leadsGenerated: string;
  summary: string;
  beforeStats: { followers: string; engagement: string; reach: string };
  afterStats: { followers: string; engagement: string; reach: string };
}

export interface CMPlan {
  id: string;
  name: string;
  tier: string;
  badge?: string;
  priceEstimate: string;
  frequency: string;
  summary: string;
  features: string[];
  recommended?: boolean;
}
