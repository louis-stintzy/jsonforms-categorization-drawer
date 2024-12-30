import { Layout } from "antd";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import AppContent from "../AppContent/AppContent";
// import Form from "../DrawerCategorizationRenderer/Form";

// // note: 1ère version avec AppContent - 2ème version avec Form avec l'utilisation d'un customrenderer

function App() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <AppContent />
        {/* <Form /> */}
        <AppFooter />
      </Layout>
    </>
  );
}

export default App;
