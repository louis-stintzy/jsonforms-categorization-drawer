import { JsonForms } from "@jsonforms/react";
import { Layout } from "antd";
import { useMemo, useState } from "react";
import BoundData from "../JsonFormsDemo/BoundData";
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";
import { categorizationTester } from "./tester";
import createDrawerCategorizationRenderer from "./createDrawerCategorizationRenderer";
// import getSetToBuildForm from "../../utils/getSetToBuildForm";
import { globalSchema, globalUISchema, globalInitialData } from "../../schemas";

// type JSONFormVariable = string[];

function Form() {
  const { Content } = Layout;

  const [open, setOpen] = useState(false);
  //   const [activeJSONForm, setActiveJSONForm] = useState<JSONFormVariable>([
  //     "basic",
  //     "set1",
  //   ]);

  const showDrawer = () => {
    setOpen(true);
  };

  //   const { schema, UISchema, initialData } = getSetToBuildForm(activeJSONForm);
  const [data, setData] = useState(globalInitialData);
  const [resetKey, setResetKey] = useState(0);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const handleReset = () => {
    setData(globalInitialData);
    setResetKey(resetKey + 1);
  };

  return (
    <Layout>
      <Content style={{ padding: "0 154px", marginTop: "32px" }}>
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
              schema={globalSchema}
              uischema={globalUISchema}
              data={data}
              renderers={[
                ...vanillaRenderers,
                {
                  tester: categorizationTester,
                  renderer: createDrawerCategorizationRenderer(
                    open,
                    // activeJSONForm,
                    setOpen
                    // setActiveJSONForm
                  ),
                },
              ]}
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
      </Content>
    </Layout>
  );
}

export default Form;
