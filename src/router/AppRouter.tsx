import { Auth } from "components/Auth";
import { Main } from "components/Main";
import { Result } from "components/Result";
import { Search } from "components/Search";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthGuard } from "shared/lib/AuthGuard/AuthGuard";

export function AppRouter() {

  return (
    <Suspense fallback={""}>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route
          path="/search"
          element={
            <AuthGuard redirectTo="/">
              <Search/>
            </AuthGuard>
          }
        />
        <Route
          path="/result"
          element={
            <AuthGuard redirectTo="/">
              <Result/>
            </AuthGuard>
          }
        />
      </Routes>
    </Suspense>
  );
}