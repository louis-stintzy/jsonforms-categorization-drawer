import { Anchor } from "antd";
import { Layout } from "antd";

function AppFooter() {
  const { Footer } = Layout;
  return (
    <>
      <Footer style={{ textAlign: "center", fontWeight: "600" }}>
        <Anchor
          items={[
            {
              key: "1",
              href: "https://github.com/louis-stintzy",
              title: "Created by lstz",
            },
          ]}
        />
      </Footer>
    </>
  );
}

export default AppFooter;
