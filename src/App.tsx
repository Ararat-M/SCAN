import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Suspense } from "react";
import { Routes, Route } from "react-router";

export function App() {
  return (
    <>
      <Header />

      <Suspense fallback={""}>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
      </Suspense>
      
      <Footer />
    </>
  );
}