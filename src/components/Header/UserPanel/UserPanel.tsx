import classes from "./userPanel.module.scss";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getUserInfo } from "features/UserInfo";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useCallback, useEffect } from "react";
import { initInfo } from "features/UserInfo/services/initInfo";
import { Button, ButtonTheme } from "shared/ui/Button";
import Avatar from "shared/assets/images/avatar.png"
import { authActions } from "features/Auth/slice/authSlice";

export function UserPanel() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(getUserInfo);

  useEffect(() => {
    dispatch(initInfo())
  }, [])

  const logoutHandler = useCallback(() =>  {
    dispatch(authActions.logout())
  }, [dispatch])

  return (
    <div>
      <div className={classes["user-panel"]}>
        <div className={classes["user-info"]}>
          {userInfo.isLoading ? (
            "Loading..."
          ) : (
            <>
              <span className={classes["user-info-used-text"]}>Использовано компаний</span>
              <span className={classes["user-info-used-count"]}>{userInfo.usedCompanyCount}</span>

              <span className={classes["user-info-limit-text"]}>Лимит по компаниям</span>
              <span className={classes["user-info-limit-count"]}>{userInfo.companyLimit}</span>
            </>
          )}
        </div>
        <div className={classes["user-avatar"]}>
            <span className={classes["user-avatar-name"]}>Алексей А.</span>
            <Button
              className={classes["logout-btn"]}
              theme={ButtonTheme.CLEAR}
              onClick={logoutHandler}
            >
              Выйти
            </Button>
            <img className={classes["user-avatar-img"]} src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}