# Booj's Book List

Booj's Book List is a project I decided to take up in order to learn two new frameworks, NativeScipt and Laravel. Users can create an account, log in, and add, browse, and remove books. Additionally, books can be sorted alphabetically by title or author, and each book can be inspected for further details. 

## Teck Stack

The Front End was built with [NativeScript Vue](https://nativescript-vue.org/en/docs/introduction/). [Mocha/Chai](https://mochajs.org/) were used for unit testing. And the NativeScript [PlayGround](https://apps.apple.com/us/app/nativescript-playground/id1263543946?ls=1) and [Preview](https://apps.apple.com/us/app/nativescript-preview/id1264484702) Apps were used as a simulator to build this project. 

Booj's Books utilizes two RESTful APIs: 

One is built in [Laravel](https://laravel.com/) and stores book information. That repo can be found [here](https://github.com/saadricklamar/boojbooklist).

The second RESTful API is built in [Node.js](https://nodejs.org/en/) and stores mock user information. That repo can be found [here](https://github.com/saadricklamar/booj-users).

## Demo

Coming soon...

## Screen Shots

<img src="app/assets/images/HomePage.jpg" width="280" height="500"/> <img src="app/assets/images/CreateAccountPage.jpg" width="280" height="500"/> 


## Challenges & Take Aways

* NativeScript Vue reminded me of my work in React Native. Things like custom components, styling changes, prop drilling, and navigation were similar. NativeScript Vue is not to be confused with Vue Native, which is just React Native with a Vue shell. 

* I've tested snaphots, mouse events, inputs, asyncronohous JavaScript in Vue with Jest/Enzyme and specifically Vue-Test-Utilities. I was anticipating using that for unit testing, but NativeScript comes built in with test suites that they encourage you to use. I decided to utilize Mocha/Chai, but did not get to test as exhaustively as I would of liked.  

* My biggest challenge on the Front End came while using the simulator. For most of the project I was content using the NativeScript Playground & Preview apps to see my application live as I was building it. But once I got the Restful API in Laravel built, I wanted to start testing GET, POST, and DELETE requests. As I was making these fetch requests, they weren't returning any data on the mobile simulator even though the requests were working fine in Postman. I realized that the mobile simulator would not work for fetch requests because it can't connect to the local host vis-a-vis my computer. So at that point I transitioned to the desktop simulator and the data started flowing. 

* My biggest challenge on the Back End came in the initial setup of Laravel. Laravel's systems requirements are extensive, and include PHP, mysql, Apache, and some database management application like Sequel Pro. But once I got it up and running I found its file structure and content intuitive. Laravel is now my favorite way to make Restful APIs. 

* In terms of deployment, I wanted to use NativeScript Sidekick. After downloading and attempting to Auto Generate Provisioning and Certificates, I received this error:

     "An error has occured while generating the certificate and mobile provision. Reason: Two-step verification not supported at the moment..."

     After doing some research, it looks like Auto Generation for Code Signing does not work on Apple devices that have two-factor authentication always enabled, which is the case for newer iphones such as mine. This is from a NativeScript Engineer:

     "The Code Signing Assistance currently doesn't work with paid Apple IDs due to the two-step verification security feature utilized by Apple. We have this feature on our roadmap but it would require a lot of development effort and we cannot give you a precise time frame for when it might be available." ~ SideKick Manage iOS Provisioning and Certificates Errors

* All in all, this project was a blast. I loved learning Laravel and I plan on utilizing it for any Restful APIs I build in the future. I also want to explore Laravel's Blade templating for front facing projects. I think my experience with React Native and Vue.js helped me understand the fundamentals of NativeScript Vue quickly. 

## Contributors 

[Saad Baradan](https://github.com/saadricklamar)
