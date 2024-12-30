import { Layout } from "antd";
// import DrawerDemo from "../DrawerDemo/DrawerDemo";
// import JsonFormsDemo from "../JsonFormsDemo/JsonFormsDemo";
import { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  // categorizationTester,
  vanillaCells,
  vanillaRenderers,
} from "@jsonforms/vanilla-renderers";

// import { initialData } from "../../schemas/Set1/initialData";
// import { schema } from "../../schemas/Set1/schema";
// import { UISchema } from "../../schemas/Set1/UISchema";

import CategorizationRenderer from "../Categorization/CategorizationRenderer";
import { categorizationTester } from "../Categorization/tester";
import { globalInitialData, globalSchema, globalUISchema } from "../../schemas";

// type JSONFormVariable = string[];

function AppContent() {
  const { Content } = Layout;
  const [data, setData] = useState(globalInitialData);

  // const [open, setOpen] = useState(false);
  // const [activeJSONForm, setActiveJSONForm] = useState<JSONFormVariable>([
  //   "basic",
  //   "set1",
  // ]);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

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
              schema={globalSchema}
              uischema={globalUISchema}
              data={data}
              renderers={[
                ...vanillaRenderers,
                {
                  tester: categorizationTester,
                  renderer: CategorizationRenderer,
                },
              ]}
              cells={vanillaCells}
              onChange={({ data }) => setData(data)}
            />
          </div>
        </Layout>
      </Content>
    </Layout>
  );

  // return (
  //   <Layout>
  //     <Content style={{ padding: "0 154px", marginTop: "32px" }}>
  //       <DrawerDemo
  //         onClose={onClose}
  //         open={open}
  //         setActiveJSONForm={setActiveJSONForm}
  //       />
  //       <JsonFormsDemo
  //         showDrawer={showDrawer}
  //         activeJSONForm={activeJSONForm}
  //       />
  //     </Content>
  //   </Layout>
  // );
}

export default AppContent;
