import { Layout } from "antd";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import AppContent from "../AppContent/AppContent";

function App() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </>
  );
}

export default App;
