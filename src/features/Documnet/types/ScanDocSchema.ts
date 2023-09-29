export interface ScanDoc{
  date: string;
  url: string;
  source: string;
  title: string;
  type: string;
  img: string;
  description: string;
  wordCount: number;
  id: string;
}

export interface ScanDocSchema {
  scanDocArr: ScanDoc[];
  isLoading: boolean;
  error?: string;
}