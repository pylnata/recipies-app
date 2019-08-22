import React from "react";
import { Container } from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";

import { Header, Footer } from "./views";
import RecipeList from "./features/RecipeList/RecipeList";
import Recipe from "./features/Recipe/Recipe";
import ShopList from "./features/ShopList/ShopList";
import Likes from "./features/Likes/Likes";

import { SearchProvider } from "./contexts/SearchContext";
import WithErrorHandler from "./hoc/WithErrorHandler";

import "./App.scss";

function App() {
  return (
    <>
      <div className="bg-app w-100">
        <Container className="content p-3 pt-4">
          <WithErrorHandler>
            <SearchProvider>
              <Header />
              <RecipeList />
            </SearchProvider>
            <Switch>
              <Route path="/recipe/:recipe_id(\d+)" exact component={Recipe} />
              <Route path="/" exact component={Recipe} />
              <Redirect to="/" />
            </Switch>
          </WithErrorHandler>
          <Likes />
          <ShopList />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
