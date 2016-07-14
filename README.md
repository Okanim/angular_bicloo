# Angular Bicloo

This project was a Hackaton for the last course of RIA in Licence Pro SIL at Nantes

There are conditions for this hackaton :

* We had to use Angular 1.5, ui-router and Restangular
* We had to use a REST API, create by us or an existing Open API
* We had to present something at the end of the day

## Our choices 

We have choosen to work with [JCDecaux Open Api](https://developer.jcdecaux.com/#/home) to get data about Bicloo (the self-service bikes at Nantes).

There are 4 features :

* Find the nearest Bicloo station to take a Bicloo (Limitate to 500 meters around the position)
* Find the nearest Bicloo station to store a Bicloo (Limitate to 500 meters around the position)
* List of all Bicloo stations at Nantes
* Have the details of a Bicloo stations

## After the hackaton

We add some css to the website, and change the structure of the project in a component way (We follow partially [Todd Motto styleguide](https://github.com/toddmotto/angular-styleguide)).

## Roadmap

* ~~Add a map component~~ - **_Done_** 
* **~~Erase limitation~~ and improve the logic of "find the nearest station"** - _In progress_

