![Alt text](screen.png?raw=true "Recipies-App")

# Recipies-App

Lives here: https://recipies-react-app.herokuapp.com/

This simple project was developed by me in order to polish React Hooks usage and Typescript with CRA app. Also I use redux-observable, that I found really helpful here. 

And also this project covered partially with unit tests.
I found a solution to test functional components with hooks using enzyme shallow mode and mocking hooks. 

You could find my article about it here

https://medium.com/@pylnata/testing-react-functional-component-using-hooks-useeffect-usedispatch-and-useselector-in-shallow-9cfbc74f62fb

In this project I use only functional components and React Hooks (almost all existed). 

Used: 
* create-react-app;
* typescript;
* bootstrap + reactstrap;
* redux-persistent;
* redux-observable;
* axios;

For tests:
* jest 
* enzyme
* redux-mock-store

Application allowes: 
* to search for recipies by keyword (using spoonacular API);
* to view recipe details;
* save recipes to Favourite List;
* create editable shop list by choosing ingfredients from recipies;
* add own items to shop list;

P.S. Due to restrictions of usage spoonacular API it is possible to have only 150 calls to their service per day, so in case if limit is reached fake data is used.

P.P.S. If you want to clone and launch this project, pay attention that src/config.js has to contain your own created API keys.


