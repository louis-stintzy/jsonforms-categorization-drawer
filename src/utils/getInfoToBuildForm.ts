import { allSets } from "../schemas";
type JSONFormVariable = string[];

const getInfoToBuildForm = (activeJSONForm: JSONFormVariable) => {
  const [category, setRef] = activeJSONForm;
  const activeSet = allSets.find((set) => set.ref === setRef);
  if (!activeSet) {
    throw new Error(`No set found for ref ${setRef}`);
  }
  const activeCategoryIndex = activeSet.uischema.elements.findIndex(
    (element) => element.label === category
  );

  const schema = activeSet.schema;
  const UISchemaElements = activeSet.uischema.elements[activeCategoryIndex];
  const UISchema = {
    type: "Categorization",
    elements: [UISchemaElements],
  };
  const initialData = activeSet.initialData;
  return { schema, UISchema, initialData };
};

export default getInfoToBuildForm;
