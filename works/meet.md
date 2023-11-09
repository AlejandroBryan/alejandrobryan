---
layout: post
title: 'meet'
source-code: 'https://github.com/AlejandroBryan/meet'
stacks:
   - react
   - css3
   - javascript
   - aws
   - recharts
   - momentjs
   - gh-pages
   - puppeteer
   - jest-cucumber

gallery:
   - image_path: /assets/images/works/meet/gallery/google-calendar.png
     image_path_thumbnail: /assets/images/works/meet/thumbnails/google-calendar.png
     title: 'Google calendar integration'
   - image_path: /assets/images/works/meet/gallery/filter-by-city.png
     image_path_thumbnail: /assets/images/works/meet/thumbnails/filter-by-city.png
     title: 'Event filtering by city'
   - image_path: /assets/images/works/meet/gallery/signing-page.png
     image_path_thumbnail: /assets/images/works/meet/thumbnails/signing-page.png
     title: 'User sign-in pages'
   - image_path: /assets/images/works/meet/gallery/london-events.png
     image_path_thumbnail: /assets/images/works/meet/thumbnails/london-events.png
     title: 'Specific city events (e.g., London events)'
   - image_path: /assets/images/works/meet/gallery/all-cities.png
     image_path_thumbnail: /assets/images/works/meet/thumbnails/all-cities.png
     title: 'Directory of all available cities'
   - image_path: /assets/images/works/meet/gallery/all-events.png
     image_path_thumbnail: /assets/images/works/meet/thumbnails/all-events.png
     title: 'Listings of events available in selected cities'
   - image_path: /assets/images/works/meet/gallery/events-details.png
     image_path_thumbnail: /assets/images/works/meet/thumbnails/events-details.png
     title: 'Detailed views of individual events'
---

{% include image.html url="/meet" image="/works/meet/meet.png" %}

## Overview

A serverless, progressive web application (PWA) was built using React and a test-driven development (TDD) approach. The application, designed as a single-page application (SPA), integrated with the Google Calendar API to fetch event information.

### Objectives

The objective was to create the Meet platform, enabling effortless discovery and engagement with local events. A user-friendly interface was developed to facilitate easy event searches and access to detailed information.

## Process



**Client Side:**

The front end was developed by us using React, focusing on creating a responsive and visually appealing interface. City-based event searching functionality was implemented, with data being fetched from the Google Calendar API, and PWA features were incorporated for offline access.



**Backend:**

AWS Lambda was employed by us to establish a scalable and cost-effective backend, with serverless functions designed to fetch event data responsively.

#### Why serverless functions?

Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.

{% include stacks-code.html %}

Feel you free to have a look to source code {% include source-code.html %}.

### Below is an overview of key functionalities and page views available in the Meet application:

{% include image-gallery.html %}



##### Retrospective
The completion of the Meet project demonstrated the potential of serverless architecture, PWA, and SPA design. The TDD approach ensured the reliability of the code, resulting in a platform that effectively combined user-centric design with advanced technology.
{:.blockquote .mb__3}
<div class="row">

 <div class="col__3 r-card danger">
   <h6> What didn't go well? </h6>
    <p>
  The biggest challenge was integrating Google's authorization and adhering to their privacy policy, which was essential for allowing user logins to the application.   
   </p>
 </div>

 <div class="col__3 r-card success">
 <h6> What went well? </h6>
   <p>
 The integration of the API calendar, OAuth, and AWS serverless was achieved successfully, thanks to the extensive documentation provided for each technology. This allowed for a seamless connection between the application and the necessary services for user authentication and event management.
   </p>
</div>

 <div class="col__3 r-card warning">
 <h6>Future Steps</h6>
 <p>
  expanding the platform's capabilities to fetch events from various providers and organizers, broadening the scope of accessible activities for users.
  </p>
</div>

<div class="col__3 r-card info">
 <h6>Final Thoughts</h6>
   <p>
  I'm quite proud of myself for successfully building such a complex application with modern technologies and learning how web applications perform behind the scenes, especially in terms of SPA design and data visualization.
   </p>
</div>
</div>

