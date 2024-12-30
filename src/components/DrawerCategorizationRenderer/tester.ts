import { RankedTester, rankWith, uiTypeIs } from "@jsonforms/core";

// https://kukshalkanishka.medium.com/customising-json-forms-7fc75f627fff
// https://jsonforms.io/docs/tutorial/custom-renderers

// This is a custom tester for the Categorization renderer
// It will be used to determine the rank of the Categorization renderer

// The rank is used to determine the order in which renderers are used
// If uischema.type is "Categorization", the rank will be 3 (higher than the default rank of 2)

export const categorizationTester: RankedTester = rankWith(
  5,
  uiTypeIs("Categorization")
);

export const categoryTester: RankedTester = rankWith(4, uiTypeIs("Category"));
