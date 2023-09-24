import { Auth } from "components/Auth";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Search } from "components/Search";
import { Suspense } from "react";
import { Routes, Route } from "react-router";

export function App() {
  return (
    <div className="layout">
      <Header />

        <div className="content">
        <Suspense fallback={""}>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/auth" element={<Auth/>}/>
              <Route path="/search" element={<Search/>}/>
          </Routes>
        </Suspense>
        </div>
      
      <Footer />
    </div>
  );
}