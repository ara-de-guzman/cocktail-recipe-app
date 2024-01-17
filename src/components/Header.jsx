import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import PropTypes from "prop-types";

function Header({ onKeyDownHandle, onChangeHandle }) {
  return (
    <header className="flex desktop:justify-between p-10 desktop:items-center cell:flex-col tablet:flex-row ">
      <div className="w-full flex cell:justify-center tablet:justify-normal my-10">
        <Link to="/">
          <img src={logo} alt="logo" className= ' w-40 '/>
        </Link>
      </div>

      <div className="flex items-center gap-5 justify-between desktop:w-2/3 cell:w-full">
        <nav className="flex gap-10 w-3/5 cell:hidden tablet:flex ">
          {/* <Link to="/random">Random recipe</Link> */}
          <Link to="/non-alcohol" className="hover:text-sky-300">Non Alcohol</Link>
          <Link to="/alcohol" className="hover:text-sky-300">Alcohol</Link>
        </nav>
        <Link to="/" className="flex w-2/3 cell:w-full">
          <input
            type="text"
            className="bg-stone-200 p-3 rounded-md w-full cell:w-full "
            placeholder="Search for cocktail recipe"
            onKeyDown={onKeyDownHandle}
            onChange={onChangeHandle}
          />
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  onKeyDownHandle: PropTypes.func,
  onChangeHandle: PropTypes.func,
};

export default Header;
