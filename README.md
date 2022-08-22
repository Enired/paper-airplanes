# Paper Airplanes

## About

Interaction app allows users to anonymously seek advice, vent their issues, and provide positive messages to other users. Users are able to provide advice to letters written by other users and are able to view advice responses to letters written by themselves. Inappropriate flagging functionality and Tensorflow model used to limit number of negative/inappropriate messages present throughout the app.

## Gallery
![Login to My Letters](https://github.com/Enired/paper-airplanes/blob/master/docs/gallery/login-my-profile.gif)
![Reading Responses to My Letters](https://github.com/Enired/paper-airplanes/blob/master/docs/gallery/reading_responses_my_letters.gif)
![Writing a New Letter](https://github.com/Enired/paper-airplanes/blob/master/docs/gallery/writing_a_new_letter.gif)
![Tensorflow to Limit Negative/Inappropriate Messages](https://github.com/Enired/paper-airplanes/blob/master/docs/gallery/negative_msg_tensorflow_stop.gif)
![Music Widget](https://github.com/Enired/paper-airplanes/blob/master/docs/gallery/music_widget.gif)


## Getting Started

### **Client**

```sh
cd client
```

#### Setup

Install dependencies with

```sh
npm install
```

#### Running Webpack Development Server

```sh
npm start
```

Server should be hosted on `http://localhost:3000/`

---

### **Server**

```sh
cd server
```

#### Api Setup

Install dependencies with

```sh
npm install
```

copy the .env.example into a .env file

```env
PORT=8080
  -->This is where the API server runs
```
#### Running Server

```sh
npm start
```

#### Database Reset

Resets, and seeds the database for development/testing.

```sh
npm run db:reset
```

## Future Goals
- Implement letter type filtering when viewing all letters