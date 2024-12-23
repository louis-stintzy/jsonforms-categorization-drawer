import { useState } from "react";
import DrawerDemo from "../DrawerDemo/DrawerDemo";
import JsonFormsDemo from "../JsonFormsDemo/JsonFormsDemo";
import { Layout } from "antd";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

function App() {
  const { Content } = Layout;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <Layout>
          <Content style={{ padding: "0 48px" }}>
            <DrawerDemo onClose={onClose} open={open} />
            <JsonFormsDemo showDrawer={showDrawer} />
          </Content>
        </Layout>
        <AppFooter />
      </Layout>
    </>
  );
}

export default App;
