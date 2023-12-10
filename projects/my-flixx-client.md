---
layout: post
title: 'my-flixx-client'
github-name: my-flixx-client
source-code: 'https://github.com/AlejandroBryan/my-flixx-client'
stacks:
  - html5
  - css3
  - javascript
  - react
  - parcel
  - sass
card-info:
    - title: Challenges
      style: 'danger'
      words: 'Integrating client-side views with the server-side API and maintaining a responsive design across different devices were significant challenges.'
    - title: Successes
      style: 'success'
      words: 'Successfully creating a functional and engaging user interface that interacts seamlessly with the server-side API was a major accomplishment, demonstrating skills in client-side development'
    - title: future steps
      style: 'warning'
      words: 'Future enhancements include adding more interactive features, such as social sharing and advanced movie filtering options, to enhance user engagement'
    - title: final thoughts
      style: 'info'
      words: 'Building the client-side of My-flixx was a rewarding experience that enhanced my skills in React and client-side development, further solidifying my capabilities in full-stack JavaScript development'

gallery:
  - image_path: /assets/images/projects/my-flixx-client/gallery/all-movies-list.png
    image_path_thumbnail: /assets/images/projects/my-flixx-client/thumbnails/all-movies-list.png
    title: 'Main view displaying all movies with search functionality.'
  - image_path: /assets/images/projects/my-flixx-client/gallery/user-profile-view.png  
    image_path_thumbnail: /assets/images/projects/my-flixx-client/thumbnails/user-profile-view.png
    title: 'Profile view for displaying and updating user details and managing favorite movies'
  - image_path: /assets/images/projects/my-flixx-client/gallery/favorites-movies-list.png
    image_path_thumbnail: /assets/images/projects/my-flixx-client/thumbnails/favorites-movies-list.png 
    title: 'User favorites movies list'
  - image_path: /assets/images/projects/my-flixx-client/gallery/signup-view.png
    image_path_thumbnail: /assets/images/projects/my-flixx-client/thumbnails/signup-view.png
    title: 'Signup view for user authentication.'   
  - image_path: /assets/images/projects/my-flixx-client/gallery/movie-details-view.png
    image_path_thumbnail: /assets/images/projects/my-flixx-client/thumbnails/movie-details-view.png 
    title: 'Single Movie view for detailed movie information and adding movies to favorites'
  - image_path: /assets/images/projects/my-flixx-client/gallery/login-view.png
    image_path_thumbnail: /assets/images/projects/my-flixx-client/thumbnails/login-view.png
    title: 'Login view for user authentication.'
  - image_path: /assets/images/projects/my-flixx-client/gallery/filter-result-movies.png
    image_path_thumbnail: /assets/images/projects/my-flixx-client/thumbnails/filter-result-movies.png
    title: 'Filter result for movies titles'
 

---

{% include image.html url="https://myflixx.netlify.app/" image="/projects/my-flixx-client/my-flixx-client.png" %}

## Overview

The My-flixx client-side application is a single-page, responsive web app built using React. It complements the existing server-side code by providing an interactive interface for movie enthusiasts to access and engage with a wide range of movie information. The app integrates rich interactions and multiple views, offering a polished user experience.

### Purpose and Context

In the realm of modern web development, client-side development is as crucial as server-side. Following the completion of the server-side for My-flixx, this project focuses on creating the client-side to render server responses effectively. It demonstrates full-stack development proficiency, particularly in the MERN stack.

### Objectives

The objective was to develop a user-friendly client-side application for My-flixx that allows users to interact with the movie database. Key goals included enabling users to view movie details, register, manage their profiles, and curate lists of favorite movies.

### Process

**Client-Side Development:**

The application was developed using React, with state routing for navigation and Parcel as the build tool. Bootstrap was used for styling and responsiveness, ensuring a consistent user experience across different devices.

{% include stacks-code.html %}
Feel free to look at the source code in the {% include source-code.html %}.

### Key Functionalities and Views:
{% include image-gallery.html %}


##### Retrospective

Developing the My-flixx client-side application highlighted the importance of a seamless user interface in accessing server-side data. Challenges included ensuring responsive design and integrating various API endpoints efficiently.
{:.blockquote .mb**3 .mt**3}

{% include retrospective-cards.html %}
