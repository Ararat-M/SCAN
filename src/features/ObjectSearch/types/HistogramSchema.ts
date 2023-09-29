export interface HistogramSchema {
  data: {
    date: string;
    totalValue: number;
    riskValue: number;
  }[];
  amount: number;
  isLoading: boolean;
  error?: string;
}