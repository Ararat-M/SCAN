export interface ScanDoc {
  date: string;
  url: string;
  source: string;
  title: string;
  type: string;
  img: string;
  description: string;
  wordCount: number;
  id: string;
  attributes: {
    isTechNews: boolean;
    isAnnouncement: boolean;
    isDigest: boolean;
    isSpeechRecognition: boolean;
    influence: number;
    wordCount: number;
    coverage: {
      value: number;
      state: "hasData";
    };
  };
}

export interface ScanDocSchema {
  scanDocArr: ScanDoc[];
  isLoading: boolean;
  error?: string;
}