import { JsonForms } from "@jsonforms/react";
// import { schema } from "../../schemas/Set1/schema";
// import { UISchema } from "../../schemas/Set1/UISchema";
// import { initialData } from "../../schemas/Set1/initialData";
import { useMemo, useState } from "react";
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";
import BoundData from "./BoundData";
import { allSets } from "../../schemas";

import "./JsonFormsDemo.css";
import { Layout } from "antd";

interface JsonFormsDemoProps {
  activeJSONForm: string[];
  showDrawer: () => void;
}

function JsonFormsDemo({ activeJSONForm, showDrawer }: JsonFormsDemoProps) {
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

  const [data, setData] = useState(initialData);
  const [resetKey, setResetKey] = useState(0);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const handleReset = () => {
    setData(initialData);
    setResetKey(resetKey + 1);
  };

  return (
    <Layout>
      <div
        style={{
          background: "#F5F5F5FF",
          minHeight: 280,
          padding: 24,
        }}
      >
        <JsonForms
          key={resetKey}
          schema={schema}
          uischema={UISchema}
          data={data}
          renderers={vanillaRenderers}
          cells={vanillaCells}
          onChange={({ data }) => setData(data)}
        />
      </div>
      <div style={{ padding: "0 24px" }}>
        <BoundData
          stringifiedData={stringifiedData}
          resetForm={handleReset}
          showDrawer={showDrawer}
        />
      </div>
    </Layout>
  );
}

export default JsonFormsDemo;
