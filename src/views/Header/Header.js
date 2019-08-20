import React from "react";

import SearchForm from "../../features/SearchForm/SearchForm";

import Logo from "../../assets/img/logo.png";

import "./Header.scss";

const Header = props => {
  return (
    <>
      <header className="d-flex justify-content-center align-items-start">
        <img src={Logo} alt="Recipe-App" className="logo" />
        <div className="title  d-none d-lg-block">RecipiesApp</div>
        <SearchForm />

                <a className="text-dark ml-2 mt-2"
                  href="https://github.com/pylnata/recipies-app"
                  title="Star on GitHub"
                >
                  <i className="fab fa-github" />
                </a>

      </header>

      {props.usedCalls > 0 && (
        <div
          className="apistat"
          title="shows how many calls used of day's limit at api https://spoonacular.com"
        >
          Api: {props.usedCalls} of 150 used
        </div>
      )}
    </>
  );
};

export { Header };

export default Header;
