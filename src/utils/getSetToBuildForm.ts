import { allSets } from "../schemas";
type JSONFormVariable = string[];

const getSetToBuildForm = (activeJSONForm: JSONFormVariable) => {
  const setRef = activeJSONForm[1];
  const activeSet = allSets.find((set) => set.ref === setRef);

  if (!activeSet) {
    throw new Error(`No set found for ref ${setRef}`);
  }

  const schema = activeSet.schema;
  const UISchema = activeSet.uischema;
  const initialData = activeSet.initialData;

  return { schema, UISchema, initialData };
};

export default getSetToBuildForm;
