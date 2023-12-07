---
layout: post
title: 'my-flixx'
github-name: my-flixx
source-code: https://github.com/AlejandroBryan/my-flixx
stacks:
  - node
  - mongodb
  - heroku
  - jwt
  - npm 
  - eslint
  - prettier
  - babel

card-info:
    - title: Challenges
      style: 'danger'
      words: 'Integrating various API endpoints and maintaining data consistency across user interactions were significant challenges, requiring careful planning and testing.'
    - title: Successes
      style: 'success'
      words: 'Successfully creating a functional and secure REST API that interacts seamlessly with the MongoDB database was a major accomplishment, demonstrating proficiency in server-side development.'
    - title: future steps
      style: 'warning'
      words: 'Future enhancements include expanding the database to include more diverse movie genres and incorporating additional user features like movie ratings and reviews.'
    - title: final thoughts
      style: 'info'
      words: 'Building the server-side of My-flixx was an enriching experience that solidified full-stack development skills, particularly in creating and managing APIs and databases.
---

{% 
include image.html url="https://myflixx.herokuapp.com/" image="/projects/my-flixx/my-flixx.png" %}

## Overview:
My-flixx is a comprehensive web application designed to provide movie enthusiasts with extensive information about various movies, directors, and genres. The server-side component, developed using full-stack JavaScript technologies, allows users to interact with a database storing movie data, create personal profiles, and curate lists of their favorite movies.

### Purpose and Context:
In an era where JavaScript developers are expected to have both front-end and back-end skills, "my-flixx" was created as part of a full-stack development course. The project demonstrates the ability to build a REST API interfacing with a MongoDB database, showcasing skills in the MERN stack (MongoDB, Express, React, Node.js).

### Objectives:
The primary goal was to build the server-side for "my-flixx," enabling users to access movie data, register and update personal information, and manage their favorite movies list. The focus was on creating a robust API with efficient database interactions.

#### Process:

**Server-Side Development:**

The back-end was developed using Node.js and Express, with MongoDB for database management. The REST API was designed to handle various data operations, including CRUD (Create, Read, Update, Delete) functionalities for movies, directors, and user profiles.

{% include stacks-code.html %}

Key Functionalities:

Providing detailed information about movies, directors, and genres.
User registration and profile management.
Ability for users to add or remove movies from their favorites list.
Secure user authentication and data validation.

Technical Requirements:

Node.js and Express application.
RESTful architecture.
MongoDB database with Mongoose for business logic modeling.
JSON format for movie information.
Implementation of user authentication and authorization.
Deployment on Heroku and code hosting on GitHub.


Retrospective:
Developing "my-flixx" highlighted the importance of back-end development in full-stack JavaScript projects. Challenges included ensuring efficient database queries and implementing secure authentication mechanisms.
{:.blockquote .mb__3 .mt__3}

{% include retrospective-cards.html %}

