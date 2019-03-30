# Project 3 - Order Me This Application

Ever struggle to organize a lunch order at the workplace? Taking too much time to set up a potluck or work order? Can you decipher everyone's hand-writing? Want an app that can not only organize lunch runs, but also organize group orders for office supplies and more?

Well, end the struggle by utilizing this new ordering application! _Order Me This_ makes organizing group orders easy. Already there are plenty of applications for creating lunch runs, but _Order Me This_ organizes all types of group orders, from potlucks to office supplies.

![landingPage-image](client/public/assets/images/landingPage.png) 

Brought to you by Team Members --- [Dan Solomon](https://github.com/DanRSolomon), [Kieran McDougall](https://github.com/LopTwo), [Jennifer Alejos](https://github.com/alejosjen), and [Melissa Perez](https://github.com/melperez19)

[Check out our application!](https://powerful-journey-65247.herokuapp.com/)

## How to use _Order Me This_

1. When first arriving to our site, new users will be prompted to Sign Up and Log in to create an account for hosting events. 

2. Once signed in, the user is directed to the Home page and greeted with a welcome message. 
![homePage](client/public/assets/images/homePage.png) 
An order form is provided to create an event and invite others to participate via email.


3. The newly created event is then added to the user's saved list of events.
![myEvents-image](client/public/assets/images/myEventsPage.png) 

4. Participants receive the invitation. 
![email](client/public/assets/images/receivedEmailPage.png) 
They will be directed to the Order page for the specified event to check out a link to the menu or business, and fill out their item(s) of choice, price, and special requests.
![eventSummary](client/public/assets/images/eventSummaryPage.png) 
3. The newly created event is then added to the user's saved list of events.
![myEvents-image](client/public/assets/images/myEventsPage.png) 

4. Participants receive the invitation. 
![email](client/public/assets/images/receivedEmailPage.png) 
They will be directed to the Order page for the specified event to check out a link to the menu or business, and fill out their item(s) of choice, price, and special requests.
![eventSummary](client/public/assets/images/eventSummaryPage.png) 

5. Once the time alloted for orders to be added comes to a close, the user is able to print out the details and finalize purchases. (This feature is currently a work in progress.)

### Technologies, Libraries, and NPM Packages Used


* **React.js**, **React-router-dom**, **MongoDB**, **Mongoose**, **Express.js**, **Axios**, **Bootstrap**, **CSS**

* **Context API in React** and **Cookie Sessions** - Authentication of user login information

* **React-Reveal** - Makes our SignUp|Login animation and smooth page transitions

* **MDBReact** - Specialized styling in our Footer layout to make our sign-in page snazzy

* **EmailJS** - Our email service connected to our database

* **Material-UI** - Interactive date/time picker to create an event

* **MomentJS** - Formats the date and time of the created event

* **agGrid** - Places all orders in an event into a nice react grid table component

#### Future Features Include
* Add authentication or limited views for participants to only see the order page and not have access to the host's secure nav links
* Add the specific agGrid print ready functionality for the Order Summary table
* Add another Logout button on the landing page as well
* Update the placeholder texts to be more usuable for other types of orders (office supplies, maintanance work, grocery runs, etc.) - Possibly adding radio buttons on the _Create Events Page_ to specify what type of run that event will be, and populate ordering forms and email templates specific to that type of run
* Add a _Saved Contacts_ page to store frequent participant email addresses
* Also save a username for reference as oppossed to just using the email address and password authentication
* Add an equation to tally up the total dollar amount of all orders within an event
* Add a payment system for participants to pay their order amount to fully make this app quick and easy