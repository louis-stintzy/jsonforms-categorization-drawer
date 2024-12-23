import { JsonForms } from "@jsonforms/react";
import { schema } from "../../schemas/schema";
import { UISchema } from "../../schemas/UISchema";
import { useMemo, useState } from "react";
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";
import BoundData from "./BoundData";

import "./JsonFormsDemo.css";
import { Layout } from "antd";

interface JsonFormsDemoProps {
  showDrawer: () => void;
}

const initialData = {
  provideAddress: true,
  vegetarian: false,
};

function JsonFormsDemo({ showDrawer }: JsonFormsDemoProps) {
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
        <button onClick={showDrawer} className="showDrawer">
          Show Drawer
        </button>
      </div>
      <div style={{ padding: "0 24px" }}>
        <BoundData stringifiedData={stringifiedData} resetForm={handleReset} />
      </div>
    </Layout>
  );
}

export default JsonFormsDemo;
