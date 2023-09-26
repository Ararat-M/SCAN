import { Auth } from "components/Auth";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Search } from "components/Search";
import { getAuthState, init } from "features/Auth";
import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { ProtectedRouter } from "shared/lib/ProtectedRouter/ProtectedRouter";
import { getUserData } from "enteties/User"

export function App() {
  const authData = useAppSelector(getAuthState);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init({ accessToken: authData.accessToken }))
  }, [])
  
  console.log(authData.isAuth)

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
                  <ProtectedRouter hasAcces={authData.isAuth} redirectTo={"/"}>
                    <Search/>
                  </ProtectedRouter>
                }
              />
          </Routes>
        </Suspense>
        </div>
      
      <Footer />
    </div>
  );
}