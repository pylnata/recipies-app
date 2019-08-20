import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import recipiesReducer from "./features/RecipeList/reducer";
import shopListReducer from "./features/ShopList/reducer";
import recipeReducer from "./features/Recipe/reducer";
import likesReducer from "./features/Likes/reducer";

const rootReducer = combineReducers({
  shopList: shopListReducer,
  recipeList: recipiesReducer,
  recipe: recipeReducer,
  likes: likesReducer
});

let middlewares = [applyMiddleware(thunk)];

if (process.env.NODE_ENV === "development") {
  middlewares.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['likes']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//export default () => {
  const store = createStore(persistedReducer, compose(...middlewares));
  const persistor = persistStore(store);
  export { store, persistor };
//};
