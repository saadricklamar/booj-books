# Booj's Book List

Booj's Book List is a take home project that allows users to add, browse, and remove books. Books can be sorted alphabetically by title or author, and each book can be inspected for further details. 

## Teck Stack

The Front End was built with [NativeScript Vue](https://nativescript-vue.org/en/docs/introduction/), not to be confused with Vue Native. [Mocha/Chai](https://mochajs.org/) were used for unit testing. And the NativeScript [PlayGround](https://apps.apple.com/us/app/nativescript-playground/id1263543946?ls=1) and [Preview](https://apps.apple.com/us/app/nativescript-preview/id1264484702) Apps were used as a simulator to build this project. 

## Screen Shots

<img src="app/assets/images/HomePage.jpeg" width="270" height="500"/> <img src="app/assets/images/BookListPage.jpeg.png" width="270" height="500"/> <img src="app/assets/images/BookDetailPage.jpeg.png" width="270" height="500"/>


## Take Aways

* NativeScript Vue reminded me of my work in React Native. Things like custom components, styling changes, prop drilling, and navigation were similar. NativeScript Vue is not to be confused with Vue Native, which is just React Native with a Vue shell. 

* I've tested Vue with Jest/Enzyme and specifically Vue-Test-Utilities. I was anticipating using that for unit testing, but NativeScript comes built in with test suites. I decided to use Mocha/Chai. 

* My biggest challenge on the Front End came while using the simulator. For most of the project I was content using NativeScript Playground & Preview apps to see my application live as I was building it. But once I got the Restful API in Laravel built, I wanted to start testing GET, POST, and DELETE requests. As I was making these fetch requests, they weren't returning any data on the mobile simulator even though the requests were working fine in Postman. I realized that the mobile simulator would not work for fetch requests because it can't connect to the local host vis-a-vis my computer. So at that point I transitioned to the desktop simulator and the data started flowing. 

## Contributors 

[Saad Baradan](https://github.com/saadricklamar)
