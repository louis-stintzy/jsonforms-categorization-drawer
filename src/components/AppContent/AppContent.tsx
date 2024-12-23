import { Layout } from "antd";
import DrawerDemo from "../DrawerDemo/DrawerDemo";
import JsonFormsDemo from "../JsonFormsDemo/JsonFormsDemo";
import { useState } from "react";

type JSONFormVariable = string[];

function AppContent() {
  const { Content } = Layout;

  const [open, setOpen] = useState(false);
  const [activeJSONForm, setActiveJSONForm] = useState<JSONFormVariable>([
    "basic",
    "set1",
  ]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Content style={{ padding: "0 154px", marginTop: "32px" }}>
        <DrawerDemo
          onClose={onClose}
          open={open}
          setActiveJSONForm={setActiveJSONForm}
        />
        <JsonFormsDemo
          showDrawer={showDrawer}
          activeJSONForm={activeJSONForm}
        />
      </Content>
    </Layout>
  );
}

export default AppContent;
