import { Auth } from "components/Auth";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Result } from "components/Result";
import { Search } from "components/Search";
import { init } from "features/Auth";
import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init())
  }, [])

  return (
    <div className="layout">
      <Header />

        <div className="content">
        <Suspense fallback={""}>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/auth" element={<Auth/>}/>
              <Route
                path="/search"
                element={
                  <Search/>
                }
              />
              <Route
                path="/result"
                element={
                  <Result/>
                }
              />
          </Routes>
        </Suspense>
        </div>
      
      <Footer />
    </div>
  );
}