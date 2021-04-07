# Problem Statement

Create a native android app, that displays FIFA player information in the *FIFA-21 Complete.csv* dataset in this repo.

There's two moving parts to arriving at a potential solution - 

## Backend

Develop REST APIs powered by one of the options, 
 - python -> django (preferred)
 - node -> express
or in a language/framework of your choice
that essentially powers a CRUD interface via a REST API for the data in the FIFA dataset. 

This CRUD layer should be seamlessly powered by an ORM interfaced with a SQL database (preferably Postgres, MySQL is fine as well). 
Please ensure you represent the FIFA player data accurately in a relational manner when you design the ORM models in your framework of choice. 

Have a quick and easy way (maybe a script) that dumps this dataset into your databse, via REST.
Updates to existing data in the db, should be as easily possible as creating them, again, via REST. 

## Frontend

Develop an android app, that displays the FIFA player information, powered by the REST API's from the backend.

Its not too important to have well-designed/gaudy/flashy layouts for the views, so long as the views are functional and performant.

Displaying player information in the app, is sufficient for the scope of this problem statement. 

However, creation/updation/deletion of player information is definitely **extra credits** !!

**Extra credits** also for considering if the app seamlessly refreshes/updates the data, in the views, when the underlying data is updated/modified (via REST or directly in the db).

## Deployment

Please have code for the backend and the app frontend, in separate folders in the same repo provided to you.

There is no need to deploy all this in cloud, so long as all of this works on localhost. 
Please have instructions in a *deployment.md* file in your repo, that contains clear steps to have all of this up and running on local in that case.

However, **extra credits** if hosting this on the cloud works for you !!




