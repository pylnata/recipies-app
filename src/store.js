import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createEpicMiddleware, combineEpics } from "redux-observable";

//reducers
import recipiesReducer from "./features/RecipeList/reducer";
import shopListReducer from "./features/ShopList/reducer";
import recipeReducer from "./features/Recipe/reducer";
import likesReducer from "./features/Likes/reducer";

//epics
import { searchEpic } from "./features/RecipeList/epics";
import { getRecipeEpic } from "./features/Recipe/epics";



const rootReducer = combineReducers({
  shopList: shopListReducer,
  recipeList: recipiesReducer,
  recipe: recipeReducer,
  likes: likesReducer
});

const epicMiddleware = createEpicMiddleware();
let middlewares = [applyMiddleware(epicMiddleware)];

if (process.env.NODE_ENV === "development") {
  middlewares.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["likes"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(...middlewares));
const persistor = persistStore(store);

const rootEpic = combineEpics(searchEpic, getRecipeEpic);
epicMiddleware.run(rootEpic);

export { store, persistor };
