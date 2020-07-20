# Module 3 - Node - Mini project

<img src='public/images/screenshots/header.png' style='width:100%' />

You just accepted a web developer position at Slingshot Airlines!

They were really impressed with the work you did at Concordia Bootcamps. After a conversation with the CEO at the job fair, they hired you on the spot! They have project that they need to ship asap and are confident that you can deliver.

They have a new seat-booking app that is set to be released next week. You were told that _most_ of the work is already done. And that all that remains is just to connect the different pieces to get it working. Because you worked on similar functionality during your bootcamp, you're confident that you can pull it off.

You have been provided with a GitHub repo and little else.

You ask if it is possible to speak to the dev that worked on the project thus far. Nope. Not possible. He left without notice and on bad terms.

Looks like you're on your own...

---

## The App

### Screenshots

<img src='public/images/screenshots/seat-select.png' style='float:left;width:48%;margin-right:4%;' />
<img src='public/images/screenshots/confirmed.png' style='float:left;width:48%' />

### Functionality

- When a user navigates to `/seat-select`, they are presented with an input to enter the flight number.
- With the flight number, make a request to the server for the seating availability on that flight.
- When a response with seating is received, display the seating input as well as the form requesting user's information.
- User selects a seat, enters information and clicks 'Confirm'.
- Contact the server with the data, and wait for a success response to redirect to the `/confirmed.html` page.
- The confirmed page should display a confirmation message to the user with the info that they entered on the previous screen.

## Project Setup

```
yarn install
```

This will start the server and make the static pages accessible via their endpoint.

## Developer Notes

There is a folder called `notes` that contains possible hints on what to do next...

---

## Requirements for Poject Completion

In order for your project to be considered `DONE` (passing grade), you should have a working MVP of the app.

### Minimum Viable Product Details

1. user can select a flight from a dropdown (or buttons, or radio ). _Current implementation of an input field is not ideal._
2. user can select an available seat.
3. user can enter their personal information.
4. user can view the flight confirmation page.
5. given a `userId` (or other user info --up to you), user should be able to view his reservation.

_Note that mutated test data will be preserved as long as your server is running. It stays in memory. The changes will only be reset when the server is restarted._

### Optional

1. Connect to the remote db/server to get "live" data.

- NOTE TO INSTRUCTOR: There may or may not be a live server. Remove this goal, if not. (Server is hosted on a free heroku plan at the moment, so first call of the day will fail.)

2. given a `userId` (or other user info --up to you), user should be able to view their reservation.
3. Create an admin page that displays the seat status for a flight.
   - you could reuse the flight selection method you implemented above.
   - this page should display a table of all seats, and their status.
4. The admin page also displays the name of the user in the seat.
5. Each seat also has a link to view the reservation details.




New Dev Feedback

What i've managed to accomplish

<img src='public/images/screenshots/12.png'/>
<img src='public/images/screenshots/13.png'/>
<img src='public/images/screenshots/14.png'/>
<img src='public/images/screenshots/15.png'/>


-Working Dropdown that displays all flights and seats
-seats display availibilty
-customer can pick a seat and fill out info and send
-recieves a confirmation and ID
-Id can be used to check reservation
-the same email cant be used twice
-links to return to seat select at confirmation page at confirmation and reservation page


Overall I am still struggling with certain aspects of code, the dropdown menu was a pretty big hurdle
as I wanted to create a dropdown that added any new flights to the dropdown instead of having a static list.

Another aspect that I personally struggled with was the events, a lot of it had to do with having not done some in a while.
Overall the project went well, I am a little discouraged as it took me a bit longer than three days to complete, by 4 days I had an MVP but I wont lie and sayIi didnt work a fifth day to try and make it more refined. The Project was a struggle but overall I am glad by what I managed to learn through the experience.

Future improvements, allow the user to select multiple seats, or link API for live server


