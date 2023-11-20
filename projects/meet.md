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

Meet is an elegant, single-page application designed to help users discover and explore upcoming tech-related events hosted by CareerFoundry in their city. It offers a platform for users to find events that align with their tech interests and network with other professionals in the field. This user-friendly app makes staying informed and connected within the tech community easily.

### Purpose and Context

Meet was developed as a personal portfolio project during a web development course at CareerFoundry. The primary purpose of this project was to demonstrate the practical application of integrating third-party libraries and APIs using modern web development libraries. This case study showcases the skills and knowledge acquired in the course, highlighting the ability to create a functional and user-friendly web application that addresses real-world needs.

### Objectives

The objective was to create the Meet platform, enabling effortless discovery and engagement with local events. A user-friendly interface was developed to facilitate easy event searches and access to detailed information.

### Process

**Client Side:**

The front end, developed using React, focused on creating a responsive and visually appealing interface. City-based event searching functionality was implemented, with data being fetched from the Google Calendar API, and PWA features were incorporated for offline access.

**Backend:**

AWS Lambda was employed to establish a scalable and cost-effective backend. Serverless functions were designed to fetch event data responsively.

#### Why a serverless function?

Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.

{% include stacks-code.html %}

Feel free to look at the source code in the {% include source-code.html %}.

### Key Functionalities and Page Views:

{% include image-gallery.html %}

##### Retrospective

Completing the Meet project demonstrated the potential of serverless architecture and PWA and SPA design. The TDD approach ensured the reliability of the code, resulting in a platform that effectively combined user-centric design with advanced technology..
{:.blockquote .mb__3 .mt__3}

{% include retrospective-cards.html %}
