import { JsonForms } from "@jsonforms/react";
import { schema } from "../../schemas/schema";
import { UISchema } from "../../schemas/UISchema";
import { useMemo, useState } from "react";
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";
import Title from "./Title";
import BoundData from "./BoundData";

import "./JsonFormsDemo.css";

const initialData = {
  provideAddress: true,
  vegetarian: false,
};

function JsonFormsDemo() {
  const [data, setData] = useState(initialData);
  const [resetKey, setResetKey] = useState(0);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const handleReset = () => {
    setData(initialData);
    setResetKey(resetKey + 1);
  };

  return (
    <div>
      <Title />
      <JsonForms
        key={resetKey}
        schema={schema}
        uischema={UISchema}
        data={data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
        onChange={({ data }) => setData(data)}
      />
      <BoundData stringifiedData={stringifiedData} resetForm={handleReset} />
    </div>
  );
}

export default JsonFormsDemo;
