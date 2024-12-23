import { Layout, Typography } from "antd";

function AppHeader() {
  const { Header } = Layout;
  const { Title } = Typography;
  return (
    <Header>
      <Title
        style={{ color: "#FFFFFFD9", margin: "0.5rem 0.5rem 0.5rem 8rem" }}
      >
        JSONForms + Drawer Demo
      </Title>
    </Header>
  );
}

export default AppHeader;
