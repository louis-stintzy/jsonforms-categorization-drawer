import { schema } from "./Set1/schema";
import { UISchema } from "./Set1/UISchema";
import { initialData } from "./Set1/initialData";

import { schema2 } from "./Set2/schema2";
import { UISchema2 } from "./Set2/UISchema2";
import { initialData2 } from "./Set2/initialData2";

export const allSets = [
  {
    id: 1,
    ref: "set1",
    title: "Set 1",
    schema: schema,
    uischema: UISchema,
    initialData: initialData,
  },
  {
    id: 2,
    ref: "set2",
    title: "Set 2",
    schema: schema2,
    uischema: UISchema2,
    initialData: initialData2,
  },
];

export const globalSchema = {
  type: "object",
  properties: {
    ...schema.properties,
    ...schema2.properties,
  },
};

export const globalUISchema = {
  type: "Categorization",
  elements: [
    {
      type: "Categorization",
      label: "Set 1",
      elements: UISchema.elements,
    },
    {
      type: "Categorization",
      label: "Set 2",
      elements: UISchema2.elements,
    },
  ],
};

export const globalInitialData = {
  set1: initialData,
  set2: initialData2,
};
