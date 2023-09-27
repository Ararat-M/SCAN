export interface ScanDoc{
  date: string;
  url: string;
  source: string;
  title: string;
  type: string;
  img: string;
  description: string;
  wordCount: number;
}

export interface ScanDocSchema {
  scanDocArr: ScanDoc[];
  isLoading: boolean;
  error?: string;
}