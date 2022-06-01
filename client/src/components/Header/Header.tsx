import React, { useContext, useState } from "react";

import { GlobalContext } from "../../GlobalContext/GlobalContextProvider";
import { LowerNavBar, TopNavBar, UpperNavBar } from "./Header.styles";
type propTypes = {
  user: string;
  info: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  content?: boolean;
  getOrder?: any;
  getDate?: any;
};

const returnMonth = (n: string) => {
  if (n === "01") return "Jan";
  else if (n === "02") return "Feb";
  else if (n === "03") return "Mar";
  else if (n === "04") return "Apr";
  else if (n === "05") return "May";
  else if (n === "06") return "Jun";
  else if (n === "07") return "Jul";
  else if (n === "08") return "Aug";
  else if (n === "09") return "Sep";
  else if (n === "10") return "Oct";
  else if (n === "11") return "Nov";
  else if (n === "12") return "Dec";
}
const Header = ({ user, info, onClick, content, getOrder, getDate }: propTypes) => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const { discardAdmin } = useContext(GlobalContext);
  const [value, setValue] = useState('ascending');
  const logoutHandler = () => {
    discardAdmin();
  };
  return (
    <TopNavBar>
      <div className="container-fluid border-bottom">
        <div className="container">
          <UpperNavBar>
            <img src="/images/logo.png" alt="iwebcode" />
            <div className="right">
              <div
                className="avatar"
                onClick={() => setShowLogoutMenu(!showLogoutMenu)}
              >
                {user[0]}
              </div>
              <span>{user}</span>
              {showLogoutMenu && (
                <span className="logout">
                  <ul>
                    <li>Help</li>
                    <li>Admin Guide</li>
                    <li>Setting</li>
                    <li onClick={logoutHandler}>Logout</li>
                  </ul>
                </span>
              )}
            </div>
          </UpperNavBar>
        </div>
      </div>
      <div className="container-fluid boxshadow">
        <div className="container">
          <LowerNavBar>
            <div className="dashboard-wrapper">
              <div className="dashboard" onClick={onClick}>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8j4zn5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="HomeOutlineIcon"
                >
                  <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"></path>
                </svg>
                <span>Dashboard</span>
              </div>
            </div>
            <div className="content">{content &&
              <select value={value} onChange={(e) => { setValue(e.target.value); getOrder(e.target.value) }}>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
              </select>
            }
              <input
                type="date"
                onChange={(e) => getDate(`${returnMonth(e.target.value.substring(5, 7))} ${e.target.value.substring(8, 10)} ${e.target.value.substring(0, 4)}`)} />

            </div>

            <span className="info">{info}</span>
          </LowerNavBar>
        </div>
      </div>
    </TopNavBar>
  );
};

export default Header;
