import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { AppRouter } from "router";

export function App() {
  return (
    <div className="layout">
      <Header />

      <div className="content">
        <AppRouter />
      </div>

      <Footer />
    </div>
  );
}