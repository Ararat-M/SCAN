export interface HistogramSchema {
  data: Array<{
    date: string;
    totalValue: number;
    riskValue: number;
  }>;
  amount: number;
  isLoading: boolean;
  error?: string;
}