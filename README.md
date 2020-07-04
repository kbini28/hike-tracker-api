# Take A Hike! - Express API

This is the API-side directory for the hike-tracking application. This application allows a user to create a new account and sign in to view and record their hikes. Hike information to be recorded and stored includes the park name and location, a distance and a difficulty rating. The user is able to record this information, and then view, edit and delete their previously recorded hikes. Users are able to change their password and sign out using the navigation bar.

The server-side application uses an express template and stores the user's information securely using mongoDB and mongoose. Authentication is required to view, create or update any of the user's information. Each user is currently only able to access their own information and are not able to view or otherwise interact with other user's logged hikes.

## Important Links

  * [GitHub API Repository](https://github.com/kbini28/hike-tracker-api)
  * [Heroku Database] (https://still-refuge-65541.herokuapp.com)
  * [GitHub Client Application Repository] (https://github.com/kbini28/hike-tracker-client)
  * [Application](https://kbini28.github.io/hike-tracker-client/)

## Planning Story

I placed more emphasis with this application on preparation and planning. My plan, including wireframes, were more thought out, and my expectations for execution were more realistic (at least at the start). My plan was to develop the backend application first, then focus on frontend authentication. Once I was able to have a user sign up and in, I followed by adding a change password and sign out, including curl scripts to test each step along the way. I made sure to run both the front end server and back end api server to make sure authentication was successful.

On the backend I was able to create a new Hike model based on the example provided. I created new CRUD routes for each hike action. I added a parameter that prevented users from seeing other user's posts. I would eventually like to include posts from other users, likely after I add comments/reviews. But until then users can only see their own content.

### User Stories

  * As a user, I want to be able to sign in securely.
  * As a user, I want to view a list of all hikes I've recorded.
  * As a user, I want to input my most recent hike, with at least a name and location.
  * As a user, I want to rate my experience on that trail.
  * As a user, I want to sign out from this application.

My user stories could be broken down further into "input my most recent hike," "add a name and location," etc.

### Technologies Used

  * Express
  * mongoDB
  * Mongoose
  * Javascript

### Unsolved Problems

I would like to add subdocuments to the hikes, for adding comments/reviews. I would like to add more user information to the User model (or the ability to update that information after sign-up). I would eventually like to have users interacting with other users' posts (like adding comments) in a later version.

### Wireframe

[Project ERD](https://i.imgur.com/YBIBhio.jpg)
[Second ERD, after group discussion](https://i.imgur.com/1MfIHP8.jpg)
