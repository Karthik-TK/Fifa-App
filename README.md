# Problem Statement

Create a web app, that displays FIFA player information in the *FIFA-21 Complete.csv* dataset in this repo.

There's two moving parts to arriving at a potential solution - 

## Backend

Develop REST APIs powered by one of the options, 
 - python -> django (preferred)
 - node -> express
 - or in a language/framework of your choice

that essentially powers a CRUD interface via a REST API for the data in the FIFA dataset. 

This CRUD layer should be seamlessly powered by an ORM interfaced with a SQL database (preferably Postgres, MySQL is fine as well). 
Please ensure you represent the FIFA player data accurately in a relational manner when you design the ORM models in your framework of choice. 

Have a quick and easy way (maybe a script) that dumps this dataset into your databse, via REST.
Updates to existing data in the db, should be as easily possible as creating them, again, via REST. 

## Frontend

Develop a react web app, that displays the FIFA player information, powered by the REST API's from the backend.

Have a way to create/update/delete/ player information in the web app.

Have a separate analytics section, that must have - 
- A couple of visualizations in the dashboard representing/abstracting information in the FIFA player dataset, in a way you'd consider to be most effective 
- Drilldown abilities in the dashboard visualizations
- Ability to search/sort/filter data in a visualization **extra credits**


## Deployment

Please have code for the backend and the web app frontend, in separate folders in the same repo provided to you.

There is no need to deploy all this in cloud, so long as all of this works on localhost. 
Please have instructions in a *deployment.md* file in your repo, that contains clear steps to have all of this up and running on local in that case.

However, **extra credits** if hosting this on the cloud works for you !!




