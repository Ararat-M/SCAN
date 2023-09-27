export interface HistogramSchema {
  data: {
    date: string;
    totalValue: number;
    riskValue: number;
  }[];
  isLoading: boolean;
  error?: string;
}