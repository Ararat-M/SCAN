import { Auth } from "components/Auth";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Result } from "components/Result";
import { Search } from "components/Search";
import { getAccesToken, init } from "features/Auth";
import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useAppSelector } from "shared/hooks/useAppSelector";

export function App() {
  const dispatch = useAppDispatch();
  const accessToken =  useAppSelector(getAccesToken)

  useEffect(() => {
    dispatch(init({accessToken}))
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