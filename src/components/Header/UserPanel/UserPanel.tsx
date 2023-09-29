import classes from "./userPanel.module.scss";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { getUserInfo } from "features/UserInfo";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useCallback, useEffect } from "react";
import { initInfo } from "features/UserInfo/services/initInfo";
import { Button, ButtonTheme } from "shared/ui/Button";
import Avatar from "shared/assets/images/avatar.png";
import { authActions } from "features/Auth/slice/authSlice";
import { getAccesToken } from "features/Auth";
import { Loader } from "shared/ui/Loader/Loader";

export function UserPanel() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(getUserInfo);
  const accessToken = useAppSelector(getAccesToken);

  useEffect(() => {
    dispatch(initInfo({ accessToken }));
  }, []);

  const logoutHandler = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return (
    <div>
      <div className={classes["user-panel"]}>
        {userInfo.isLoading ? (
          <div style={{ display: "flex" }} className={classes["user-info"]}>
            <Loader />
          </div>
        ) : (
          <div className={classes["user-info"]}>
            <span className={classes["user-info-used-text"]}>Использовано компаний</span>
            <span className={classes["user-info-used-count"]}>{userInfo.usedCompanyCount}</span>

            <span className={classes["user-info-limit-text"]}>Лимит по компаниям</span>
            <span className={classes["user-info-limit-count"]}>{userInfo.companyLimit}</span>
          </div>
        )}

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