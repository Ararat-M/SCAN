type Interval = "day" | "week" | "month" | "quarter " | "year";

export type Tonality = "any" | "negative" | "positive";

export interface FilterSchema {
  intervalType: Interval;
  histogramTypes: Array<"totalDocuments" | "riskFactors">;
  issueDateInterval: {
    startDate: string;
    endDate: string;
  };
  searchContext: {
    targetSearchEntitiesContext: {
      targetSearchEntities: [{
        type: "company" | "suggestedPersons";
        inBusinessNews: boolean | null;
        sparkId: number | null;
        entityId: number | null;
        inn: number;
        maxFullness: boolean;
      }];
      onlyMainRole: boolean;
      onlyWithRiskFactors: boolean;
      tonality: Tonality;
    };
  };
  similarMode: "none" | "duplicates";
  limit: number;
  sortType: "issueDate" | "sourceInfluence";
  sortDirectionType: "desc" | "asc";
  attributeFilters?: {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
  };
}