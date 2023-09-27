export interface HistogramSchema {
  data: [{
    data: [{
      data: string;
      value: number;
    }],
    histogramType: Array<"totalDocuments" | "riskFactors">
  }];
  isLoading: boolean,
  error?: string;
}