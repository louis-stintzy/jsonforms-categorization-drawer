import { RankedTester, rankWith, uiTypeIs } from "@jsonforms/core";

export const categorizationTester: RankedTester = rankWith(
  5,
  uiTypeIs("Categorization")
);
