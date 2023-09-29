import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { getAccesToken, init } from "features/Auth";
import { useEffect } from "react";
import { AppRouter } from "router";
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
        <AppRouter />
        </div>
      
      <Footer />
    </div>
  );
}