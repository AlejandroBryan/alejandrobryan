---
layout: post
title: 'Chat-app'
source-code: 'https://github.com/AlejandroBryan/chat-app.git'
stacks:
   - react-native
   - css3
   - firestore
   - expo
   - gifted-chat
card-info:     
   - title: Challenges
     style: 'danger'
     words: 'Integrating real-time communication features and ensuring seamless synchronization between online and offline data storage posed significant challenges.'
   - title: Successes
     style: 'success'
     words: 'Successfully integrating Firebase services for authentication, data storage, and image handling was a major achievement, demonstrating the app’s robust and scalable backend architecture.'
   - title: Future Steps
     style: 'warning'
     words: 'Plans include enhancing the app’s features, such as adding video calling capabilities and group chat functions, to broaden its utility.'
   - title: Final Thoughts
     style: 'info'
     words: 'The development of the Chat App was a rewarding experience, significantly enhancing skills in mobile app development and understanding the intricacies of React Native and Firebase integration.'
---
{% include image.html url="/chat-app" image="/projects/chat-app/chat-app.png" %}

## Overview
The Chat App is a dynamic, single-page application built using React Native, designed to facilitate seamless communication through text, image sharing, and location sharing. Optimized for both Android and iOS devices, this app provides a user-friendly platform for friends, family, and fellow students to connect and share experiences.

### Purpose and Context
Developed as a key project in a web development course at CareerFoundry, the Chat App project aimed to demonstrate the practical use of React Native and third-party libraries in building a versatile mobile application. This project highlights the shift towards mobile-centric technology usage and the growing need for efficient cross-platform development solutions.

### Objectives
The primary objective was to create a chat platform that allows for easy interaction and sharing among users. The app was designed to be intuitive, enabling users to quickly start conversations, share images, and their location, as well as read messages offline.

#### Process

**Client Side:**

The front end was developed with React Native, focusing on a responsive and engaging user interface. Features such as a customizable chat screen, image and location sharing, and offline message access were implemented.

**Backend:**

The backend utilized Google Firestore Database for storing chat conversations and Firebase Cloud Storage for image storage. Firebase authentication was used for user authentication.
{% include stacks-code.html %}
Key Functionalities and Page Views:

User customization of chat screen background.
Conversation display with options for sending text, images, and location data.
Offline access to chat messages.
Integration with the device's camera and image library.
Real-time location sharing in a map view.

Feel free to look at the source code in the {% include source-code.html %}.

#### Retrospective:

The completion of the Chat App showcased the effectiveness of React Native for mobile app development. Challenges included integrating various functionalities like image and location sharing while ensuring a smooth user experience.
{:.blockquote .mb__3 .mt__3}

{% include retrospective-cards.html %}







