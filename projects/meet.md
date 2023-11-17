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
   - image_path: /assets/images/projects/meet/gallery/google-calendar.png
     image_path_thumbnail: /assets/images/projects/meet/thumbnails/google-calendar.png
     title: 'Google calendar integration'
   - image_path: /assets/images/projects/meet/gallery/filter-by-city.png
     image_path_thumbnail: /assets/images/projects/meet/thumbnails/filter-by-city.png
     title: 'Event filtering by city'
   - image_path: /assets/images/projects/meet/gallery/signing-page.png
     image_path_thumbnail: /assets/images/projects/meet/thumbnails/signing-page.png
     title: 'User sign-in pages'
   - image_path: /assets/images/projects/meet/gallery/london-events.png
     image_path_thumbnail: /assets/images/projects/meet/thumbnails/london-events.png
     title: 'Specific city events (e.g., London events)'
   - image_path: /assets/images/projects/meet/gallery/all-cities.png
     image_path_thumbnail: /assets/images/projects/meet/thumbnails/all-cities.png
     title: 'Directory of all available cities'
   - image_path: /assets/images/projects/meet/gallery/all-events.png
     image_path_thumbnail: /assets/images/projects/meet/thumbnails/all-events.png
     title: 'Listings of events available in selected cities'
   - image_path: /assets/images/projects/meet/gallery/events-details.png
     image_path_thumbnail: /assets/images/projects/meet/thumbnails/events-details.png
     title: 'Detailed views of individual events'
---

{% include image.html url="/meet" image="/projects/meet/meet.png" %}

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

{% include retrospective-cards.html %}
