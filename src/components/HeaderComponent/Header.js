import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="/">ホーム</a>
          </li>
          <li>
            <Link to="/products">ブログ</Link>
          </li>
          <li className="last">
            <a href="#">SNS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
