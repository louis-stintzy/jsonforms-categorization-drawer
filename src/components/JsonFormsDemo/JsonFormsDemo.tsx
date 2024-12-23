import { JsonForms } from "@jsonforms/react";
import { useMemo, useState } from "react";
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";
import BoundData from "./BoundData";

import "./JsonFormsDemo.css";
import { Layout } from "antd";
import getInfoToBuildForm from "../../utils/getInfoToBuildForm";

interface JsonFormsDemoProps {
  activeJSONForm: string[];
  showDrawer: () => void;
}

function JsonFormsDemo({ activeJSONForm, showDrawer }: JsonFormsDemoProps) {
  const { schema, UISchema, initialData } = getInfoToBuildForm(activeJSONForm);

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
