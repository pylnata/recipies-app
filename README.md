![Alt text](screen.png?raw=true "Recipies-App")

# Recipies-App

This simple project was developed by me in order to polish React Hooks usage, including creation of  custom hooks. Also I use redux-observable, that I found really helpful here. 

In this project I use only functional components and React Hooks. 

Used: 
* create-react-app;
* bootstrap + reactstrap;
* redux-persistent;
* redux-observable;
* axios;

Application allowes: 
* to search for recipies by keyword (using spoonacular API);
* to view recipe details;
* save recipes to Favourite List;
* create editable shop list based on ingredients from recipies.

P.S. Due to restrictions of usage spoonacular API it is possible to have only 150 calls to their service per day, so in case if limit is reached fake data is used.

P.P.S. If you want to clone and launch this project, pay attention that src/config.js has to contain your own created API keys.


