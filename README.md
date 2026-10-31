# Twitter Clone

A full-stack social media web application inspired by Twitter/X, built using Node.js, Express.js, MongoDB, EJS, Bootstrap, and JavaScript.

The main objective of this project is to develop a functional Twitter-like platform where users can create accounts, publish posts, interact with other users, follow people, communicate through messages, save posts, receive notifications, and support other users through donations.

This project is designed as a complete full-stack application rather than a static frontend clone. The application follows a structured MVC-based architecture where the frontend, backend, database, authentication, file uploads, payments, and real-time communication are separated into appropriate modules.

---

# 1. Project Overview

The Twitter Clone provides the core functionality of a modern social media platform.

Users can register and log in to the application, create and manage their profiles, publish text and image-based posts, interact with posts, follow other users, communicate through private messages, receive notifications, save important posts, and make donations to other users.

The project also includes external service integrations for image storage, online payments, and real-time communication.

The major integrations used in the project are:

- MongoDB for database management
- Mongoose for MongoDB object modeling
- Express.js for backend and API routing
- Node.js as the runtime environment
- EJS for server-side rendered frontend pages
- Bootstrap for responsive user interface design
- JavaScript for client-side interactions
- Cloudinary for image storage
- Razorpay for donation and payment processing
- Socket.IO for real-time chat functionality
- Git and GitHub for version control

---

# 2. Main Objectives

The main objectives of this project are:

1. Build a functional social media platform using Node.js and Express.js.
2. Implement user authentication and authorization.
3. Store and manage application data using MongoDB.
4. Build reusable frontend components using EJS.
5. Create a responsive interface using Bootstrap.
6. Implement social interactions such as likes, comments, reposts, follows, and bookmarks.
7. Implement user-to-user private messaging.
8. Implement real-time communication using Socket.IO.
9. Allow users to upload profile, cover, and post images using Cloudinary.
10. Implement a donation system using Razorpay.
11. Maintain a clean MVC-based project architecture.
12. Keep controllers, routes, models, services, middleware, and views separated for maintainability.

---

# 3. Core Features

## 3.1 Authentication

The application provides a complete authentication system.

Features include:

- User registration
- User login
- User logout
- Password hashing
- Session-based authentication
- Protected routes
- Authentication middleware
- User authorization
- Form validation

Passwords are never stored directly in the database. Passwords are securely hashed before being stored.

---

## 3.2 User Profile

Every registered user has a dedicated profile.

A profile can contain:

- Display name
- Username
- Email
- Profile picture
- Cover/background picture
- Bio
- Date of birth
- Location
- Website
- Followers
- Following
- Number of posts
- Account creation date

Users can update their profile information through the Edit Profile section.

The application stores the user's date of birth instead of directly storing age. Age can be calculated dynamically from the stored date of birth whenever required.

---

## 3.3 Posts

Users can create and manage posts.

A post can contain:

- Text content
- Images
- Author information
- Creation date
- Hashtags
- Mentions

Users can:

- Create posts
- View posts
- Edit their own posts
- Delete their own posts
- Like posts
- Unlike posts
- Comment on posts
- Reply to comments
- Repost posts
- Quote repost posts
- Share posts
- Bookmark posts

Posts are displayed throughout the application using reusable EJS components.

---

## 3.4 Social Interaction

The application provides a social relationship system between users.

Users can:

- Follow other users
- Unfollow users
- View followers
- View following
- Visit other user profiles
- See suggested users
- Interact with posts created by other users

The follow system is maintained separately from the User model so that relationships between users can be efficiently managed.

---

## 3.5 Comments and Replies

Users can comment on posts.

The comment system supports:

- Creating comments
- Deleting own comments
- Viewing comments
- Replying to comments
- Displaying comment authors
- Comment timestamps

Comments can reference another comment using a parent comment relationship, allowing nested replies.

---

## 3.6 Likes

Users can like and unlike posts.

The application prevents the same user from creating multiple likes on the same post.

Likes are stored separately and connected to both the user and post.

The application can maintain a total like count for displaying the number of likes on each post.

---

## 3.7 Reposts

Users can repost content created by other users.

The application supports:

- Normal reposts
- Quote reposts
- Repost counts
- Displaying the original author
- Displaying the user who reposted the content

Quote reposts allow a user to add their own text while referencing an existing post.

---

## 3.8 Bookmarks

Users can save posts for later.

Bookmark functionality includes:

- Save a post
- Remove a bookmark
- View saved posts
- Prevent duplicate bookmarks

Saved posts are available from the Bookmarks section of the application.

---

## 3.9 Search and Explore

The Explore section allows users to discover content.

The system can provide:

- User search
- Post search
- Username search
- Hashtag search
- Trending topics
- Suggested users

Search results are displayed using reusable user and post components.

---

## 3.10 Notifications

The application provides notifications for important user activities.

Notifications can be generated when:

- Someone follows a user
- Someone likes a post
- Someone comments on a post
- Someone reposts a post
- Someone mentions a user
- Someone sends a message
- Someone makes a donation

Notifications contain information about the sender, recipient, related post or activity, notification type, read status, and creation time.

---

## 3.11 Private Messaging

The application includes a private messaging system.

Users can communicate directly with other users through conversations.

The messaging system supports:

- Creating conversations
- Sending messages
- Receiving messages
- Conversation history
- Message timestamps
- Read status
- Last message information

Socket.IO is used to provide real-time communication.

---

## 3.12 Donations

The application includes a donation system that allows one user to financially support another user.

The donation flow is integrated with Razorpay.

A typical donation flow is:

```text
User Profile
      |
      v
Donate
      |
      v
Enter Amount
      |
      v
Create Razorpay Order
      |
      v
Razorpay Checkout
      |
      v
Payment
      |
      v
Backend Payment Verification
      |
      v
Donation Record
      |
      v
Notification
```

The payment is verified on the backend before the donation is considered successful.

Donation records contain information such as:

- Donor
- Receiver
- Amount
- Currency
- Razorpay order ID
- Payment ID
- Payment status
- Optional message
- Creation date

---

# 4. Technology Stack

## 4.1 Node.js

Node.js is used as the runtime environment for the backend.

It allows the application to execute JavaScript outside the browser and provides the environment required to run the Express.js server.

Node.js handles:

- Server execution
- HTTP requests
- Database communication
- Authentication logic
- File processing
- Payment processing
- Real-time communication

---

## 4.2 Express.js

Express.js is used as the backend web framework.

It provides the structure required to build the application's server and routes.

Express.js is responsible for:

- Routing
- Middleware handling
- Request processing
- Response handling
- Authentication middleware
- Error handling
- API endpoints
- Connecting controllers with routes

The application follows a modular route structure instead of placing every route inside `app.js`.

---

## 4.3 MongoDB

MongoDB is used as the primary database.

MongoDB stores application data such as:

- Users
- Posts
- Comments
- Likes
- Follows
- Bookmarks
- Notifications
- Conversations
- Messages
- Donations
- Payments

MongoDB is selected because the application contains many document-oriented relationships and MongoDB integrates naturally with Node.js through Mongoose.

---

## 4.4 Mongoose

Mongoose is used as the Object Data Modeling library for MongoDB.

It provides:

- Schemas
- Models
- Validation
- Relationships through references
- Query helpers
- Middleware
- Database interaction

For example, the `User.model.js` file defines the structure and validation rules for user documents.

---

## 4.5 EJS

EJS stands for Embedded JavaScript Templates.

EJS is used as the server-side rendering engine for the frontend.

Instead of creating a completely separate frontend application, the server renders HTML pages using EJS templates.

EJS allows JavaScript data received from controllers to be displayed directly inside HTML.

The project uses EJS for:

- Login
- Registration
- Home feed
- User profiles
- Post pages
- Explore
- Notifications
- Messages
- Bookmarks
- Settings
- Donation pages

Reusable EJS partials are used for common UI components.

---

## 4.6 Bootstrap

Bootstrap is used as the primary frontend UI framework.

Bootstrap provides:

- Responsive grid system
- Navbar
- Cards
- Buttons
- Forms
- Modals
- Dropdowns
- Alerts
- Toasts
- Offcanvas components
- Responsive utilities
- Spacing utilities

Bootstrap reduces the amount of custom CSS required while allowing the application to remain responsive across desktop, tablet, and mobile devices.

Custom CSS is used wherever the default Bootstrap design needs to be modified to achieve the Twitter-like appearance.

---

## 4.7 JavaScript

JavaScript is used on the client side to provide dynamic interactions without requiring a complete page reload.

Client-side JavaScript handles functionality such as:

- Like and unlike
- Follow and unfollow
- Bookmarking
- Post actions
- Comments
- Modal interactions
- AJAX requests
- Fetch API requests
- Payment interaction
- Chat functionality

The frontend JavaScript files are separated according to their respective features.

---

## 4.8 Cloudinary

Cloudinary is used for storing and managing user-uploaded images.

Images that users upload are not permanently stored inside the project directory.

The upload flow is:

```text
Browser
   |
   v
Express Server
   |
   v
Multer
   |
   v
Cloudinary
   |
   v
Image URL
   |
   v
MongoDB
```

Cloudinary is used for:

- Profile pictures
- Cover pictures
- Post images

MongoDB stores the Cloudinary URL instead of storing the complete image file.

---

## 4.9 Razorpay

Razorpay is used for the donation and payment functionality.

The backend creates a Razorpay order before opening the payment interface.

After the payment is completed, the server verifies the payment information before storing the successful transaction.

Razorpay is integrated through:

- Razorpay configuration
- Payment service
- Payment controller
- Donation controller
- Payment routes
- Donation model
- Payment model

---

## 4.10 Socket.IO

Socket.IO is used for real-time communication.

The primary use case is private chat.

Socket.IO allows messages to be delivered between users without requiring the browser to continuously refresh the page.

It can also be extended for:

- Online status
- Typing indicators
- Real-time notifications
- Message delivery status

---

# 5. Development Architecture

The project follows a modular MVC-inspired architecture.

The general request flow is:

```text
Browser
   |
   v
Route
   |
   v
Middleware
   |
   v
Controller
   |
   v
Service
   |
   v
Model
   |
   v
MongoDB
```

For rendered pages, the controller sends the required data to an EJS view.

```text
Controller
    |
    v
EJS View
    |
    v
HTML Response
    |
    v
Browser
```

This separation keeps business logic, database logic, authentication logic, and presentation logic organized.

---

# 6. Project Directory Overview

The project is divided into the following major sections:

```text
Twitter/
│
├── app.js
├── package.json
├── public/
├── src/
├── views/
├── README.md
└── .env
```

Each directory has a specific responsibility.

# 7. Root Project Files

The root directory contains the main configuration files and entry point of the application.

```text
Twitter/
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── .env
├── .gitignore
├── public/
├── src/
└── views/
```

---

# 7.1 app.js

`app.js` is the main application entry point.

It is responsible for creating and configuring the Express application.

The file connects the different parts of the application together, including:

- Express
- Database configuration
- EJS
- Static files
- Middleware
- Routes
- Sessions
- Authentication
- Error handling

The `app.js` file should contain application-level configuration rather than large amounts of business logic.

The general responsibility of `app.js` is:

```text
Create Express Application
        |
        v
Configure Middleware
        |
        v
Configure EJS
        |
        v
Configure Static Files
        |
        v
Connect Routes
        |
        v
Configure Error Handling
        |
        v
Export Application
```

The application logic itself is kept inside controllers, services, models, and middleware instead of being written directly inside `app.js`.

---

# 7.2 package.json

`package.json` contains the configuration and dependency information of the Node.js project.

It defines:

- Project name
- Project version
- Project description
- Entry point
- Scripts
- Dependencies
- Development dependencies

The project dependencies may include packages such as:

```text
express
mongoose
ejs
express-session
connect-mongo
bcrypt
multer
cloudinary
razorpay
socket.io
dotenv
method-override
express-validator
```

The exact dependency list can change during development depending on the implementation.

---

# 7.3 package-lock.json

`package-lock.json` is automatically generated by npm.

It records the exact versions of installed packages and their dependencies.

This helps ensure that the same dependency versions can be installed when the project is deployed or developed on another machine.

The file should normally be committed to Git.

---

# 7.4 README.md

`README.md` contains the complete documentation of the project.

It explains:

- Project overview
- Features
- Technology stack
- Directory structure
- Database models
- Routes
- Controllers
- Middleware
- Services
- Views
- Setup instructions
- Environment variables
- API information
- Payment integration
- Deployment information

The README is intended to help another developer understand and run the project.

---

# 7.5 .env

The `.env` file stores environment-specific configuration and sensitive credentials.

Examples include:

```text
PORT
MONGODB_URI
SESSION_SECRET

CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
```

Sensitive information should never be directly written inside source-code files.

The `.env` file should not be pushed to GitHub.

Instead, a separate `.env.example` file can be created containing placeholder values.

Example:

```text
PORT=

MONGODB_URI=
SESSION_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

---

# 7.6 .gitignore

`.gitignore` specifies files and folders that Git should not track.

The project should ignore:

```text
node_modules/
.env
uploads/
.DS_Store
npm-debug.log
```

Environment variables and dependencies should not be uploaded to GitHub.

---

# 8. public/

The `public/` directory contains static frontend assets.

These files are directly accessible by the browser.

The directory is organized into:

```text
public/
│
├── css/
├── images/
└── js/
```

---

# 8.1 public/css/

The `css/` directory contains custom CSS files used to customize the application's appearance.

Bootstrap provides the basic responsive structure and components, while custom CSS is used for the Twitter-like visual design.

Possible structure:

```text
public/
└── css/
    ├── style.css
    ├── auth.css
    ├── home.css
    ├── profile.css
    ├── post.css
    ├── chat.css
    └── responsive.css
```

---

## style.css

`style.css` contains global application styles.

It can define:

- Global typography
- Body styling
- Common colors
- Common spacing
- Links
- Buttons
- Common utility classes
- General application layout

This file should contain styles that are shared throughout the application.

---

## auth.css

`auth.css` contains styles specific to authentication pages.

It can be used for:

- Login page
- Register page
- Authentication cards
- Form layout
- Authentication background
- Authentication buttons

---

## home.css

`home.css` contains styles specific to the home/feed page.

It can define:

- Feed layout
- Post composer
- Feed cards
- Sidebar layout
- Right sidebar
- Trending sections

---

## profile.css

`profile.css` contains styles for user profile pages.

It can define:

- Cover image
- Profile image
- Profile information
- Follow button
- Profile tabs
- User statistics
- Profile post layout

---

## post.css

`post.css` contains styling for posts and post-related components.

It can control:

- Post cards
- Post images
- Action buttons
- Like section
- Comment section
- Repost information

---

## chat.css

`chat.css` contains styles for the messaging interface.

It can define:

- Conversation list
- Message bubbles
- Chat header
- Message input
- Send button
- Chat layout

---

## responsive.css

`responsive.css` contains custom responsive rules that are required in addition to Bootstrap's responsive utilities.

It can handle:

- Mobile navigation
- Sidebar behavior
- Feed width
- Profile layout
- Chat layout
- Small-screen spacing

Bootstrap handles most responsiveness, so this file should only contain custom responsive behavior.

---

# 8.2 public/images/

The `images/` directory contains static images that belong to the application itself.

Examples include:

- Logo
- Favicon
- Default profile image
- Default cover image
- Static icons
- Other application assets

User-uploaded images should not normally be stored here.

User images are uploaded to Cloudinary.

---

# 8.3 public/images/logo/

This directory contains the application's branding assets.

Example:

```text
public/
└── images/
    └── logo/
        ├── logo.png
        ├── logo.svg
        └── favicon.ico
```

The logo can be used in:

- Navbar
- Login page
- Register page
- Footer
- Loading screens

---

# 8.4 public/js/

The `js/` directory contains client-side JavaScript.

Client-side JavaScript is responsible for dynamic interactions between the browser and backend.

Possible structure:

```text
public/
└── js/
    ├── main.js
    ├── auth.js
    ├── post.js
    ├── profile.js
    ├── comment.js
    ├── follow.js
    ├── bookmark.js
    ├── notification.js
    ├── chat.js
    └── donation.js
```

---

## main.js

`main.js` contains general-purpose frontend JavaScript.

It can handle:

- Common UI interactions
- Bootstrap initialization
- Alert dismissal
- Modal behavior
- Common event listeners

---

## auth.js

`auth.js` handles client-side authentication-related interactions.

It can be used for:

- Login form handling
- Registration form handling
- Client-side validation
- Password visibility
- Authentication-related AJAX requests

Server-side authentication must still be handled securely on the backend.

---

## post.js

`post.js` handles post-related frontend interactions.

Examples:

- Like
- Unlike
- Repost
- Quote repost
- Bookmark
- Delete
- Edit
- Share
- Create post
- Load more posts

A typical interaction can work like:

```text
User clicks Like
       |
       v
post.js
       |
       v
fetch()
       |
       v
POST /posts/:id/like
       |
       v
Express Route
       |
       v
Controller
       |
       v
MongoDB
       |
       v
JSON Response
       |
       v
Update UI
```

This allows the interface to respond without requiring a complete page reload.

---

## profile.js

`profile.js` handles profile-related interactions.

It can handle:

- Follow
- Unfollow
- Profile editing
- Profile image preview
- Cover image preview
- Profile-related AJAX requests

---

## comment.js

`comment.js` handles comment-related interactions.

It can handle:

- Adding comments
- Deleting comments
- Replying to comments
- Loading replies
- Updating comment counts

---

## follow.js

`follow.js` handles follow/unfollow interactions.

Example:

```text
Follow Button
     |
     v
follow.js
     |
     v
POST /users/:id/follow
     |
     v
Backend
     |
     v
Follow Created
     |
     v
Button changes to "Following"
```

---

## bookmark.js

`bookmark.js` handles saving and removing posts from bookmarks.

It communicates with bookmark routes through asynchronous requests.

---

## notification.js

`notification.js` handles notification-related frontend functionality.

It can be responsible for:

- Marking notifications as read
- Updating notification counters
- Loading notifications
- Displaying new notifications

---

## chat.js

`chat.js` handles the client-side chat interface.

It works together with Socket.IO.

Responsibilities include:

- Connecting to Socket.IO
- Sending messages
- Receiving messages
- Updating the conversation
- Displaying timestamps
- Handling typing indicators
- Updating message status

General flow:

```text
Browser
   |
   v
chat.js
   |
   v
Socket.IO
   |
   v
chat.socket.js
   |
   v
Other User
```

---

## donation.js

`donation.js` handles the frontend portion of the donation process.

It can:

- Open donation modal
- Collect donation amount
- Create payment order request
- Open Razorpay checkout
- Send payment information to backend
- Display payment result

The frontend does not independently decide whether a payment is successful. Payment verification is performed on the backend.

---

# 9. src/

The `src/` directory contains the main backend source code.

It contains:

```text
src/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── service/
├── sockets/
├── uploads/
└── utils/
```

Each folder has a separate responsibility.

The overall backend architecture is:

```text
Request
   |
   v
Routes
   |
   v
Middleware
   |
   v
Controller
   |
   v
Service
   |
   v
Model
   |
   v
MongoDB
```

---

# 10. src/config/

The `config/` directory contains configuration files for external services and infrastructure.

Current configuration files are:

```text
src/
└── config/
    ├── cloudinary.config.js
    ├── db.config.js
    └── razorpay.config.js
```

---

# 10.1 db.config.js

`db.config.js` is responsible for establishing the connection between the application and MongoDB.

It uses the MongoDB connection string stored in the environment variables.

General flow:

```text
.env
 |
 | MONGODB_URI
 v
db.config.js
 |
 v
Mongoose
 |
 v
MongoDB
```

Keeping database connection logic in a separate configuration file prevents database setup code from being mixed with application logic.

The file can export a database connection function that is called when the application starts.

---

# 10.2 cloudinary.config.js

`cloudinary.config.js` configures the Cloudinary SDK.

It uses credentials from environment variables.

The configuration generally contains:

- Cloudinary cloud name
- Cloudinary API key
- Cloudinary API secret

The configuration is later used by the Cloudinary service for uploading and managing images.

The configuration file should only handle configuration.

Actual upload logic belongs in:

```text
src/service/cloudinary.service.js
```

---

# 10.3 razorpay.config.js

`razorpay.config.js` configures the Razorpay client.

It uses:

- Razorpay Key ID
- Razorpay Key Secret

from environment variables.

The configuration is separated from payment logic.

The actual payment operations are handled by:

```text
src/service/payment.service.js
```

while request handling is performed by:

```text
src/controllers/payment.controller.js
```

---

# 11. Configuration Responsibility

The configuration layer follows the principle of keeping external service setup separate from application logic.

```text
config/
   |
   ├── Database Configuration
   |
   ├── Cloudinary Configuration
   |
   └── Razorpay Configuration
```

The rest of the application can use these configured services without needing to know how their credentials or connections were initialized.

This improves maintainability and makes it easier to change external services in the future.

---

# 12. Dependency and Configuration Flow

The complete initial application flow can be represented as:

```text
.env
 |
 +--------------------+
 |                    |
 v                    v
db.config.js       cloudinary.config.js
 |                    |
 v                    v
MongoDB             Cloudinary

.env
 |
 v
razorpay.config.js
 |
 v
Razorpay
```

The main application then uses these configured resources through the appropriate services and controllers.

---

# 13. Static Asset Flow

Static frontend files follow this structure:

```text
EJS View
   |
   +---- CSS
   |
   +---- JavaScript
   |
   +---- Images
   |
   v
Browser
```

Express exposes the `public/` directory as a static directory.

Therefore files such as:

```text
public/css/style.css
public/js/main.js
public/images/logo/logo.png
```

can be loaded by the browser through their public paths.

The backend source code inside `src/` is not directly exposed to the browser.

---

# 14. Backend Responsibility Separation

The project intentionally avoids placing everything inside `app.js`.

Different responsibilities are separated as follows:

```text
app.js
    |
    | Application setup
    |
routes/
    |
    | Request routing
    |
middleware/
    |
    | Authentication
    | Validation
    | Upload handling
    | Error handling
    |
controllers/
    |
    | Request/response handling
    |
service/
    |
    | Business and external-service logic
    |
models/
    |
    | Database structure and operations
    |
config/
    |
    | External service configuration
    |
utils/
    |
    | Reusable helper functions
```

This architecture makes the application easier to understand, test, debug, and expand.

---

# 15. Current Backend Flow

For example, creating a post follows a structure similar to:

```text
Browser
   |
   v
POST /posts
   |
   v
post.route.js
   |
   v
auth.middleware.js
   |
   v
upload.middleware.js
   |
   v
post.controller.js
   |
   v
cloudinary.service.js
   |
   v
Post.model.js
   |
   v
MongoDB
   |
   v
Response
   |
   v
EJS / JavaScript
```

This separation ensures that every part of the application has a clearly defined responsibility.

---

# 16. Summary of Part 2

The root and frontend/backend infrastructure of the project is organized as follows:

```text
Twitter/
│
├── app.js
│       Application setup and middleware configuration
│
├── package.json
│       Project dependencies and scripts
│
├── public/
│       Static frontend assets
│
│   ├── css/
│   │       Application styles
│   │
│   ├── images/
│   │       Static application images
│   │
│   └── js/
│           Client-side JavaScript
│
├── src/
│       Backend source code
│
│   └── config/
│           External service configuration
│
└── views/
        EJS frontend templates
```

# 17. Middleware Layer

The `src/middleware/` directory contains middleware functions that run between the incoming request and the controller.

Current middleware files:

```text
src/
└── middleware/
    ├── auth.middleware.js
    ├── errorHandler.middleware.js
    ├── upload.middleware.js
    └── validate.middleware.js
```

The general request flow is:

```text
Browser Request
      |
      v
Authentication Middleware
      |
      v
Validation Middleware
      |
      v
Upload Middleware
      |
      v
Controller
      |
      v
Response
```

Not every request will use every middleware. The required middleware depends on the operation.

---

# 18. auth.middleware.js

`auth.middleware.js` is responsible for checking whether a user is authenticated.

Since the application contains private features such as:

- Creating posts
- Sending messages
- Following users
- Liking posts
- Bookmarking posts
- Donating
- Viewing private conversations
- Editing profiles

these operations should not be accessible to unauthenticated users.

The authentication middleware checks the current session.

General flow:

```text
Request
   |
   v
auth.middleware.js
   |
   +---- User logged in?
   |          |
   |        YES
   |          |
   |          v
   |      Controller
   |
   NO
   |
   v
Login Page / Unauthorized Response
```

After successful authentication, the middleware can make the logged-in user's information available through the request object.

For example:

```text
req.user
```

Controllers can then use the authenticated user's ID.

---

# 18.1 Why Authentication Middleware Is Required

Without authentication middleware, a user could potentially send requests directly to backend routes without logging in.

For example:

```text
POST /posts
POST /users/:id/follow
POST /posts/:id/like
POST /messages
POST /donations
```

Authentication middleware protects these routes.

The controller should not need to repeatedly implement login checks.

Instead:

```text
Route
  |
  v
authMiddleware
  |
  v
Controller
```

This keeps the authentication logic reusable.

---

# 19. errorHandler.middleware.js

`errorHandler.middleware.js` is responsible for handling unexpected application errors.

Instead of writing separate error handling logic in every route, errors can be passed to the centralized error handler.

General flow:

```text
Controller
    |
    | Error
    v
next(error)
    |
    v
errorHandler.middleware.js
    |
    +---- API Request → JSON Response
    |
    +---- Browser Request → Error Page
```

The middleware can handle common error categories such as:

- Validation errors
- Database errors
- Authentication errors
- Invalid IDs
- Payment errors
- Cloudinary errors
- Unexpected server errors

The project should avoid exposing sensitive internal error details to users.

For example, users should not receive database credentials, stack traces, or internal implementation information.

---

# 20. upload.middleware.js

`upload.middleware.js` handles file uploads received from forms.

The project requires image uploads for features such as:

- Profile picture
- Cover image
- Post image

Multer can be used to process incoming multipart/form-data requests.

The upload flow is:

```text
Browser
   |
   | Image
   v
Multer
   |
   v
upload.middleware.js
   |
   v
Cloudinary Service
   |
   v
Cloudinary
   |
   v
Image URL
   |
   v
MongoDB
```

The application should not permanently store user-uploaded images inside the project directory.

Cloudinary is responsible for permanent image storage.

The `src/uploads/` directory may only be used for temporary files if the selected upload configuration requires local temporary storage.

---

# 21. validate.middleware.js

`validate.middleware.js` contains request validation logic.

Validation is required before storing or processing user input.

Examples include:

- Email validation
- Password validation
- Username validation
- Post content validation
- Donation amount validation
- Comment validation
- Profile information validation

General flow:

```text
Request
   |
   v
Validation Middleware
   |
   +---- Valid → Controller
   |
   +---- Invalid → Validation Error
```

Validation helps prevent malformed or incomplete data from reaching controllers and database operations.

Server-side validation should always be performed even if client-side JavaScript validation exists.

---

# 22. Models Layer

The `src/models/` directory contains Mongoose models.

Models define the structure of documents stored in MongoDB.

Current models:

```text
src/
└── models/
    ├── Bookmark.model.js
    ├── Comment.model.js
    ├── Conversation.model.js
    ├── Donation.model.js
    ├── Follow.model.js
    ├── Like.model.js
    ├── Message.model.js
    ├── Notification.model.js
    ├── Payment.model.js
    ├── Post.model.js
    └── User.model.js
```

The models form the database layer of the application.

---

# 23. User.model.js

`User.model.js` is the primary model of the application.

Every registered user is represented by a User document.

A user can:

- Create posts
- Follow other users
- Be followed
- Like posts
- Comment
- Repost
- Bookmark posts
- Send messages
- Receive messages
- Receive notifications
- Donate to other users
- Receive donations

Possible user information includes:

```text
User
├── displayName
├── username
├── email
├── password
├── profilePicture
├── coverPicture
├── bio
├── dateOfBirth
├── location
├── website
├── followers
├── following
├── createdAt
└── updatedAt
```

The password should never be stored as plain text.

It should be hashed using a password hashing library such as bcrypt.

---

# 24. Post.model.js

`Post.model.js` represents posts created by users.

A post may contain:

```text
Post
├── author
├── content
├── image
├── likes
├── comments
├── reposts
├── quotePost
├── createdAt
└── updatedAt
```

The `author` field references the user who created the post.

A post can support:

- Text
- Image
- Like
- Comment
- Reply
- Repost
- Quote repost
- Bookmark
- Share
- Delete
- Edit

The post model is one of the central models of the application.

---

# 25. Like.model.js

`Like.model.js` stores information about users who liked posts.

Instead of storing an unlimited array of user IDs directly inside every post, a separate Like collection can be used.

Conceptually:

```text
Like
├── user
├── post
└── createdAt
```

The relationship is:

```text
User
  |
  | likes
  v
Like
  |
  | belongs to
  v
Post
```

A unique combination of:

```text
user + post
```

should normally be enforced so that the same user cannot like the same post multiple times.

---

# 26. Comment.model.js

`Comment.model.js` represents comments and replies.

A comment can contain:

```text
Comment
├── author
├── post
├── content
├── parentComment
└── createdAt
```

The `post` identifies the post being commented on.

The optional `parentComment` field allows nested replies.

For example:

```text
Post
 |
 ├── Comment A
 │      |
 │      ├── Reply A1
 │      └── Reply A2
 |
 └── Comment B
```

This allows the application to support both comments and replies using the same model.

---

# 27. Follow.model.js

`Follow.model.js` represents relationships between users.

A follow document can contain:

```text
Follow
├── follower
├── following
└── createdAt
```

For example:

```text
User A
   |
   | follows
   v
User B
```

The database relationship becomes:

```text
follower  → User A
following → User B
```

A unique constraint should normally prevent the same user from following the same user multiple times.

A user should also not be allowed to follow themselves.

---

# 28. Bookmark.model.js

`Bookmark.model.js` stores posts saved by users.

A bookmark can contain:

```text
Bookmark
├── user
├── post
└── createdAt
```

The relationship is:

```text
User
   |
   | bookmarks
   v
Bookmark
   |
   v
Post
```

Bookmarks are private to the user.

Therefore, a user's bookmarks should only be accessible to that authenticated user unless the application later introduces public bookmark collections.

---

# 29. Notification.model.js

`Notification.model.js` stores user notifications.

Notifications can be generated for events such as:

- Someone followed the user
- Someone liked their post
- Someone commented on their post
- Someone reposted their post
- Someone mentioned them
- Someone sent a donation

A notification can contain:

```text
Notification
├── recipient
├── sender
├── type
├── post
├── comment
├── donation
├── message
├── isRead
└── createdAt
```

The exact fields can be adjusted according to the final notification implementation.

A notification represents an event that occurred involving a user.

---

# 30. Conversation.model.js

`Conversation.model.js` represents a private chat conversation.

For a basic one-to-one messaging system, a conversation can contain the participants.

Conceptually:

```text
Conversation
├── participants
├── lastMessage
└── updatedAt
```

Example:

```text
Conversation
 |
 ├── User A
 └── User B
```

The conversation does not necessarily contain the entire message history.

Messages are stored separately in `Message.model.js`.

---

# 31. Message.model.js

`Message.model.js` represents individual chat messages.

A message can contain:

```text
Message
├── conversation
├── sender
├── content
├── read
└── createdAt
```

The relationship is:

```text
Conversation
      |
      | contains
      v
Messages
      |
      +── Message 1
      +── Message 2
      +── Message 3
```

Socket.IO can be used to deliver messages in real time.

The message should still be stored in MongoDB so that the conversation can be restored after users reconnect.

---

# 32. Donation.model.js

`Donation.model.js` stores completed donation information.

A donation connects one user with another user.

Conceptually:

```text
Donation
├── donor
├── receiver
├── amount
├── currency
├── payment
├── message
├── status
└── createdAt
```

The relationship is:

```text
Donor
   |
   | donation
   v
Receiver
```

The donation should only be marked as successful after backend payment verification.

The frontend must not be trusted to decide whether money was successfully transferred.

---

# 33. Payment.model.js

`Payment.model.js` stores payment gateway information.

It is primarily concerned with the Razorpay transaction rather than the social relationship between donor and receiver.

Possible fields include:

```text
Payment
├── user
├── orderId
├── paymentId
├── signature
├── amount
├── currency
├── status
└── createdAt
```

The Payment model provides transaction-level information.

The Donation model represents the actual donation relationship.

This separation makes the payment system easier to audit and maintain.

---

# 34. Difference Between Donation and Payment

The two models have different responsibilities.

```text
Payment
    |
    | Financial transaction
    |
    v
Razorpay Transaction

Donation
    |
    | Social/business meaning
    |
    v
User A donated to User B
```

For example:

```text
User A
  |
  | Donate ₹500
  v
Razorpay Payment
  |
  | Verified
  v
Donation Record
  |
  v
User B receives donation notification
```

A successful payment can therefore result in the creation of a successful donation record.

---

# 35. Model Relationship Overview

The major relationships between models are:

```text
                         ┌─────────────┐
                         │    User     │
                         └──────┬──────┘
                                |
            ┌───────────────────┼────────────────────┐
            |                   |                    |
            v                   v                    v
          Post               Follow               Bookmark
            |
       ┌────┼────┐
       |    |    |
       v    v    v
     Like Comment Repost
              |
              v
            Reply

User
 |
 ├── Conversation
 │       |
 │       v
 │     Message
 │
 ├── Notification
 │
 └── Donation
          |
          v
       Payment
```

This represents the conceptual database relationships.

---

# 36. User-Centered Database Relationships

A single user can participate in almost every feature.

```text
User
 |
 ├── Creates → Posts
 |
 ├── Likes → Posts
 |
 ├── Comments → Posts
 |
 ├── Follows → Users
 |
 ├── Bookmarks → Posts
 |
 ├── Sends → Messages
 |
 ├── Receives → Notifications
 |
 ├── Sends → Donations
 |
 └── Receives → Donations
```

This makes `User.model.js` one of the most important models in the project.

---

# 37. Why Separate Models Are Used

The project uses separate collections for relationships such as:

```text
Like
Follow
Bookmark
Notification
```

instead of putting everything into the User document.

This prevents the User document from becoming excessively large.

For example, a user could potentially have:

```text
100,000 followers
50,000 bookmarks
200,000 notifications
```

Storing all of these directly inside one User document would make the document difficult to manage efficiently.

Separate collections provide a cleaner database structure.

---

# 38. Mongoose References

Most relationships will use MongoDB ObjectId references.

For example:

```text
Post
 |
 └── author → User ObjectId
```

or:

```text
Like
├── user → User ObjectId
└── post → Post ObjectId
```

This allows Mongoose's `populate()` functionality to retrieve related documents when required.

Example conceptual flow:

```text
Like
 |
 ├── user ID
 └── post ID
       |
       v
populate()
       |
       v
User + Post information
```

Population should be used carefully because unnecessary population can increase database query cost.

---

# 39. Database Design Principle

The database design follows a modular approach.

Each model should represent a clear business entity or relationship.

```text
User       → Account
Post       → Content
Comment    → Discussion
Like       → Reaction
Follow     → Social relationship
Bookmark   → Saved content
Notification → Event
Conversation → Chat container
Message    → Chat message
Donation   → Donation relationship
Payment    → Payment transaction
```

This makes the system easier to expand in the future.

---

# 40. Model Layer Responsibility

Models should primarily handle:

- Schema definition
- Field validation
- Database relationships
- Indexes
- Defaults
- Timestamps
- Model-level logic

Models should not contain large amounts of request-handling logic.

For example, the model should not decide what response should be sent to the browser.

That responsibility belongs to controllers.

The separation is:

```text
Route
   |
   v
Middleware
   |
   v
Controller
   |
   v
Model
   |
   v
MongoDB
```

---

# 41. Middleware and Model Interaction

A typical authenticated post creation request may look like:

```text
POST /posts
      |
      v
auth.middleware.js
      |
      | Verify logged-in user
      v
upload.middleware.js
      |
      | Process image
      v
post.controller.js
      |
      | Prepare post data
      v
Post.model.js
      |
      v
MongoDB
```

The middleware protects and prepares the request.

The controller handles the operation.

The model handles database interaction.

---

# 42. Important Design Rule

The project should avoid putting all business logic into routes.

Incorrect architecture:

```text
Route
  |
  └── 100 lines of database logic
```

Preferred architecture:

```text
Route
  |
  v
Middleware
  |
  v
Controller
  |
  v
Service
  |
  v
Model
```

This separation becomes especially important for:

- Payments
- Cloudinary uploads
- Notifications
- Chat
- Complex post operations

because these features involve multiple steps.

---

# 43. Summary of Part 3

The middleware and model layers provide the foundation of the application's backend.

```text
Middleware
    |
    ├── Authentication
    ├── Validation
    ├── File Upload
    └── Error Handling
    |
    v
Controllers
    |
    v
Services
    |
    v
Models
    |
    v
MongoDB
```

# 44. Controllers Layer

The `src/controllers/` directory contains the main request-handling logic of the application.

Current controller files:

```text
src/
└── controllers/
    ├── auth.controller.js
    ├── bookmark.controller.js
    ├── chat.controller.js
    ├── comment.controller.js
    ├── donation.controller.js
    ├── follow.controller.js
    ├── notification.controller.js
    ├── payment.controller.js
    ├── post.controller.js
    └── user.controller.js
```

Controllers receive requests from routes, process the request using models and services, and finally return a response.

The general flow is:

```text
Browser
   |
   v
Route
   |
   v
Middleware
   |
   v
Controller
   |
   +----------+
   |          |
   v          v
Service     Model
   |          |
   v          v
External    MongoDB
Service
   |
   v
Controller
   |
   v
Response
```

Controllers should focus on request and response handling.

They should not become extremely large files containing every business operation.

---

# 45. auth.controller.js

`auth.controller.js` handles authentication-related operations.

Main responsibilities include:

- Show login page
- Show registration page
- Register a new user
- Login user
- Logout user
- Password-related operations
- Session creation
- Authentication-related validation

Possible functions include:

```text
showLogin()
showRegister()
registerUser()
loginUser()
logoutUser()
showForgotPassword()
resetPassword()
```

---

## 45.1 Registration Flow

The registration process can follow:

```text
Register Form
     |
     v
POST /auth/register
     |
     v
Validation
     |
     v
Check Existing User
     |
     v
Hash Password
     |
     v
Create User
     |
     v
Save to MongoDB
     |
     v
Create Session
     |
     v
Redirect to Home/Profile
```

The password must never be stored as plain text.

---

## 45.2 Login Flow

```text
Login Form
     |
     v
POST /auth/login
     |
     v
Find User
     |
     v
Compare Password
     |
     v
Create Session
     |
     v
Redirect
```

After login, the session identifies the authenticated user.

---

## 45.3 Logout Flow

Logout should destroy the user's session.

```text
User clicks Logout
       |
       v
POST /auth/logout
       |
       v
Destroy Session
       |
       v
Redirect to Login
```

---

# 46. user.controller.js

`user.controller.js` handles user profile and user-related operations.

Responsibilities can include:

- Display profile
- Edit profile
- Update profile
- Search users
- Display followers
- Display following users
- Display suggested users
- Update profile picture
- Update cover picture
- Update account information

Possible controller functions:

```text
showProfile()
showEditProfile()
updateProfile()
searchUsers()
getFollowers()
getFollowing()
getSuggestedUsers()
```

---

# 47. Profile Flow

A profile request may follow:

```text
GET /users/:username
       |
       v
user.route.js
       |
       v
user.controller.js
       |
       v
User.model.js
       |
       v
Post.model.js
       |
       v
Render profile.ejs
```

The controller can retrieve:

- User information
- User posts
- Follower count
- Following count
- Current user's relationship with the profile

and pass the required data to the EJS view.

---

# 48. post.controller.js

`post.controller.js` manages post-related operations.

Responsibilities include:

- Create post
- Display post
- Edit post
- Delete post
- Like/unlike
- Repost
- Quote repost
- Share
- Feed generation

Possible functions include:

```text
createPost()
showPost()
editPost()
updatePost()
deletePost()
likePost()
unlikePost()
repost()
quotePost()
sharePost()
getFeed()
```

---

# 49. Create Post Flow

```text
Create Post Form
       |
       v
POST /posts
       |
       v
Authentication
       |
       v
Validation
       |
       v
Upload Image
       |
       v
post.controller.js
       |
       v
Cloudinary Service
       |
       v
Post.model.js
       |
       v
MongoDB
       |
       v
Notification / Feed
       |
       v
Response
```

If an image is attached, the image is uploaded to Cloudinary.

MongoDB stores the resulting image URL rather than storing the image itself.

---

# 50. Feed Generation

The home feed is one of the main operations of the application.

The controller can retrieve posts according to the user's feed requirements.

For example:

```text
Current User
     |
     v
Following List
     |
     v
Find Posts
     |
     v
Sort by Date
     |
     v
Populate Author
     |
     v
Render Home
```

The feed can later be optimized with pagination or cursor-based loading.

---

# 51. comment.controller.js

`comment.controller.js` manages comments and replies.

Responsibilities include:

- Create comment
- Delete comment
- Edit comment
- Create reply
- Retrieve comments
- Retrieve replies

Possible functions:

```text
createComment()
updateComment()
deleteComment()
createReply()
getComments()
getReplies()
```

The basic flow is:

```text
Post
 |
 v
Comment Form
 |
 v
POST /posts/:id/comments
 |
 v
comment.controller.js
 |
 v
Comment.model.js
 |
 v
MongoDB
```

When a comment is created, the post owner may also receive a notification.

---

# 52. follow.controller.js

`follow.controller.js` manages follow relationships.

Responsibilities include:

- Follow user
- Unfollow user
- Get followers
- Get following
- Suggested users

Possible functions:

```text
followUser()
unfollowUser()
getFollowers()
getFollowing()
getSuggestedUsers()
```

---

# 53. Follow Flow

```text
User A
  |
  | Click Follow
  v
POST /users/:id/follow
  |
  v
follow.controller.js
  |
  v
Check Existing Follow
  |
  +---- Already Exists → Error/No Action
  |
  +---- Does Not Exist
              |
              v
         Create Follow
              |
              v
       Create Notification
              |
              v
            Response
```

A follow relationship should normally be unique.

---

# 54. bookmark.controller.js

`bookmark.controller.js` manages saved posts.

Responsibilities include:

- Bookmark post
- Remove bookmark
- Display bookmarked posts

Possible functions:

```text
addBookmark()
removeBookmark()
getBookmarks()
```

Flow:

```text
Post
 |
 v
Bookmark Button
 |
 v
POST /posts/:id/bookmark
 |
 v
bookmark.controller.js
 |
 v
Bookmark.model.js
 |
 v
MongoDB
```

The bookmark belongs to the authenticated user.

---

# 55. notification.controller.js

`notification.controller.js` handles notifications.

Responsibilities include:

- Display notifications
- Mark notification as read
- Mark all notifications as read
- Delete notifications if required

Possible functions:

```text
getNotifications()
markAsRead()
markAllAsRead()
deleteNotification()
```

Notifications may be generated by other controllers.

For example:

```text
Follow Controller
       |
       v
Notification Service
       |
       v
Notification Model
```

The notification controller mainly handles retrieving and managing notifications for the user.

---

# 56. chat.controller.js

`chat.controller.js` handles normal HTTP operations related to messaging.

Responsibilities may include:

- Open messages page
- Create/get conversation
- Retrieve conversations
- Retrieve message history
- Create conversation if one does not exist

Possible functions:

```text
showMessages()
getConversations()
getConversation()
createConversation()
getMessages()
```

Real-time message delivery will be handled separately by Socket.IO.

Therefore, the architecture is:

```text
HTTP
 |
 v
chat.controller.js
 |
 v
Conversation / Message Models
```

and:

```text
Real-Time
 |
 v
Socket.IO
 |
 v
chat.socket.js
```

---

# 57. donation.controller.js

`donation.controller.js` handles donation-related application logic.

Responsibilities include:

- Display donation page/modal
- Create donation request
- Retrieve donation history
- Display donation information
- Connect donation with payment verification

The donation flow is:

```text
User Profile
      |
      v
Donate
      |
      v
Enter Amount
      |
      v
Donation Controller
      |
      v
Payment Service
      |
      v
Razorpay
```

After successful verification:

```text
Razorpay
   |
   v
Payment Verification
   |
   v
Donation Record
   |
   v
Notification
```

---

# 58. payment.controller.js

`payment.controller.js` is responsible for payment-specific HTTP requests.

It works closely with:

```text
src/service/payment.service.js
```

and:

```text
src/config/razorpay.config.js
```

Possible functions include:

```text
createOrder()
verifyPayment()
paymentSuccess()
paymentFailure()
```

---

# 59. Payment Verification

Payment verification is a critical security step.

The frontend should never simply send:

```text
paymentSuccessful = true
```

and expect the backend to trust it.

Instead:

```text
User
 |
 v
Razorpay Checkout
 |
 v
Payment
 |
 v
Razorpay Response
 |
 v
Backend
 |
 v
Verify Signature
 |
 v
Payment Model
 |
 v
Donation Model
 |
 v
Notification
```

Only after successful server-side verification should the application consider the payment successful.

---

# 60. Controllers and Services

Some operations require external services.

For example:

```text
Post Controller
       |
       v
Cloudinary Service
       |
       v
Cloudinary
```

and:

```text
Payment Controller
       |
       v
Payment Service
       |
       v
Razorpay
```

The controller should not contain every detail of the external service implementation.

Services handle reusable business or integration logic.

---

# 61. Routes Layer

The `src/routes/` directory defines the application's URL endpoints.

Current routes:

```text
src/
└── routes/
    ├── auth.route.js
    ├── bookmark.route.js
    ├── chat.route.js
    ├── comment.route.js
    ├── follow.route.js
    ├── notification.route.js
    ├── payment.route.js
    ├── post.route.js
    └── user.route.js
```

Routes answer the question:

> "When this HTTP request comes in, which middleware and controller should handle it?"

Routes should remain relatively small.

---

# 62. auth.route.js

`auth.route.js` defines authentication endpoints.

Example responsibilities:

```text
GET  /auth/login
POST /auth/login

GET  /auth/register
POST /auth/register

POST /auth/logout

GET  /auth/forgot-password
POST /auth/forgot-password
```

The route connects these endpoints to `auth.controller.js`.

---

# 63. user.route.js

`user.route.js` handles user-related endpoints.

Possible routes:

```text
GET   /users/:username
GET   /users/:username/edit
PATCH /users/:username
GET   /users/search
GET   /users/:username/followers
GET   /users/:username/following
```

The exact URL design can be adjusted during implementation.

---

# 64. post.route.js

`post.route.js` handles post endpoints.

Possible routes:

```text
GET    /posts/:id
POST   /posts
GET    /posts/:id/edit
PATCH  /posts/:id
DELETE /posts/:id

POST   /posts/:id/like
DELETE /posts/:id/like

POST   /posts/:id/repost
POST   /posts/:id/quote

POST   /posts/:id/share
```

This route file connects post requests to `post.controller.js`.

---

# 65. comment.route.js

`comment.route.js` handles comments and replies.

Possible routes:

```text
POST   /posts/:postId/comments
PATCH  /comments/:id
DELETE /comments/:id

POST   /comments/:commentId/replies
```

The route sends the request to `comment.controller.js`.

---

# 66. follow.route.js

`follow.route.js` manages follow relationships.

Possible routes:

```text
POST   /users/:id/follow
DELETE /users/:id/follow

GET    /users/:id/followers
GET    /users/:id/following
```

The routes are protected by authentication middleware.

---

# 67. bookmark.route.js

`bookmark.route.js` manages bookmarks.

Possible routes:

```text
POST   /posts/:id/bookmark
DELETE /posts/:id/bookmark

GET    /bookmarks
```

Only authenticated users should be allowed to access their bookmarks.

---

# 68. notification.route.js

`notification.route.js` handles notification endpoints.

Possible routes:

```text
GET   /notifications
PATCH /notifications/:id/read
PATCH /notifications/read-all
DELETE /notifications/:id
```

---

# 69. chat.route.js

`chat.route.js` handles conversation-related HTTP requests.

Possible routes:

```text
GET  /messages
GET  /messages/:conversationId
POST /messages/conversation
```

The actual real-time message delivery is handled through Socket.IO.

---

# 70. payment.route.js

`payment.route.js` handles payment endpoints.

Possible routes:

```text
POST /payments/create-order
POST /payments/verify
```

These routes should be protected and validated carefully.

---

# 71. Route Naming Convention

The project should follow a consistent REST-style naming approach.

Examples:

```text
GET     /posts
POST    /posts
GET     /posts/:id
PATCH   /posts/:id
DELETE  /posts/:id
```

For actions:

```text
POST   /posts/:id/like
DELETE /posts/:id/like

POST   /users/:id/follow
DELETE /users/:id/follow
```

This makes the API easier to understand.

---

# 72. Route to Controller Mapping

The relationship between routes and controllers is:

```text
auth.route.js
      |
      v
auth.controller.js

user.route.js
      |
      v
user.controller.js

post.route.js
      |
      v
post.controller.js

comment.route.js
      |
      v
comment.controller.js

follow.route.js
      |
      v
follow.controller.js

bookmark.route.js
      |
      v
bookmark.controller.js

notification.route.js
      |
      v
notification.controller.js

chat.route.js
      |
      v
chat.controller.js

payment.route.js
      |
      v
payment.controller.js
```

This one-to-one organization makes it easier to locate backend logic.

---

# 73. Complete Request Lifecycle

A normal request can pass through several layers:

```text
                         Browser
                            |
                            v
                         Route
                            |
                            v
                       Middleware
                            |
                            v
                        Controller
                            |
                 +----------+----------+
                 |                     |
                 v                     v
              Service               Model
                 |                     |
                 v                     v
         External Service           MongoDB
                 |                     |
                 +----------+----------+
                            |
                            v
                        Controller
                            |
                            v
                         Response
                            |
                            v
                         Browser
```

For example, a post with an image can involve almost every layer.

---

# 74. Example: Creating a Post

```text
User submits post
       |
       v
POST /posts
       |
       v
post.route.js
       |
       v
auth.middleware.js
       |
       v
validate.middleware.js
       |
       v
upload.middleware.js
       |
       v
post.controller.js
       |
       +--------------------+
       |                    |
       v                    v
cloudinary.service.js    Post.model.js
       |                    |
       v                    v
Cloudinary               MongoDB
       |                    |
       +---------+----------+
                 |
                 v
          Post Created
                 |
                 v
              Response
```

---

# 75. Example: Following a User

```text
User clicks Follow
       |
       v
POST /users/:id/follow
       |
       v
auth.middleware.js
       |
       v
follow.controller.js
       |
       v
Follow.model.js
       |
       v
MongoDB
       |
       v
notification.service.js
       |
       v
Notification.model.js
       |
       v
Response
```

This shows why controllers, models, and services have separate responsibilities.

---

# 76. Example: Donation

```text
User clicks Donate
       |
       v
POST /payments/create-order
       |
       v
payment.controller.js
       |
       v
payment.service.js
       |
       v
Razorpay
       |
       v
Order Created
       |
       v
Razorpay Checkout
       |
       v
Payment
       |
       v
POST /payments/verify
       |
       v
payment.controller.js
       |
       v
Verify Signature
       |
       v
Payment.model.js
       |
       v
Donation.model.js
       |
       v
notification.service.js
```

---

# 77. Important Architectural Rule

The project follows this separation:

```text
Routes
    = Where the request goes

Middleware
    = What must be checked/prepared before processing

Controllers
    = What should happen for the request

Services
    = Complex/reusable business or external-service logic

Models
    = How data is represented and stored

Views
    = What the user sees
```

This is one of the most important architectural concepts of the project.

---

# 78. Summary of Part 4

The controllers and routes together form the main request-processing layer.

```text
                   HTTP Request
                        |
                        v
                     Routes
                        |
                        v
                   Middleware
                        |
                        v
                   Controllers
                        |
            +-----------+-----------+
            |                       |
            v                       v
         Services                Models
            |                       |
            v                       v
     External APIs              MongoDB
            |                       |
            +-----------+-----------+
                        |
                        v
                    Response
```

# 79. Service Layer

The `src/service/` directory contains reusable business logic and integrations with external services.

Current service files:

```text id="m9s3s2"
src/
└── service/
    ├── chat.service.js
    ├── cloudinary.service.js
    ├── notification.service.js
    └── payment.service.js
```

The service layer exists to keep complex operations outside controllers.

The general architecture is:

```text id="n9xj6k"
Controller
    |
    v
Service
    |
    +----------+----------+
    |                     |
    v                     v
External Service        Model
```

For example:

```text id="t7zyz8"
payment.controller.js
        |
        v
payment.service.js
        |
        v
Razorpay
```

---

# 80. chat.service.js

`chat.service.js` contains reusable logic related to conversations and messages.

The controller or Socket.IO layer can use this service instead of directly writing all chat-related database operations.

Possible responsibilities include:

- Find existing conversation
- Create conversation
- Save message
- Retrieve conversation messages
- Retrieve recent conversations
- Update last message
- Mark messages as read

Possible functions:

```text id="cv8q0u"
findOrCreateConversation()
createMessage()
getMessages()
getConversations()
markMessagesAsRead()
updateLastMessage()
```

---

# 81. Conversation Creation

When User A wants to message User B, the application first checks whether a conversation already exists.

```text id="w6kq6v"
User A
   |
   v
Start Chat with User B
   |
   v
Find Existing Conversation
   |
   +---- Exists
   |       |
   |       v
   |    Use Conversation
   |
   +---- Does Not Exist
           |
           v
     Create Conversation
```

This prevents multiple conversations from being created between the same two users.

---

# 82. Message Creation

When a message is sent:

```text id="70ym4g"
Message
   |
   v
chat.service.js
   |
   v
Message.model.js
   |
   v
MongoDB
```

After saving the message, Socket.IO can deliver it to the recipient in real time.

```text id="13b4sa"
Sender
  |
  v
Socket.IO
  |
  v
Recipient
```

The message is stored first or as part of a controlled transaction flow so that the message does not disappear when the user refreshes the page.

---

# 83. cloudinary.service.js

`cloudinary.service.js` contains image-upload logic.

Cloudinary is used for storing user-generated images.

The application can use Cloudinary for:

- Profile pictures
- Cover pictures
- Post images
- Other future media

The upload architecture is:

```text id="q2w6qk"
Browser
   |
   v
Multer
   |
   v
Controller
   |
   v
cloudinary.service.js
   |
   v
Cloudinary
   |
   v
Secure Image URL
   |
   v
MongoDB
```

MongoDB stores the URL or public identifier of the image rather than storing the image itself.

---

# 84. Cloudinary Service Responsibilities

The service may provide functions such as:

```text id="n5gx9d"
uploadImage()
deleteImage()
replaceImage()
```

For example, when a user changes their profile picture:

```text id="j7c5xx"
Old Profile Picture
       |
       v
Delete Old Image
       |
       v
Upload New Image
       |
       v
Get Cloudinary URL
       |
       v
Update User
```

This keeps Cloudinary-specific code inside one location.

---

# 85. Why Cloudinary Logic Should Not Be Inside Controllers

A controller should not contain a large amount of Cloudinary SDK code.

Instead of:

```text id="9e1v2k"
Controller
 |
 +-- Configure Cloudinary
 +-- Upload File
 +-- Handle Cloudinary Response
 +-- Delete Old Image
 +-- Update Database
```

the preferred architecture is:

```text id="5p2i7j"
Controller
 |
 v
Cloudinary Service
 |
 +-- Upload
 +-- Delete
 +-- Replace
 |
 v
Cloudinary
```

This makes the upload functionality reusable.

---

# 86. notification.service.js

`notification.service.js` contains reusable notification-generation logic.

Other features can call this service whenever an event should generate a notification.

Examples:

```text id="u8k5y5"
Follow
Like
Comment
Reply
Repost
Mention
Donation
```

Instead of every controller manually creating notification documents, the notification service centralizes the process.

---

# 87. Notification Flow

For example, when User A likes User B's post:

```text id="6m8gq4"
User A
   |
   | Like
   v
post.controller.js
   |
   v
notification.service.js
   |
   v
Notification.model.js
   |
   v
MongoDB
   |
   v
User B
```

The notification may contain:

```text id="z9f47a"
sender
recipient
type
post
message
isRead
createdAt
```

---

# 88. Notification Types

The application can define notification types using constants.

Examples:

```text id="f9y7r1"
FOLLOW
LIKE
COMMENT
REPLY
REPOST
MENTION
DONATION
```

The actual notification message can then be generated based on the notification type.

For example:

```text id="3z1v4x"
FOLLOW
→ User A followed you

LIKE
→ User A liked your post

COMMENT
→ User A commented on your post

DONATION
→ User A donated to you
```

---

# 89. Preventing Unnecessary Notifications

The notification service can contain rules to prevent unwanted notifications.

For example:

A user should not receive a notification for liking their own post.

```text id="xk5t9c"
if sender === postOwner
    do not create notification
```

Similar rules can be applied to other actions.

This type of logic belongs in the notification/business layer rather than being duplicated across multiple controllers.

---

# 90. payment.service.js

`payment.service.js` contains Razorpay-related business logic.

Its responsibilities can include:

- Creating Razorpay orders
- Verifying Razorpay payments
- Generating verification signatures
- Processing payment information
- Returning payment results

Possible functions:

```text id="8u6s7d"
createOrder()
verifyPayment()
```

---

# 91. Razorpay Order Creation

When a user starts a donation:

```text id="9w0l8d"
Donation Form
      |
      v
payment.controller.js
      |
      v
payment.service.js
      |
      v
Razorpay
      |
      v
Create Order
      |
      v
Return Order ID
      |
      v
Frontend
```

The order amount should be created and controlled by the backend.

The frontend should not be trusted to decide the final payment amount without server-side validation.

---

# 92. Razorpay Payment Verification

After payment:

```text id="f8w1kx"
Razorpay
   |
   v
Payment Response
   |
   v
Backend
   |
   v
payment.service.js
   |
   v
Verify Signature
```

Only a valid signature should result in a successful payment state.

After successful verification:

```text id="x4d3h8"
Payment Verified
      |
      v
Payment Record
      |
      v
Donation Record
      |
      v
Notification
```

---

# 93. Service Layer Rule

Services should contain logic that is:

- Complex
- Reusable
- Related to external APIs
- Related to business operations
- Better kept outside controllers

Examples:

```text id="r2qv5c"
Cloudinary → cloudinary.service.js
Razorpay   → payment.service.js
Chat       → chat.service.js
Notification → notification.service.js
```

---

# 94. Socket Layer

The `src/sockets/` directory contains real-time communication logic.

Current structure:

```text id="j0qf0j"
src/
└── sockets/
    └── chat.socket.js
```

Socket.IO is used for real-time private messaging.

Normal HTTP requests are not ideal for instant message delivery.

Socket.IO provides a persistent connection between the browser and server.

---

# 95. chat.socket.js

`chat.socket.js` manages real-time chat events.

Possible responsibilities include:

- User connection
- User disconnection
- Joining conversation rooms
- Sending messages
- Receiving messages
- Broadcasting messages
- Typing indicators
- Online status
- Read status

---

# 96. Socket.IO Chat Architecture

The chat architecture can be represented as:

```text id="z4m4fz"
User A Browser
      |
      | Socket Connection
      v
   Socket.IO
      |
      v
Node.js Server
      |
      v
chat.socket.js
      |
      v
Socket.IO Room
      |
      v
User B Browser
```

---

# 97. Conversation Rooms

Each conversation can have its own Socket.IO room.

For example:

```text id="2y4f2k"
Conversation ID:
65abc123

Socket Room:
conversation:65abc123
```

Both participants join the same room.

```text id="u7yq9k"
User A
   |
   +-------------------+
                       |
                       v
             conversation:65abc123
                       ^
                       |
   +-------------------+
   |
User B
```

This allows messages to be delivered only to the appropriate conversation.

---

# 98. Sending a Message with Socket.IO

The process can be:

```text id="q6a2q6"
User A types message
       |
       v
chat.js
       |
       v
socket.emit("send-message")
       |
       v
chat.socket.js
       |
       v
chat.service.js
       |
       v
Save Message
       |
       v
socket.to(room).emit()
       |
       v
User B
```

This provides real-time communication.

---

# 99. Socket Events

The project can define events such as:

```text id="j6t6m4"
connection
disconnect

join-conversation
leave-conversation

send-message
receive-message

typing
stop-typing

message-read
```

The exact event names should remain consistent throughout the application.

---

# 100. Online Status

Socket.IO can also be used to maintain online status.

General flow:

```text id="d8u7d8"
User connects
     |
     v
Socket connection
     |
     v
Mark user online
```

When the user disconnects:

```text id="b8e4pg"
Socket disconnect
     |
     v
Mark user offline
```

The implementation should account for multiple browser tabs or devices so that a user is not incorrectly marked offline when only one connection closes.

---

# 101. src/utils/

The `src/utils/` directory contains small reusable helper functions and constants.

Current files:

```text id="g3g1bs"
src/
└── utils/
    ├── apiError.js
    ├── apiResponse.js
    ├── constant.js
    ├── formateDate.js
    └── generateUsername.js
```

Utilities should contain reusable functions that do not belong specifically to a controller or model.

---

# 102. apiError.js

`apiError.js` can provide a standardized application error class.

Instead of creating different error objects throughout the application, controllers and services can use one consistent error format.

Conceptually:

```text id="3b8i1e"
throw new ApiError(
    statusCode,
    message
)
```

Examples:

```text id="t5n0b8"
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
409 → Conflict
500 → Internal Server Error
```

The centralized error middleware can then process these errors.

---

# 103. apiResponse.js

`apiResponse.js` can provide a consistent response format for JSON-based requests.

For example:

```text id="p6f1tk"
{
    success: true,
    message: "...",
    data: {}
}
```

For an error:

```text id="4w2y6j"
{
    success: false,
    message: "..."
}
```

This is particularly useful for AJAX requests made by frontend JavaScript.

---

# 104. constant.js

`constant.js` stores values that are used repeatedly throughout the application.

Examples include:

```text id="y6o5aq"
USER_ROLES
NOTIFICATION_TYPES
PAYMENT_STATUS
MESSAGE_STATUS
POST_TYPES
```

For example:

```text id="9l8q8r"
NOTIFICATION_TYPES = {
    FOLLOW,
    LIKE,
    COMMENT,
    REPLY,
    REPOST,
    MENTION,
    DONATION
}
```

Centralizing constants prevents spelling differences and inconsistent values throughout the codebase.

---

# 105. formateDate.js

`formateDate.js` contains reusable date-formatting logic.

For example, MongoDB may store:

```text id="r4e2c8"
2026-11-01T15:30:00.000Z
```

The UI may display:

```text id="2x3e4f"
1 Nov 2026
```

or:

```text id="n9w6re"
2 hours ago
```

The exact display format can be decided during frontend implementation.

The helper prevents date formatting code from being duplicated across multiple EJS files.

---

# 106. generateUsername.js

`generateUsername.js` can generate or suggest a username when a user registers.

For example:

```text id="g7h2x0"
Display Name:
Rishabh Kumar

Possible Username:
@rishabhkumar
```

If the username already exists, the utility can generate another variation.

For example:

```text id="b6f7q1"
@rishabhkumar
@rishabhkumar01
@rishabhkumar123
```

The final username must still be checked against the database for uniqueness.

---

# 107. src/uploads/

The `src/uploads/` directory is reserved for temporary uploaded files if the selected Multer configuration uses disk storage.

Example:

```text id="r8j7r0"
src/
└── uploads/
    ├── temporary-image-1
    └── temporary-image-2
```

These files should not be treated as permanent application assets.

After uploading to Cloudinary, temporary files should be removed when disk storage is used.

The permanent image location is Cloudinary.

Therefore:

```text id="8r4e1w"
Temporary File
      |
      v
Cloudinary
      |
      v
Permanent Image
```

If memory storage or direct upload is used instead, this directory may remain empty.

---

# 108. Why Uploaded Images Are Not Stored in MongoDB

MongoDB should not store the actual image binary for this application.

Instead:

```text id="v3h8b0"
Image File
    |
    v
Cloudinary
    |
    v
Image URL
    |
    v
MongoDB
```

MongoDB stores something similar to:

```text id="7x1e9h"
profilePicture:
"https://res.cloudinary.com/..."
```

This keeps database documents smaller and allows Cloudinary to handle media storage and delivery.

---

# 109. External Service Architecture

The project uses separate services for external integrations.

```text id="m5g7j0"
                    Twitter Clone
                         |
        +----------------+----------------+
        |                |                |
        v                v                v
   Cloudinary         Razorpay        Socket.IO
        |                |                |
        v                v                v
     Images           Payments           Chat
```

Each integration has its own configuration and service layer.

---

# 110. Configuration vs Service

Configuration and service files have different responsibilities.

For Cloudinary:

```text id="1g0d4m"
cloudinary.config.js
        |
        | Configuration
        v
Cloudinary SDK

cloudinary.service.js
        |
        | Operations
        v
Upload / Delete / Replace
```

For Razorpay:

```text id="6b3p4x"
razorpay.config.js
        |
        | Configuration
        v
Razorpay SDK

payment.service.js
        |
        | Operations
        v
Create Order / Verify Payment
```

This separation makes the code easier to maintain.

---

# 111. Complete Backend Architecture

At this stage, the complete backend architecture can be represented as:

```text id="n4q0t5"
                           Browser
                              |
                              v
                           Routes
                              |
                              v
                         Middleware
                              |
                              v
                         Controllers
                              |
                +-------------+-------------+
                |             |             |
                v             v             v
             Services       Models        Utils
                |             |             |
                v             v             v
       External Services   MongoDB       Helpers
                |
       +--------+---------+
       |        |         |
       v        v         v
  Cloudinary Razorpay Socket.IO
```

This structure keeps responsibilities separated.

---

# 112. Example Complete Flow: Profile Picture

A profile picture upload demonstrates several layers working together.

```text id="u6s4m8"
Browser
   |
   | Multipart Form
   v
user.route.js
   |
   v
auth.middleware.js
   |
   v
upload.middleware.js
   |
   v
user.controller.js
   |
   v
cloudinary.service.js
   |
   v
Cloudinary
   |
   v
Image URL
   |
   v
User.model.js
   |
   v
MongoDB
   |
   v
Redirect to Profile
```

---

# 113. Example Complete Flow: Notification

```text id="c8m8f3"
User A likes Post
       |
       v
post.controller.js
       |
       v
Like.model.js
       |
       v
MongoDB
       |
       v
notification.service.js
       |
       v
Notification.model.js
       |
       v
MongoDB
       |
       v
User B Notification Page
```

---

# 114. Example Complete Flow: Real-Time Message

```text id="1h0p3s"
User A
  |
  v
chat.js
  |
  v
Socket.IO
  |
  v
chat.socket.js
  |
  v
chat.service.js
  |
  v
Message.model.js
  |
  v
MongoDB
  |
  v
Socket.IO
  |
  v
User B
```

The message is therefore both persisted and delivered in real time.

---

# 115. Example Complete Flow: Donation

```text id="m0q7y2"
User A
  |
  v
Donation Form
  |
  v
payment.controller.js
  |
  v
payment.service.js
  |
  v
Razorpay
  |
  v
Payment
  |
  v
Backend Verification
  |
  +----------+
  |          |
  v          v
Payment    Donation
Model      Model
  |          |
  +-----+----+
        |
        v
Notification Service
        |
        v
Notification Model
        |
        v
User B
```

---

# 116. Responsibility Summary

The backend responsibilities can now be summarized as:

| Layer | Responsibility |
|---|---|
| Routes | Define application endpoints |
| Middleware | Authenticate, validate, upload, handle errors |
| Controllers | Process requests and responses |
| Services | Business logic and external integrations |
| Models | MongoDB schemas and database relationships |
| Config | External service configuration |
| Utils | Reusable helper functions |
| Sockets | Real-time communication |
| Uploads | Temporary upload storage |

---

# 117. Architectural Principle

The main principle of the backend is:

```text id="0w6w9u"
One Layer = One Responsibility
```

For example:

```text id="a9v3kf"
Do not:

Controller
   |
   +-- Validate request
   +-- Upload image
   +-- Configure Cloudinary
   +-- Write database query
   +-- Create notification
   +-- Send payment
   +-- Format response
```

Instead:

```text id="6u8f4d"
Controller
   |
   +-- Middleware handles validation
   |
   +-- Service handles Cloudinary
   |
   +-- Model handles database
   |
   +-- Notification Service handles notification
   |
   +-- Controller sends response
```

This keeps the project maintainable as the feature count increases.

---

# 118. Summary of Part 5

The service, socket, utility, and upload layers provide the reusable infrastructure of the application.

```text id="q3x5s7"
src/
│
├── service/
│   ├── chat.service.js
│   ├── cloudinary.service.js
│   ├── notification.service.js
│   └── payment.service.js
│
├── sockets/
│   └── chat.socket.js
│
├── utils/
│   ├── apiError.js
│   ├── apiResponse.js
│   ├── constant.js
│   ├── formateDate.js
│   └── generateUsername.js
│
└── uploads/
        Temporary upload files if required
```

# 119. Views Layer

The `views/` directory contains all EJS templates used to generate the application's frontend pages.

The application uses EJS because the frontend is server-rendered by Express.

The views are organized into layouts, reusable partials, and feature-specific pages.

The complete structure is:

```text id="6e7v2d"
views/
│
├── layouts/
│   ├── boilerplate.ejs
│   ├── auth-layout.ejs
│   └── error-layout.ejs
│
├── partials/
│   ├── header.ejs
│   ├── navbar.ejs
│   ├── sidebar.ejs
│   ├── rightbar.ejs
│   ├── footer.ejs
│   ├── flash.ejs
│   ├── post-card.ejs
│   ├── comment-card.ejs
│   ├── user-card.ejs
│   ├── notification-card.ejs
│   ├── message-card.ejs
│   └── modals/
│       ├── create-post.ejs
│       ├── edit-post.ejs
│       ├── delete-post.ejs
│       ├── edit-profile.ejs
│       ├── donate.ejs
│       └── confirm.ejs
│
├── auth/
│   ├── login.ejs
│   ├── register.ejs
│   └── forgot-password.ejs
│
├── home/
│   └── home.ejs
│
├── post/
│   ├── details.ejs
│   └── edit.ejs
│
├── profile/
│   ├── profile.ejs
│   └── edit-profile.ejs
│
├── explore/
│   └── explore.ejs
│
├── notifications/
│   └── notifications.ejs
│
├── messages/
│   ├── messages.ejs
│   └── conversation.ejs
│
├── bookmarks/
│   └── bookmarks.ejs
│
├── followers/
│   ├── followers.ejs
│   └── following.ejs
│
├── donation/
│   ├── donate.ejs
│   ├── success.ejs
│   └── failed.ejs
│
├── settings/
│   ├── settings.ejs
│   ├── account.ejs
│   ├── privacy.ejs
│   └── password.ejs
│
└── error/
    ├── 404.ejs
    └── 500.ejs
```

---

# 120. EJS Rendering Architecture

The basic server-rendered page flow is:

```text id="9a4r3c"
Browser
   |
   | HTTP Request
   v
Route
   |
   v
Controller
   |
   v
MongoDB
   |
   v
Controller receives data
   |
   v
EJS View
   |
   v
HTML
   |
   v
Browser
```

For example:

```text id="c7y0m8"
GET /home
   |
   v
home.controller.js
   |
   v
Get Posts
   |
   v
home.ejs
   |
   v
HTML Response
```

---

# 121. Layouts

The `views/layouts/` directory contains common page structures.

```text id="v9x3t4"
views/
└── layouts/
    ├── boilerplate.ejs
    ├── auth-layout.ejs
    └── error-layout.ejs
```

Layouts prevent the same HTML structure from being duplicated across many pages.

---

# 122. boilerplate.ejs

`boilerplate.ejs` is the primary layout for authenticated application pages.

It can contain the common HTML structure:

```text id="9b5r7a"
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>

    <body>
        Navbar
        Main Content
        Footer
    </body>
</html>
```

Pages such as:

- Home
- Profile
- Explore
- Notifications
- Bookmarks
- Messages

can use the main application layout.

The layout may include:

- Bootstrap
- Custom CSS
- Bootstrap JavaScript
- Application JavaScript
- Favicon
- Common metadata

---

# 123. auth-layout.ejs

`auth-layout.ejs` is intended for authentication pages.

Authentication pages usually have a different design from the main application.

It can be used by:

```text id="q8qv1g"
login.ejs
register.ejs
forgot-password.ejs
```

The layout can provide:

- Logo
- Authentication container
- Authentication background
- Common CSS
- Footer information

---

# 124. error-layout.ejs

`error-layout.ejs` provides a common structure for error pages.

It can be used by:

```text id="j4h1e9"
404.ejs
500.ejs
```

The purpose is to keep error-page design consistent.

---

# 125. Partials

The `views/partials/` directory contains reusable EJS components.

```text id="c9j6s8"
views/
└── partials/
    ├── header.ejs
    ├── navbar.ejs
    ├── sidebar.ejs
    ├── rightbar.ejs
    ├── footer.ejs
    ├── flash.ejs
    ├── post-card.ejs
    ├── comment-card.ejs
    ├── user-card.ejs
    ├── notification-card.ejs
    └── message-card.ejs
```

A partial should represent a reusable piece of the interface.

Instead of writing the same post HTML in five different pages, the application can render one reusable post card.

---

# 126. header.ejs

`header.ejs` contains common HTML elements that belong inside the `<head>` section.

It can contain:

- Meta tags
- Page title
- Bootstrap CSS
- Custom CSS
- Favicon
- Common stylesheets

This prevents every page from repeating the same `<head>` configuration.

---

# 127. navbar.ejs

`navbar.ejs` contains the main application navigation.

It can include:

```text id="z5v5k8"
Logo
Home
Explore
Notifications
Messages
Bookmarks
Profile
Settings
Search
User Menu
Logout
```

The navbar should be responsive.

Bootstrap's responsive navbar and offcanvas components can be used for smaller screens.

---

# 128. sidebar.ejs

`sidebar.ejs` contains the left-side navigation or user menu.

For desktop screens it can appear as:

```text id="l4g3a0"
+------------------+
| Logo             |
| Home             |
| Explore          |
| Notifications    |
| Messages         |
| Bookmarks        |
| Profile          |
| Settings         |
+------------------+
```

On mobile devices, the sidebar can be converted into an offcanvas menu.

---

# 129. rightbar.ejs

`rightbar.ejs` contains additional information on the right side of the application.

It can display:

- Search
- Trending topics
- Suggested users
- Popular posts
- Donation-related information

The right sidebar is primarily intended for larger screens.

On mobile devices it can be hidden or moved into another section.

---

# 130. footer.ejs

`footer.ejs` contains the common footer.

It may include:

- Copyright information
- About link
- Privacy
- Terms
- Contact
- GitHub/project information

The footer should remain simple and reusable.

---

# 131. flash.ejs

`flash.ejs` displays temporary messages to users.

Examples include:

```text id="d5f3n9"
Login successful
Post created successfully
Profile updated
Invalid password
Payment failed
User followed
```

Flash messages are useful after redirects.

Typical flow:

```text id="x3s8w5"
Controller
   |
   v
Set Flash Message
   |
   v
Redirect
   |
   v
flash.ejs
   |
   v
Display Message
```

Bootstrap alerts or toasts can be used for the visual implementation.

---

# 132. post-card.ejs

`post-card.ejs` is one of the most important reusable components.

It represents a single post.

A post card can contain:

```text id="6w7k4x"
Profile Picture
Display Name
Username
Timestamp
Post Content
Post Image
Reply
Like
Repost
Quote
Share
Bookmark
More Menu
```

Conceptually:

```text id="8v4j6x"
+--------------------------------+
| Profile  Name       @username  |
|          timestamp             |
|                                |
| Post content...                |
|                                |
|        Post Image              |
|                                |
| Reply Like Repost Share Save   |
+--------------------------------+
```

The same component can be reused on:

- Home
- Profile
- Explore
- Search
- Post details
- Bookmarks

---

# 133. comment-card.ejs

`comment-card.ejs` displays an individual comment.

It can include:

```text id="n6s8b4"
Profile Picture
Username
Comment
Timestamp
Like
Reply
Delete/Edit
```

Nested replies can be rendered beneath the parent comment.

---

# 134. user-card.ejs

`user-card.ejs` represents a user in lists.

It can be reused in:

- Search results
- Followers
- Following
- Suggested users
- Explore

Example structure:

```text id="7x3y6m"
+--------------------------------+
| Profile | Name                 |
|         | @username            |
|         | Bio                  |
|         | [Follow]             |
+--------------------------------+
```

The Follow button can dynamically change depending on the relationship with the current user.

---

# 135. notification-card.ejs

`notification-card.ejs` displays one notification.

For example:

```text id="4q7y2v"
Profile Picture
User A liked your post
2 minutes ago
```

The component can change its content based on notification type.

---

# 136. message-card.ejs

`message-card.ejs` displays an individual message in a conversation.

It can contain:

```text id="7q2k9x"
Message Text
Timestamp
Read Status
```

The message appearance can differ depending on whether the message belongs to:

```text id="e4s9q1"
Current User
```

or:

```text id="8j6x0p"
Other User
```

For example:

```text id="3n0j4h"
                 +----------------+
                 | Hello!          |
                 | 10:30 PM        |
                 +----------------+

+----------------+
| Hi, how are you|
| 10:31 PM       |
+----------------+
```

---

# 137. Modals

The `partials/modals/` directory contains reusable Bootstrap modal components.

```text id="0g8h1e"
modals/
├── create-post.ejs
├── edit-post.ejs
├── delete-post.ejs
├── edit-profile.ejs
├── donate.ejs
└── confirm.ejs
```

---

# 138. create-post.ejs

The create-post modal allows users to create a new post without leaving the current page.

It can contain:

```text id="t5u7n3"
Textarea
Image Upload
Character Count
Post Button
Cancel Button
```

The form submits to the post creation endpoint.

---

# 139. edit-post.ejs

The edit-post modal allows users to modify an existing post.

The existing content is loaded into the form.

The request can use:

```text id="7h9y3v"
PATCH /posts/:id
```

If HTML forms are used for PATCH requests, `method-override` can be used.

---

# 140. delete-post.ejs

This modal confirms whether the user wants to delete a post.

The purpose is to prevent accidental deletion.

Example flow:

```text id="g3d9r2"
Delete Button
    |
    v
Confirmation Modal
    |
    +---- Cancel
    |
    +---- Delete
             |
             v
       DELETE /posts/:id
```

---

# 141. edit-profile.ejs

The profile editing modal or form can allow users to update:

- Display name
- Username
- Bio
- Date of birth
- Location
- Website
- Profile picture
- Cover image

Sensitive account operations such as password changes can remain inside the Settings section.

---

# 142. donate.ejs

The donation modal collects donation information.

It can contain:

```text id="6x0v5p"
Receiver
Amount
Currency
Message
Donate Button
```

The frontend then requests a Razorpay order from the backend.

The payment process should not be completed solely on the client.

---

# 143. confirm.ejs

`confirm.ejs` is a generic confirmation modal.

It can be reused for operations such as:

- Delete post
- Unfollow user
- Delete comment
- Remove bookmark
- Logout

This reduces duplicated modal HTML.

---

# 144. Authentication Pages

The `views/auth/` directory contains authentication-related pages.

```text id="3n9d4c"
auth/
├── login.ejs
├── register.ejs
└── forgot-password.ejs
```

---

# 145. login.ejs

`login.ejs` contains the login form.

Possible fields:

```text id="1k4g8d"
Email / Username
Password
Remember Me
Login
Forgot Password
Register
```

The form sends the credentials to the authentication endpoint.

---

# 146. register.ejs

`register.ejs` contains the registration form.

Possible fields:

```text id="m8y5g7"
Display Name
Username
Email
Password
Confirm Password
Date of Birth
```

The backend performs final validation before creating the user.

---

# 147. forgot-password.ejs

`forgot-password.ejs` handles password recovery.

The exact implementation can later use an email service if password reset by email is required.

For the first functional version, the authentication architecture can be completed before adding an email provider.

---

# 148. Home Page

The `views/home/` directory contains the main feed.

```text id="8j6x5c"
home/
└── home.ejs
```

The home page can be divided into:

```text id="z3s4m9"
Navbar
   |
Main Layout
   |
   +----------+----------+
   |                     |
 Sidebar                Rightbar
   |
   v
Feed
   |
   v
Post Cards
```

---

# 149. home.ejs

`home.ejs` is the main authenticated landing page.

It can include:

- Navbar
- Sidebar
- Post composer
- Feed
- Right sidebar
- Trending
- Suggested users

Posts are rendered using:

```text id="0j9y4a"
post-card.ejs
```

This keeps the home page clean.

---

# 150. Post Pages

The `views/post/` directory contains:

```text id="x4f6n1"
post/
├── details.ejs
└── edit.ejs
```

---

# 151. details.ejs

`details.ejs` displays an individual post.

It can contain:

- Full post
- Author information
- Likes
- Comments
- Replies
- Reposts
- Related information

The comments can reuse:

```text id="6y8x1f"
comment-card.ejs
```

---

# 152. edit.ejs

`edit.ejs` provides a full-page editing interface for a post.

The project can use either:

- A dedicated edit page
- Edit modal

The edit page exists as a fallback and provides a clear route for editing posts.

---

# 153. Profile Pages

The `views/profile/` directory contains:

```text id="q8s2c4"
profile/
├── profile.ejs
└── edit-profile.ejs
```

---

# 154. profile.ejs

The profile page can contain:

```text id="h7f3m2"
Cover Image
      |
Profile Picture
      |
Name
Username
Bio
Location
Website
Joined Date
Followers
Following
Follow Button
Edit Profile
      |
Profile Tabs
      |
Posts / Replies / Media / Likes
```

The page can reuse:

```text id="k5s8d2"
post-card.ejs
```

to display the user's posts.

---

# 155. edit-profile.ejs

The full-page profile editor allows the user to modify profile information.

Possible sections:

```text id="2g6p7r"
Basic Information
Profile Image
Cover Image
Bio
Location
Website
Date of Birth
```

---

# 156. Explore Page

The `views/explore/` directory contains:

```text id="w7m1k3"
explore/
└── explore.ejs
```

The Explore page can provide:

- Search
- Trending hashtags
- Popular posts
- Suggested users
- Recent posts

The search system can later be expanded with filters.

---

# 157. Notifications

The notification page is:

```text id="q4j9m8"
notifications/
└── notifications.ejs
```

It displays notification cards using:

```text id="3k7d1x"
notification-card.ejs
```

Possible sections include:

```text id="g8m4x1"
All
Mentions
Likes
Follows
Donations
```

The notification count can also be shown in the navbar.

---

# 158. Messages

The messages section contains:

```text id="z8x4q7"
messages/
├── messages.ejs
└── conversation.ejs
```

---

# 159. messages.ejs

`messages.ejs` displays the user's conversation list.

It can show:

```text id="0c8y3n"
Search Messages

User A
Last message
2 min ago

User B
Last message
10 min ago
```

Each conversation can be opened to:

```text id="k7m3s4"
/messages/:conversationId
```

---

# 160. conversation.ejs

`conversation.ejs` displays the actual chat interface.

It can contain:

```text id="y3x9k2"
Chat Header
      |
Message Area
      |
Message Input
      |
Send Button
```

Messages can be rendered using:

```text id="5x7c1v"
message-card.ejs
```

Socket.IO then updates the message area in real time.

---

# 161. Bookmarks

The bookmarks page is:

```text id="n4k7p1"
bookmarks/
└── bookmarks.ejs
```

It displays posts saved by the current user.

The same:

```text id="e5c2q8"
post-card.ejs
```

component can be reused.

---

# 162. Followers and Following

The `followers/` directory contains:

```text id="a8y3f6"
followers/
├── followers.ejs
└── following.ejs
```

Both pages can reuse:

```text id="4x6m9s"
user-card.ejs
```

This provides a consistent user-list interface.

---

# 163. Donation Pages

The donation directory contains:

```text id="c5y8j2"
donation/
├── donate.ejs
├── success.ejs
└── failed.ejs
```

---

# 164. donate.ejs

The donation page can contain:

- Receiver information
- Donation amount
- Message
- Razorpay checkout initiation

The actual payment should always be initiated through a backend-generated order.

---

# 165. success.ejs

`success.ejs` is displayed after a verified successful donation.

It can show:

```text id="2r5v8c"
Payment Successful
Donation Completed
Transaction Information
Return to Profile
```

The success page should not be treated as proof of payment by itself.

The backend should already have verified the payment.

---

# 166. failed.ejs

`failed.ejs` displays a payment failure or cancellation result.

It can provide:

- Error message
- Retry option
- Return to profile
- Return to home

---

# 167. Settings

The settings directory contains:

```text id="j6k3s0"
settings/
├── settings.ejs
├── account.ejs
├── privacy.ejs
└── password.ejs
```

---

# 168. settings.ejs

`settings.ejs` can act as the main settings page.

It can provide navigation to:

```text id="x8y4m6"
Account
Privacy
Password
Appearance
Logout
```

---

# 169. account.ejs

`account.ejs` contains account-level settings.

Possible operations:

- Change email
- Change username
- Account information
- Deactivate account
- Delete account

Sensitive operations should require authentication or password confirmation.

---

# 170. privacy.ejs

`privacy.ejs` contains privacy-related settings.

Possible future features include:

- Private account
- Message permissions
- Mention permissions
- Follow permissions

The initial implementation can keep privacy settings simple and expand later.

---

# 171. password.ejs

`password.ejs` handles password changes.

A secure password change should require:

```text id="n3f7m1"
Current Password
New Password
Confirm New Password
```

The backend should verify the current password before changing it.

---

# 172. Error Pages

The error directory contains:

```text id="s4y7c8"
error/
├── 404.ejs
└── 500.ejs
```

---

# 173. 404.ejs

`404.ejs` is displayed when a requested page does not exist.

Example:

```text id="m2q8r5"
GET /something-that-does-not-exist
```

The application can display:

```text id="j7x4p1"
404
Page Not Found

The page you requested does not exist.

[Go Home]
```

---

# 174. 500.ejs

`500.ejs` is displayed when an unexpected server-side error occurs.

The page should not expose internal stack traces or sensitive implementation details.

Instead, it should provide a user-friendly message and navigation back to the application.

---

# 175. Bootstrap Integration

Bootstrap is used throughout the EJS frontend.

It can provide:

- Grid system
- Navbar
- Cards
- Buttons
- Forms
- Modals
- Dropdowns
- Alerts
- Toasts
- Offcanvas
- Responsive utilities

The main application layout can load Bootstrap once so that individual pages do not need to repeatedly include it.

---

# 176. Responsive Layout

The main application layout can use Bootstrap's responsive grid.

Conceptually:

```text id="n7s2m6"
Desktop

+---------+----------------------+------------+
| Sidebar |        Feed          |  Rightbar  |
+---------+----------------------+------------+
```

On smaller screens:

```text id="x4d8q3"
Mobile

+--------------------------------+
| Navbar                         |
+--------------------------------+
| Feed                           |
|                                |
| Post                           |
|                                |
| Post                           |
+--------------------------------+
```

The sidebar can become an offcanvas menu.

The right sidebar can be hidden or moved below the feed.

---

# 177. EJS Data Flow

Controllers send data to EJS views.

For example:

```text id="f3x8m2"
post.controller.js
       |
       v
res.render("home/home", {
    posts,
    user
})
       |
       v
home.ejs
```

Inside EJS, the supplied variables can be used to render dynamic HTML.

For example:

```text id="w8j4s7"
posts
user
notifications
```

The exact variables should remain consistent between controllers and views.

---

# 178. Reusable Component Architecture

The frontend avoids duplicating HTML wherever possible.

For example:

```text id="q9s5c1"
Home
 |
 +── post-card.ejs
 |
 +── user-card.ejs
 |
 +── notification-card.ejs

Profile
 |
 +── post-card.ejs
 |
 +── user-card.ejs

Explore
 |
 +── post-card.ejs
 |
 +── user-card.ejs

Bookmarks
 |
 +── post-card.ejs
```

This means a design change to `post-card.ejs` automatically affects all pages using that component.

---

# 179. Complete View Architecture

The complete EJS structure can be represented as:

```text id="a5r7w2"
                    Layout
                      |
          +-----------+-----------+
          |           |           |
        Header      Navbar      Footer
                      |
                      v
                    Page
                      |
          +-----------+-----------+
          |           |           |
       Sidebar      Content    Rightbar
                      |
             +--------+--------+
             |        |        |
            Post    User    Notification
            Card    Card       Card
```

This creates a modular frontend.

---

# 180. Complete Page Request Example

For the home page:

```text id="g8y5v2"
GET /home
    |
    v
home route
    |
    v
Authentication Middleware
    |
    v
Home Controller
    |
    +---- User Data
    |
    +---- Feed Data
    |
    +---- Notifications
    |
    v
home.ejs
    |
    +---- navbar.ejs
    +---- sidebar.ejs
    +---- post-card.ejs
    +---- rightbar.ejs
    +---- footer.ejs
    |
    v
HTML
    |
    v
Browser
```

---

# 181. Frontend Interaction Flow

Not every action needs a complete page reload.

For actions such as:

```text id="c6q8s3"
Like
Follow
Bookmark
Comment
Send Message
Mark Notification Read
```

frontend JavaScript can send asynchronous requests.

Example:

```text id="w2x7j5"
User clicks Like
      |
      v
post.js
      |
      v
fetch()
      |
      v
POST /posts/:id/like
      |
      v
Controller
      |
      v
MongoDB
      |
      v
JSON Response
      |
      v
Update Button
```

This gives the application a more dynamic user experience while still using EJS.

---

# 182. EJS + JavaScript Architecture

The project therefore combines server-side rendering and client-side JavaScript.

```text id="s7d3k1"
EJS
 |
 | Initial Page
 v
HTML
 |
 v
Browser
 |
 +---- JavaScript
 |       |
 |       v
 |    Dynamic Actions
 |
 +---- Socket.IO
         |
         v
    Real-Time Updates
```

This approach provides many SPA-like interactions without requiring React.

---

# 183. View Responsibility Rule

Views should primarily handle presentation.

They should not contain:

- Database queries
- Password hashing
- Payment verification
- Cloudinary operations
- Complex business logic

Instead:

```text id="m5w9r1"
Controller
   |
   | Data
   v
EJS View
   |
   | Presentation
   v
HTML
```

This keeps the frontend templates easier to maintain.

---

# 184. Summary of Part 6

The `views/` directory provides the complete server-rendered frontend architecture.

```text id="y5m7x4"
views/
│
├── layouts/
│       Common page structures
│
├── partials/
│       Reusable UI components
│
├── auth/
│       Authentication pages
│
├── home/
│       Main feed
│
├── post/
│       Post pages
│
├── profile/
│       User profile pages
│
├── explore/
│       Search and discovery
│
├── notifications/
│       Notifications
│
├── messages/
│       Chat interface
│
├── bookmarks/
│       Saved posts
│
├── followers/
│       Followers/following
│
├── donation/
│       Donation/payment pages
│
├── settings/
│       Account and privacy settings
│
└── error/
        Error pages
```

# 185. Application Initialization

The application starts from the root-level `app.js` file.

The purpose of the initialization process is to prepare all required application components before handling user requests.

The startup flow is:

```text
Application Start
       |
       v
Load Environment Variables
       |
       v
Create Express Application
       |
       v
Connect MongoDB
       |
       v
Configure EJS
       |
       v
Configure Session
       |
       v
Configure Middleware
       |
       v
Configure Static Files
       |
       v
Mount Routes
       |
       v
Configure Error Handling
       |
       v
Start Server
```

---

# 186. Environment Variables

Environment variables contain configuration values that should not be hard-coded into the application.

The project should use a `.env` file during local development.

Example:

```text id="3q4j8x"
PORT=3000

MONGODB_URI=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

The actual secret values must never be committed to GitHub.

---

# 187. dotenv

The `dotenv` package loads variables from `.env` into `process.env`.

Conceptually:

```text id="8q5c2f"
.env
 |
 v
dotenv
 |
 v
process.env
 |
 +---- MONGODB_URI
 +---- SESSION_SECRET
 +---- CLOUDINARY credentials
 +---- RAZORPAY credentials
```

Application configuration files can then access these values.

---

# 188. MongoDB Connection

The database connection is handled by:

```text id="0d7w6q"
src/config/db.config.js
```

The application should establish a database connection before handling important requests.

General flow:

```text id="m3p8z1"
app.js
   |
   v
db.config.js
   |
   v
Mongoose
   |
   v
MongoDB
```

If the database connection fails, the application should handle the error appropriately instead of silently continuing as if the database were available.

---

# 189. EJS Configuration

Express must be configured to use EJS as its view engine.

The application also needs to know where the views are located.

Conceptually:

```text id="5g8r3v"
Express
   |
   v
EJS View Engine
   |
   v
views/
```

A controller can then render a page using a view path.

Example:

```text id="f7m1d4"
res.render("home/home")
```

The corresponding file is:

```text id="9c6v2a"
views/home/home.ejs
```

---

# 190. Static Files

Express serves the `public/` directory as a static directory.

The relationship is:

```text id="h8n3y7"
public/
 |
 +── css/
 +── js/
 +── images/
 |
 v
Browser
```

For example:

```text id="a4v7m9"
public/css/style.css
```

is exposed to the browser as a public static resource.

The backend source code under `src/` should not be exposed as a static directory.

---

# 191. Middleware Registration Order

Middleware order is extremely important in Express.

A simplified order for the application is:

```text id="u2s6k8"
1. Environment Configuration
        |
2. Express Application
        |
3. Body Parsers
        |
4. Static Files
        |
5. Session
        |
6. Flash Messages
        |
7. Authentication State
        |
8. Application Routes
        |
9. 404 Handler
        |
10. Error Handler
```

Middleware should be registered before the routes that depend on it.

---

# 192. Body Parsing

The application needs to parse incoming request data.

For JSON requests:

```text id="7k4d2s"
application/json
```

For standard HTML forms:

```text id="q9m6p1"
application/x-www-form-urlencoded
```

Express middleware can parse these requests before they reach controllers.

For image uploads, Multer handles:

```text id="b5v8n3"
multipart/form-data
```

---

# 193. Session Management

The application uses sessions to maintain authentication state.

The basic concept is:

```text id="w4c7y1"
User Login
    |
    v
Create Session
    |
    v
Session ID
    |
    v
Browser Cookie
```

On future requests:

```text id="e8x5q2"
Browser
   |
   | Session Cookie
   v
Express
   |
   v
Session Store
   |
   v
Authenticated User
```

---

# 194. MongoDB Session Store

For production-oriented session management, sessions can be stored in MongoDB using a package such as `connect-mongo`.

The architecture becomes:

```text id="n7k4m2"
Browser
   |
   | Session Cookie
   v
Express Session
   |
   v
MongoDB Session Store
```

This prevents the application from relying on in-memory sessions.

---

# 195. Authentication State

After a user logs in successfully, the application can store the user's ID in the session.

Conceptually:

```text id="h2f8q4"
session.userId = user._id
```

Then the authentication middleware can use this value to identify the current user.

```text id="r5m3x7"
Request
   |
   v
Session
   |
   v
userId
   |
   v
User.model.js
   |
   v
Current User
```

---

# 196. Why Sessions Are Used

The application does not need to send a username and password with every request.

Instead:

```text id="j6q9s2"
Login Once
    |
    v
Session Created
    |
    v
Session Cookie
    |
    v
Authenticated Requests
```

The password is only required during authentication or sensitive password-change operations.

---

# 197. Flash Messages

Flash messages are temporary messages stored in the session.

Example:

```text id="q5v7m3"
POST /auth/login
       |
       v
Login Successful
       |
       v
Set Flash Message
       |
       v
Redirect /home
       |
       v
Display Message
```

Typical messages include:

```text id="e3c6r8"
Login successful.
Profile updated successfully.
Post created successfully.
Invalid credentials.
Payment failed.
```

---

# 198. Authentication Middleware Placement

Authentication middleware depends on the session.

Therefore the order should be conceptually:

```text id="g4x9k1"
Session Middleware
       |
       v
Authentication State
       |
       v
Routes
```

The authentication middleware can then determine whether a user is logged in.

---

# 199. Route Mounting

The individual route files are mounted inside `app.js`.

Conceptually:

```text id="u5s7d3"
app.js
 |
 +── /auth
 |
 +── /users
 |
 +── /posts
 |
 +── /comments
 |
 +── /bookmarks
 |
 +── /notifications
 |
 +── /messages
 |
 +── /payments
```

This keeps route definitions organized.

For example:

```text id="a7f5k2"
/auth
    |
    +── /login
    +── /register
    +── /logout
```

and:

```text id="r9m3x5"
/posts
    |
    +── /
    +── /:id
    +── /:id/like
    +── /:id/repost
```

---

# 200. Route Prefixes

Route prefixes provide a clean URL structure.

A possible structure is:

```text id="t3n7c6"
Prefix             Responsibility

/auth               Authentication
/users              Users and profiles
/posts              Posts
/comments           Comments
/follows            Follow relationships
/bookmarks          Bookmarks
/notifications      Notifications
/messages           Chat
/payments           Payments
```

The exact prefixes can be changed if required, but consistency should be maintained.

---

# 201. Home Route

The home page can be handled separately because it is the main application page.

Possible route:

```text id="c8x4m7"
GET /
```

or:

```text id="f6q9r2"
GET /home
```

The controller retrieves the required data and renders:

```text id="m7y2v5"
views/home/home.ejs
```

---

# 202. Authentication-Protected Routes

Most application features should require authentication.

Examples:

```text id="z5n8p3"
POST /posts
POST /posts/:id/like
POST /users/:id/follow
GET  /bookmarks
GET  /messages
POST /payments/create-order
```

The general structure is:

```text id="q2k6x8"
Route
  |
  v
authMiddleware
  |
  +---- Not Logged In → Login
  |
  +---- Logged In → Controller
```

---

# 203. Public Routes

Some pages can remain public.

Examples may include:

```text id="x7f3c9"
GET /auth/login
GET /auth/register
GET /users/:username
GET /posts/:id
```

The exact public/private policy can be adjusted depending on the final application requirements.

---

# 204. Method Override

HTML forms traditionally support:

```text id="5m7n2q"
GET
POST
```

However, REST-style APIs may require:

```text id="a4x8k3"
PATCH
DELETE
```

For form-based PATCH and DELETE requests, `method-override` can be used.

Example conceptual flow:

```text id="c7p5w2"
HTML Form
   |
   | POST
   | _method=PATCH
   v
method-override
   |
   v
PATCH Request
   |
   v
Controller
```

This is useful for operations such as:

```text id="x8q4n1"
Edit Post
Delete Post
Edit Profile
Edit Comment
```

---

# 205. Validation Flow

Validation should occur before database operations.

For example, when creating a post:

```text id="w9k3p6"
Request
   |
   v
Validation Middleware
   |
   +---- Invalid
   |       |
   |       v
   |     Error
   |
   +---- Valid
           |
           v
       Controller
           |
           v
       MongoDB
```

This protects the database from invalid input.

---

# 206. Authorization vs Authentication

Authentication and authorization are different.

Authentication asks:

> Who is the user?

Authorization asks:

> Is this user allowed to perform this operation?

For example:

```text id="y8m2q4"
Authentication
    |
    v
User is logged in
```

but:

```text id="r7f5n1"
Authorization
    |
    v
Does this user own the post?
```

A logged-in user should not be allowed to edit another user's post.

---

# 207. Resource Ownership

For operations such as edit and delete, the controller should verify ownership.

Example:

```text id="d5k9s2"
User A
   |
   | DELETE /posts/123
   v
Find Post 123
   |
   v
Check post.author
   |
   +---- User A → Allowed
   |
   +---- User B → Forbidden
```

This is an important security requirement.

---

# 208. Error Handling Order

The 404 handler should run after all valid routes.

The general order is:

```text id="q6y4m8"
Routes
   |
   v
No Route Matched?
   |
   v
404 Handler
   |
   v
Error Handler
```

The error handler should be registered last.

This allows application errors to be passed to a centralized handler.

---

# 209. 404 Handling

If a user visits:

```text id="p4c8x7"
/this-page-does-not-exist
```

and no route matches it, the application should render:

```text id="k7n3m5"
views/error/404.ejs
```

This is different from a server-side error.

A missing page is normally a 404 error.

---

# 210. 500 Error Handling

Unexpected application errors should reach:

```text id="z3v8q1"
errorHandler.middleware.js
```

The middleware can determine whether the request expects:

```text id="x9c6m4"
HTML
```

or:

```text id="r5k7p2"
JSON
```

and return the appropriate response.

---

# 211. API vs EJS Responses

This application uses both HTML responses and JSON responses.

For normal pages:

```text id="j8w3m6"
GET /profile
       |
       v
res.render()
       |
       v
HTML
```

For dynamic actions:

```text id="f2q7n5"
POST /posts/:id/like
       |
       v
res.json()
       |
       v
JavaScript
       |
       v
Update UI
```

This hybrid architecture is one of the major advantages of using EJS with frontend JavaScript.

---

# 212. Complete Like Request

A like action demonstrates the hybrid architecture.

```text id="c4n8x2"
User clicks Like
       |
       v
post.js
       |
       v
fetch()
       |
       v
POST /posts/:id/like
       |
       v
auth.middleware.js
       |
       v
post.controller.js
       |
       v
Like.model.js
       |
       v
MongoDB
       |
       v
notification.service.js
       |
       v
JSON Response
       |
       v
post.js
       |
       v
Update Like Count
```

The page does not need to reload.

---

# 213. Complete Page Request

A normal page request works differently.

For example:

```text id="j7q4v9"
GET /profile/rishabh
       |
       v
user.route.js
       |
       v
auth.middleware.js
       |
       v
user.controller.js
       |
       +---- User.model.js
       |
       +---- Post.model.js
       |
       v
profile.ejs
       |
       v
HTML Response
       |
       v
Browser
```

---

# 214. Complete Application Architecture

The complete application can now be represented as:

```text id="h7p5x2"
                           Browser
                              |
                +-------------+-------------+
                |                           |
             Page Request              Dynamic Action
                |                           |
                v                           v
              Route                       JavaScript
                |                           |
                v                           v
           Middleware                    fetch()
                |                           |
                +-------------+-------------+
                              |
                              v
                         Controller
                              |
                +-------------+-------------+
                |                           |
                v                           v
             Service                      Model
                |                           |
                v                           v
       External Services                MongoDB
                |
        +-------+-------+
        |       |       |
        v       v       v
    Cloudinary Razorpay Socket.IO
```

---

# 215. Package Installation

The project requires several npm packages.

The exact list can evolve as development progresses, but the core dependencies include:

```text id="x5r8k2"
express
mongoose
ejs
express-ejs-layouts
dotenv
express-session
connect-mongo
bcrypt
method-override
multer
cloudinary
razorpay
socket.io
express-validator
connect-flash
```

Optional packages may be added later for:

```text id="m3q6w9"
Security
Logging
Rate Limiting
Email
Testing
```

---

# 216. Development Dependencies

Development tools can include:

```text id="f8n2v5"
nodemon
```

`nodemon` automatically restarts the Node.js server when source files change.

A typical development command can be:

```text id="c5m7x1"
npm run dev
```

while production can use:

```text id="q9r4k8"
npm start
```

The exact scripts should be defined in `package.json`.

---

# 217. Suggested package scripts

A basic script structure can be:

```text id="z7p3m6"
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```

The exact command may later change if the application introduces a separate server entry point for Socket.IO.

---

# 218. Socket.IO Server Architecture

Socket.IO requires access to the HTTP server.

The project currently starts from:

```text id="r4x8c2"
app.js
```

When Socket.IO is integrated, the application may introduce:

```text id="m7q2v5"
server.js
```

The architecture would then become:

```text id="k8n5x3"
app.js
   |
   | Express Application
   v
server.js
   |
   +----------------+
   |                |
   v                v
HTTP Server      Socket.IO
   |                |
   v                v
Routes          chat.socket.js
```

This separation is useful because Socket.IO needs the underlying HTTP server.

The project can continue with `app.js` initially and introduce `server.js` when real-time chat implementation begins.

---

# 219. Database Initialization

The application should establish the MongoDB connection during startup.

Conceptually:

```text id="w3q9x7"
Server Start
    |
    v
Connect MongoDB
    |
    +---- Success
    |       |
    |       v
    |    Start Server
    |
    +---- Failure
            |
            v
       Log Error
       Stop/Handle
```

This ensures that the application does not behave as though the database is available when the connection has failed.

---

# 220. Application Startup Flow

The complete startup sequence is:

```text id="e7m4p2"
node app.js
     |
     v
Load .env
     |
     v
Create Express App
     |
     v
Connect MongoDB
     |
     v
Configure EJS
     |
     v
Configure Static Files
     |
     v
Configure Body Parser
     |
     v
Configure Session
     |
     v
Configure Flash
     |
     v
Configure Routes
     |
     v
Configure Error Handling
     |
     v
Start Server
```

---

# 221. Request Lifecycle

Once the server is running, an incoming request follows this general lifecycle:

```text id="r9x3m7"
Browser
   |
   v
HTTP Request
   |
   v
Express
   |
   v
Global Middleware
   |
   v
Route
   |
   v
Route Middleware
   |
   v
Controller
   |
   +------------+
   |            |
   v            v
Service       Model
   |            |
   v            v
External      MongoDB
Service
   |
   +------------+
        |
        v
Controller
        |
        v
Response
```

---

# 222. Example: Login Lifecycle

```text id="p8c4w6"
Login Form
    |
    v
POST /auth/login
    |
    v
auth.route.js
    |
    v
validate.middleware.js
    |
    v
auth.controller.js
    |
    v
User.model.js
    |
    v
MongoDB
    |
    v
Compare Password
    |
    v
Create Session
    |
    v
Redirect /home
    |
    v
home.ejs
```

---

# 223. Example: Profile Lifecycle

```text id="h3m7q9"
GET /users/:username
       |
       v
user.route.js
       |
       v
auth.middleware.js
       |
       v
user.controller.js
       |
       +---- User.model.js
       |
       +---- Post.model.js
       |
       +---- Follow.model.js
       |
       v
profile.ejs
       |
       v
Browser
```

---

# 224. Example: Chat Lifecycle

```text id="y6r2k4"
Open Conversation
       |
       v
GET /messages/:id
       |
       v
chat.controller.js
       |
       v
chat.service.js
       |
       v
Message.model.js
       |
       v
MongoDB
       |
       v
conversation.ejs
       |
       v
Socket.IO Connection
       |
       v
Real-Time Messages
```

---

# 225. Example: Donation Lifecycle

```text id="s8q5m3"
Donate Button
       |
       v
POST /payments/create-order
       |
       v
payment.controller.js
       |
       v
payment.service.js
       |
       v
Razorpay
       |
       v
Checkout
       |
       v
Payment
       |
       v
POST /payments/verify
       |
       v
Verify Signature
       |
       +----------+
       |          |
       v          v
Payment       Donation
Model         Model
       |          |
       +-----+----+
             |
             v
Notification
```

---

# 226. Security Principles

The application should follow basic security practices.

Important principles include:

```text id="q4m8s1"
Passwords → Hash with bcrypt
Secrets   → Store in .env
Sessions  → Secure session configuration
Input     → Validate on server
Uploads   → Validate file type and size
Payments  → Verify on backend
Access    → Check authentication
Ownership → Check authorization
Errors    → Do not expose sensitive details
```

---

# 227. Password Security

Passwords should never be stored directly.

The flow is:

```text id="u9x5c3"
Plain Password
      |
      v
bcrypt
      |
      v
Password Hash
      |
      v
MongoDB
```

During login:

```text id="k3m7q8"
Entered Password
      |
      v
bcrypt.compare()
      |
      v
Stored Hash
      |
      v
Match / No Match
```

---

# 228. Environment Security

The following must never be hard-coded into source files:

```text id="r7x2m5"
MongoDB Password
Cloudinary API Secret
Razorpay Secret
Session Secret
```

Instead:

```text id="f5q8n3"
process.env.MONGODB_URI
process.env.CLOUDINARY_API_SECRET
process.env.RAZORPAY_KEY_SECRET
process.env.SESSION_SECRET
```

---

# 229. .gitignore

The project should contain a root-level `.gitignore`.

A basic version can include:

```text id="m8c4r7"
node_modules/
.env
.env.*
!.env.example

src/uploads/*
npm-debug.log*
.DS_Store
Thumbs.db
.vscode/
```

The exact `.gitignore` can be adjusted depending on the development environment.

---

# 230. README and Environment Documentation

The README should explain which environment variables are required without revealing their values.

Example:

```text id="q3x7n5"
Variable                    Purpose

PORT                        Server port
MONGODB_URI                 MongoDB connection
SESSION_SECRET              Session security
CLOUDINARY_CLOUD_NAME      Cloudinary account
CLOUDINARY_API_KEY         Cloudinary API access
CLOUDINARY_API_SECRET      Cloudinary secret
RAZORPAY_KEY_ID            Razorpay public key
RAZORPAY_KEY_SECRET        Razorpay secret
```

---

# 231. Development Workflow

The recommended development workflow is:

```text id="c8m2x6"
Create Feature
     |
     v
Create/Update Route
     |
     v
Create Controller Logic
     |
     v
Add Service if Required
     |
     v
Update Model if Required
     |
     v
Create/Update EJS View
     |
     v
Add Frontend JavaScript
     |
     v
Test
     |
     v
Commit to Git
```

This keeps development organized.

---

# 232. Feature Development Example

For example, implementing bookmarks:

```text id="x7k4m9"
1. Bookmark Model
       |
2. Bookmark Controller
       |
3. Bookmark Route
       |
4. Authentication Middleware
       |
5. bookmark.js
       |
6. post-card.ejs
       |
7. bookmarks.ejs
       |
8. Test
```

The feature is then integrated into the home, profile, and bookmark pages.

---

# 233. Git Workflow

The project should use Git for version control.

A typical workflow is:

```text id="p5q8r2"
Code
  |
  v
git add .
  |
  v
git commit
  |
  v
git push
```

Meaningful commit messages should be used.

Examples:

```text id="j4x7m1"
feat: add user authentication
feat: add post creation
feat: add follow system
feat: add cloudinary uploads
feat: add razorpay donations
feat: add real-time chat
fix: prevent duplicate likes
fix: validate post ownership
```

---

# 234. Feature-Based Testing

Each major feature should be tested independently.

```text id="n8y3c5"
Authentication
    |
    v
Posts
    |
    v
Comments
    |
    v
Likes
    |
    v
Follow
    |
    v
Bookmarks
    |
    v
Notifications
    |
    v
Chat
    |
    v
Donations
```

This reduces the possibility of multiple features breaking simultaneously.

---

# 235. Complete System Overview

At this point, the complete project can be represented as:

```text id="e6x2q9"
                              TWITTER CLONE
                                   |
             +---------------------+---------------------+
             |                                           |
          Frontend                                  Backend
             |                                           |
             v                                           v
           EJS                                      Express.js
             |                                           |
       +-----+-----+                              +------+------+
       |           |                              |             |
   Bootstrap      JS                         Middleware      Routes
       |           |                              |             |
       |           +------------+                 +------+
       |                        |                        |
       |                     Socket.IO                  v
       |                        |                   Controllers
       |                        |                        |
       +------------------------+                 +------+------+
                                                |             |
                                                v             v
                                             Services      Models
                                                |             |
                                  +-------------+             |
                                  |                           |
                                  v                           v
                             Cloudinary                  MongoDB
                             Razorpay
```

---

# 236. Final Request Flow

The most important architecture to remember is:

```text id="g4m8x2"
Browser
   |
   v
Express Route
   |
   v
Middleware
   |
   v
Controller
   |
   +------------------+
   |                  |
   v                  v
Service              Model
   |                  |
   v                  v
External APIs       MongoDB
   |                  |
   +--------+---------+
            |
            v
        Controller
            |
      +-----+------+
      |            |
      v            v
   EJS View      JSON
      |            |
      v            v
    HTML       JavaScript
      |            |
      +-----+------+
            |
            v
          Browser
```

This architecture allows the project to remain modular while supporting a large number of features.

---

# 237. Summary of Part 7

The application initialization and execution architecture is now defined.

The application:

- Loads environment variables.
- Connects to MongoDB.
- Configures Express.
- Configures EJS.
- Serves static files.
- Creates sessions.
- Registers middleware.
- Mounts routes.
- Processes controllers.
- Uses services for complex operations.
- Uses Mongoose models for MongoDB.
- Uses Cloudinary for images.
- Uses Razorpay for donations.
- Uses Socket.IO for real-time chat.
- Uses EJS for server-rendered pages.
- Uses JavaScript for dynamic frontend interactions.
- Uses centralized error handling.

The overall project architecture is therefore:

```text id="z5n7c2"
                         TWITTER CLONE
                              |
          +-------------------+-------------------+
          |                                       |
       Frontend                                Backend
          |                                       |
         EJS                                   Express
          |                                       |
     Bootstrap + JS                         Middleware
                                                  |
                                                Routes
                                                  |
                                             Controllers
                                                  |
                                      +-----------+-----------+
                                      |                       |
                                   Services                 Models
                                      |                       |
                              +-------+-------+               |
                              |       |       |               |
                              v       v       v               v
                         Cloudinary Razorpay Socket.IO      MongoDB
```

# 238. Feature-Wise Application Architecture

The Twitter Clone is divided into multiple independent but interconnected features.

Each feature follows the same general architecture:

```text
User Action
    |
    v
Frontend / EJS
    |
    v
Route
    |
    v
Middleware
    |
    v
Controller
    |
    v
Service
    |
    v
Model
    |
    v
MongoDB
```

Some features also communicate with external services such as Cloudinary, Razorpay, or Socket.IO.

---

# 239. Authentication System

Authentication is the entry point for users.

The authentication system provides:

- Registration
- Login
- Logout
- Session management
- Password hashing
- Authentication middleware
- Protected routes
- Forgot-password functionality if implemented

Main files:

```text
Controller:
src/controllers/auth.controller.js

Route:
src/routes/auth.route.js

Middleware:
src/middleware/auth.middleware.js

Model:
src/models/User.model.js

Views:
views/auth/
```

---

# 240. Registration Flow

A new user follows this process:

```text
Register Page
     |
     v
Submit Form
     |
     v
POST /auth/register
     |
     v
Validation
     |
     v
Check Existing User
     |
     v
Hash Password
     |
     v
Create User
     |
     v
Create Session
     |
     v
Redirect to Home
```

The system should validate:

- Display name
- Username
- Email
- Password
- Date of birth
- Other required fields

---

# 241. Login Flow

The login flow is:

```text
Login Page
     |
     v
POST /auth/login
     |
     v
Validate Input
     |
     v
Find User
     |
     v
Compare Password
     |
     +---- Invalid
     |       |
     |       v
     |    Error Message
     |
     +---- Valid
             |
             v
        Create Session
             |
             v
          Home Page
```

The password should be verified using bcrypt rather than comparing plain-text passwords.

---

# 242. Logout Flow

Logout destroys or invalidates the user's session.

```text
User
 |
 v
POST /auth/logout
 |
 v
Destroy Session
 |
 v
Redirect to Login
```

After logout, protected routes should no longer be accessible.

---

# 243. User Profile System

The user profile system manages personal profile information.

Main files:

```text
Controller:
src/controllers/user.controller.js

Route:
src/routes/user.route.js

Model:
src/models/User.model.js

View:
views/profile/profile.ejs
views/profile/edit-profile.ejs
```

A profile may contain:

```text
Display Name
Username
Profile Picture
Cover Picture
Bio
Date of Birth
Location
Website
Followers
Following
Joined Date
```

---

# 244. Profile Page Architecture

A profile page can combine information from multiple collections.

```text
Profile Request
      |
      v
User Controller
      |
      +---- User Model
      |
      +---- Post Model
      |
      +---- Follow Model
      |
      +---- Like Model
      |
      v
Profile Data
      |
      v
profile.ejs
```

This allows the page to display:

- User information
- Posts
- Followers
- Following
- Post engagement
- Follow status

---

# 245. Profile Editing

Profile editing should be handled separately from profile viewing.

```text
Edit Profile
     |
     v
PATCH /users/profile
     |
     v
Authentication
     |
     v
Validation
     |
     v
Upload Images if Required
     |
     v
Update User
     |
     v
Redirect to Profile
```

Profile and cover pictures can be uploaded to Cloudinary.

---

# 246. Date of Birth and Age

The database should store:

```text
dateOfBirth
```

rather than storing:

```text
age
```

Age can be calculated dynamically.

```text
Current Date
      |
      v
Date of Birth
      |
      v
Calculated Age
```

This prevents the stored age from becoming outdated.

---

# 247. Post System

Posts are the central feature of the application.

Main files:

```text
Controller:
src/controllers/post.controller.js

Route:
src/routes/post.route.js

Model:
src/models/Post.model.js

View:
views/post/
```

A post can contain:

```text
Author
Content
Image
Created Date
Updated Date
```

Engagement is handled through separate models such as:

```text
Like
Comment
Bookmark
Follow
```

---

# 248. Creating a Post

The creation flow is:

```text
Create Post Modal
       |
       v
POST /posts
       |
       v
Authentication
       |
       v
Validation
       |
       v
Multer
       |
       v
Cloudinary
       |
       v
Post Controller
       |
       v
Post Model
       |
       v
MongoDB
```

If the post does not contain an image, the Cloudinary step can be skipped.

---

# 249. Editing a Post

Only the post owner should be allowed to edit the post.

```text
Edit Post
    |
    v
PATCH /posts/:id
    |
    v
Authentication
    |
    v
Find Post
    |
    v
Check Ownership
    |
    +---- Not Owner → Forbidden
    |
    +---- Owner
           |
           v
       Update Post
           |
           v
        MongoDB
```

---

# 250. Deleting a Post

The delete flow is similar.

```text
Delete
   |
   v
DELETE /posts/:id
   |
   v
Authentication
   |
   v
Find Post
   |
   v
Check Ownership
   |
   v
Delete Related Data
   |
   v
Delete Post
```

Related data may include:

```text
Likes
Comments
Bookmarks
Notifications
Reposts
```

The exact cleanup strategy should be decided during implementation.

---

# 251. Like System

Likes are stored separately from posts.

The `Like` model contains the relationship between:

```text
User
Post
```

Conceptually:

```text
User A
   |
   | likes
   v
Post 123
```

The database record represents:

```text
user = User A
post = Post 123
```

A unique index on:

```text
user + post
```

prevents duplicate likes.

---

# 252. Like and Unlike Flow

Like:

```text
POST /posts/:id/like
```

Unlike:

```text
DELETE /posts/:id/like
```

Flow:

```text
User Clicks Like
      |
      v
Frontend JavaScript
      |
      v
Like Route
      |
      v
Authentication
      |
      v
Like Controller
      |
      v
Like Model
      |
      v
MongoDB
      |
      v
Notification Service
      |
      v
JSON Response
```

---

# 253. Comment System

Comments allow users to respond to posts.

Main files:

```text
src/controllers/comment.controller.js
src/routes/comment.route.js
src/models/Comment.model.js
views/partials/comment-card.ejs
```

A comment contains:

```text
Author
Post
Content
Parent Comment
Created Date
```

---

# 254. Reply System

A reply is a comment whose:

```text
parentComment
```

points to another comment.

This creates a hierarchy:

```text
Post
 |
 +── Comment A
 |      |
 |      +── Reply A1
 |      |
 |      +── Reply A2
 |
 +── Comment B
```

This structure allows threaded discussions.

---

# 255. Comment Flow

```text
Comment Box
     |
     v
POST /comments
     |
     v
Authentication
     |
     v
Validation
     |
     v
Comment Controller
     |
     v
Comment Model
     |
     v
MongoDB
     |
     v
Notification Service
     |
     v
Updated Comment List
```

---

# 256. Follow System

The follow system creates a relationship between two users.

Main model:

```text
src/models/Follow.model.js
```

Relationship:

```text
Follower
    |
    | follows
    v
Following
```

For example:

```text
User A → User B
```

means User A follows User B.

---

# 257. Follow Constraints

The database should prevent:

```text
User A → User A
```

A user should not be able to follow themselves.

Duplicate relationships should also be prevented.

A unique constraint can be applied to:

```text
follower + following
```

---

# 258. Follow Flow

```text
Click Follow
     |
     v
POST /follow/:userId
     |
     v
Authentication
     |
     v
Validate Target User
     |
     v
Check Existing Follow
     |
     v
Create Follow
     |
     v
Notification Service
     |
     v
Update UI
```

Unfollow reverses the relationship.

---

# 259. Followers and Following Pages

The application can provide:

```text
/users/:username/followers
/users/:username/following
```

The controller retrieves relevant Follow documents and populates user information.

Example:

```text
Follow Collection
       |
       v
Populate User
       |
       v
user-card.ejs
```

---

# 260. Bookmark System

Bookmarks allow users to save posts privately.

Main files:

```text
src/controllers/bookmark.controller.js
src/routes/bookmark.route.js
src/models/Bookmark.model.js
views/bookmarks/bookmarks.ejs
```

Relationship:

```text
User
 |
 | bookmarks
 v
Post
```

Bookmarks are private unless the application explicitly implements public bookmark collections.

---

# 261. Bookmark Flow

```text
Bookmark Button
      |
      v
POST /bookmarks/:postId
      |
      v
Authentication
      |
      v
Check Existing Bookmark
      |
      v
Create Bookmark
      |
      v
MongoDB
```

Removing a bookmark deletes the corresponding relationship.

---

# 262. Explore System

The Explore section helps users discover content.

Possible features include:

```text
User Search
Post Search
Hashtag Search
Trending Posts
Suggested Users
```

Main view:

```text
views/explore/explore.ejs
```

The search functionality can use MongoDB queries and indexes.

---

# 263. User Search

Example:

```text
Search "rahul"
```

The backend can search fields such as:

```text
username
displayName
```

Flow:

```text
Search Input
     |
     v
JavaScript
     |
     v
GET /users/search?q=rahul
     |
     v
User Controller
     |
     v
MongoDB
     |
     v
JSON Results
     |
     v
Search UI
```

---

# 264. Post Search

Post search can search:

```text
Post Content
Hashtags
Author
```

The application may initially implement simple MongoDB text or regex-based searching and improve it later if required.

---

# 265. Trending System

Trending can be implemented using engagement information.

Possible signals include:

```text
Likes
Comments
Reposts
Recent Activity
Hashtag Frequency
```

Conceptually:

```text
Recent Posts
     |
     v
Calculate Engagement
     |
     v
Calculate Trend Score
     |
     v
Sort Results
     |
     v
Trending Section
```

A simple implementation is sufficient for the first version.

---

# 266. Suggested Users

Suggested users can be based on:

```text
Mutual Followers
Similar Activity
Popular Users
Users Not Already Followed
```

Example flow:

```text
Current User
     |
     v
Following List
     |
     v
Find Related Users
     |
     v
Remove Already Followed Users
     |
     v
Suggested Users
```

---

# 267. Notification System

Notifications provide feedback about user activity.

Main files:

```text
src/controllers/notification.controller.js
src/routes/notification.route.js
src/models/Notification.model.js
src/service/notification.service.js
views/notifications/notifications.ejs
```

---

# 268. Notification Types

The application can support:

```text
FOLLOW
LIKE
COMMENT
REPLY
REPOST
MENTION
DONATION
MESSAGE
```

The notification model should store enough information to determine:

```text
Who received it?
Who triggered it?
What happened?
Which object is related?
Has it been read?
When did it happen?
```

---

# 269. Notification Creation

Notifications should be created through the notification service rather than duplicating notification logic across every controller.

Example:

```text
User A likes User B's post
          |
          v
Like Controller
          |
          v
Notification Service
          |
          v
Create Notification
          |
          v
User B
```

This makes notification behavior consistent across the application.

---

# 270. Notification Read State

Each notification can contain:

```text
isRead
```

Initial state:

```text
false
```

After opening or marking it read:

```text
true
```

This allows the UI to show an unread notification count.

---

# 271. Notification UI

The navbar can display:

```text
Notifications
```

with an unread indicator.

Example:

```text
Bell Icon
    |
    +── Unread Count
```

The full notifications page displays individual notification cards.

---

# 272. Real-Time Chat System

Chat is implemented using:

```text
Socket.IO
```

and persisted using MongoDB.

Main files:

```text
src/controllers/chat.controller.js
src/routes/chat.route.js
src/service/chat.service.js
src/sockets/chat.socket.js

src/models/Conversation.model.js
src/models/Message.model.js
```

---

# 273. Conversation Model

A conversation represents a chat between users.

For a one-to-one chat:

```text
Conversation
 |
 +── User A
 |
 +── User B
```

The conversation can also store:

```text
lastMessage
updatedAt
```

This allows the conversation list to be sorted by recent activity.

---

# 274. Message Model

Each message belongs to a conversation.

Relationship:

```text
Conversation
      |
      +── Message 1
      +── Message 2
      +── Message 3
```

A message contains:

```text
conversation
sender
content
read
createdAt
```

---

# 275. Chat Request Flow

Opening a conversation:

```text
GET /messages/:conversationId
       |
       v
Chat Controller
       |
       v
Chat Service
       |
       v
Message Model
       |
       v
MongoDB
       |
       v
conversation.ejs
```

---

# 276. Real-Time Message Flow

Sending a message:

```text
User A
  |
  v
Chat UI
  |
  v
Socket.IO
  |
  v
chat.socket.js
  |
  v
Save Message
  |
  v
MongoDB
  |
  v
Emit Event
  |
  v
User B
```

The message appears without requiring a full page refresh.

---

# 277. Socket.IO Conversation Rooms

Each conversation can have its own Socket.IO room.

Example:

```text
conversation:123
```

Users participating in that conversation join the room.

```text
User A
   |
   +----------+
              |
              v
       conversation:123
              ^
              |
   +----------+
   |
User B
```

Messages can then be emitted to that specific room.

---

# 278. Chat Events

Possible Socket.IO events include:

```text
connection
disconnect
join-conversation
leave-conversation
send-message
receive-message
typing
stop-typing
message-read
```

These events provide the foundation for a real-time messaging experience.

---

# 279. Cloudinary Image System

Cloudinary handles permanent image storage.

Images may include:

```text
Profile Picture
Cover Picture
Post Image
```

The flow is:

```text
Browser
   |
   v
Multer
   |
   v
Temporary File
   |
   v
Cloudinary
   |
   v
Cloudinary URL
   |
   v
MongoDB
```

MongoDB stores the URL rather than the complete image file.

---

# 280. Why Images Are Not Stored Directly in MongoDB

The application should avoid storing large image binaries directly inside normal MongoDB documents.

Instead:

```text
Image File → Cloudinary
URL → MongoDB
```

This keeps application data smaller and makes image delivery easier.

---

# 281. Payment and Donation System

The donation system allows one user to send money to another user.

It involves:

```text
Donation
Payment
Razorpay
Notification
```

Main files:

```text
src/controllers/donation.controller.js
src/controllers/payment.controller.js

src/service/payment.service.js

src/models/Donation.model.js
src/models/Payment.model.js
```

---

# 282. Donation Flow

```text
Receiver Profile
      |
      v
Donate Button
      |
      v
Donation Modal
      |
      v
Enter Amount + Message
      |
      v
Create Razorpay Order
      |
      v
Razorpay Checkout
      |
      v
Payment
      |
      v
Backend Verification
      |
      v
Create Payment Record
      |
      v
Create Donation Record
      |
      v
Create Notification
```

---

# 283. Payment Verification

Payment verification must happen on the backend.

The client should not be trusted to simply say:

```text
Payment Successful
```

Instead:

```text
Razorpay Response
       |
       v
Backend
       |
       v
Verify Signature
       |
       +---- Invalid → Reject
       |
       +---- Valid
              |
              v
        Save Payment
              |
              v
        Save Donation
```

This prevents basic payment manipulation.

---

# 284. Payment vs Donation

The two models have different purposes.

`Payment` represents the actual transaction.

```text
Payment
 |
 +── orderId
 +── paymentId
 +── signature
 +── amount
 +── status
```

`Donation` represents the business meaning of the transaction.

```text
Donation
 |
 +── donor
 +── receiver
 +── amount
 +── payment
 +── message
 +── status
```

Therefore both models can reference each other where appropriate.

---

# 285. Donation Notification

After successful verification:

```text
Payment Verified
      |
      v
Donation Created
      |
      v
Notification Service
      |
      v
Receiver Notification
```

Example notification concept:

```text
User A donated money to you.
```

The exact message can be generated dynamically.

---

# 286. Home Feed

The home feed combines several systems.

The feed may display posts from:

```text
Current User
+
Followed Users
```

Optionally, recommended posts can also be included.

Conceptual flow:

```text
Current User
     |
     v
Following List
     |
     v
Find Posts
     |
     v
Sort by Date / Ranking
     |
     v
Home Feed
```

---

# 287. Post Card Architecture

The post card is a reusable EJS partial:

```text
views/partials/post-card.ejs
```

It can display:

```text
Profile Picture
Display Name
Username
Post Content
Post Image
Timestamp
Like Button
Comment Button
Repost Button
Share Button
Bookmark Button
More Options
```

The same component can be reused on:

```text
Home
Profile
Explore
Post Details
Bookmarks
Search Results
```

---

# 288. Repost System

A repost allows a user to redistribute another user's post.

Conceptually:

```text
User A
   |
   | reposts
   v
Post A
```

The application can represent reposts using fields or relationships depending on the final implementation.

A repost should preserve the original author's identity.

---

# 289. Quote Repost

A quote repost allows the user to add their own content while referencing another post.

Conceptually:

```text
User A
   |
   v
"Great post!"
   |
   +── Original Post
```

The `Post` model can reference the original post through a field such as:

```text
quotePost
```

---

# 290. Share System

Sharing can initially be implemented using the post's public URL.

Example concept:

```text
https://domain.com/posts/POST_ID
```

The frontend can use:

```text
navigator.share()
```

where supported, with a clipboard fallback where necessary.

---

# 291. Database Relationship Overview

The major relationships are:

```text
User
 |
 +── creates ────────> Post
 |
 +── likes ──────────> Post
 |
 +── comments ───────> Post
 |
 +── follows ────────> User
 |
 +── bookmarks ──────> Post
 |
 +── receives ───────> Notification
 |
 +── sends ───────────> Message
 |
 +── receives ───────> Message
 |
 +── donates ─────────> User
```

---

# 292. Core Database Relationship Diagram

```text
                         USER
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
        POSTS           FOLLOWS        BOOKMARKS
          |               |               |
          v               v               v
       COMMENTS          USER           POSTS
          |
          v
        REPLIES

USER
 |
 +── LIKES ───────────> POSTS
 |
 +── NOTIFICATIONS
 |
 +── CONVERSATIONS
 |
 +── MESSAGES
 |
 +── DONATIONS
 |
 +── PAYMENTS
```

---

# 293. User-Centered Relationship

The User model is the central entity.

```text
                         User
                          |
        +-----------------+-----------------+
        |                 |                 |
        v                 v                 v
      Posts             Follows          Likes
        |                 |                 |
        v                 v                 v
    Comments            Users            Posts
        |
        v
      Replies

User
 |
 +── Bookmarks
 +── Notifications
 +── Conversations
 +── Messages
 +── Donations
 +── Payments
```

---

# 294. Post-Centered Relationship

The Post entity is also highly connected.

```text
                         POST
                          |
       +------------------+------------------+
       |                  |                  |
       v                  v                  v
      Like             Comment           Bookmark
                          |
                          v
                       Reply
                          |
                          v
                       User
```

Additional relationships:

```text
Post
 |
 +── Author → User
 |
 +── Quote Post → Post
 |
 +── Repost relationship
```

---

# 295. Notification Relationship

Notifications connect multiple entities.

```text
Notification
      |
      +── recipient → User
      |
      +── sender → User
      |
      +── post → Post
      |
      +── comment → Comment
      |
      +── donation → Donation
```

Not every notification needs every reference.

The applicable reference depends on the notification type.

---

# 296. Chat Relationship

The chat system uses:

```text
User
 |
 v
Conversation
 |
 v
Message
 |
 v
User
```

More explicitly:

```text
Conversation
 |
 +── participants[] → User
 |
 +── lastMessage → Message
 |
 +── messages[] → Message
```

The message itself references:

```text
sender → User
conversation → Conversation
```

---

# 297. Donation Relationship

The donation system uses:

```text
Donor User
     |
     v
Donation
     |
     +── Receiver User
     |
     +── Payment
```

This gives a clear separation between:

```text
Who sent money?
Who received money?
How much?
Which payment?
What status?
```

---

# 298. Feature Dependency Map

Some features depend on other features.

```text
Authentication
      |
      +---- Profile
      |
      +---- Posts
      |
      +---- Likes
      |
      +---- Comments
      |
      +---- Follow
      |
      +---- Bookmarks
      |
      +---- Notifications
      |
      +---- Chat
      |
      +---- Donations
```

Authentication is therefore implemented early because most other features depend on the logged-in user.

---

# 299. Recommended Development Order

The application should be implemented in a controlled sequence.

```text
1. Project Setup
        |
2. MongoDB Connection
        |
3. User Model
        |
4. Authentication
        |
5. Session System
        |
6. Profile System
        |
7. Post System
        |
8. Likes
        |
9. Comments
        |
10. Follow System
        |
11. Bookmarks
        |
12. Notifications
        |
13. Explore/Search
        |
14. Chat
        |
15. Cloudinary Integration
        |
16. Razorpay Donations
        |
17. Final UI Integration
        |
18. Testing
        |
19. Deployment
```

---

# 300. Why This Development Order Is Important

Later features depend on earlier features.

For example:

```text
Likes
  ↓
need User
  ↓
need Authentication
```

Similarly:

```text
Chat
  ↓
needs User
  ↓
needs Authentication
  ↓
needs Session
```

And:

```text
Donation
  ↓
needs User
  ↓
needs Authentication
  ↓
needs Razorpay
  ↓
needs Payment Verification
```

Building features in dependency order reduces rework.

---

# 301. Complete Feature Dependency Structure

```text
                    AUTHENTICATION
                          |
                          v
                        USER
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
        PROFILE          POSTS          FOLLOW
                          |
             +------------+------------+
             |            |            |
             v            v            v
           LIKES       COMMENTS     BOOKMARKS
             |            |
             +------+-----+
                    |
                    v
              NOTIFICATIONS

USER
 |
 +── CHAT
 |
 +── DONATIONS
        |
        v
     RAZORPAY
```

---

# 302. Final Architecture Principle

Every feature should have a clear responsibility.

```text
Routes
→ Decide where the request goes.

Middleware
→ Validate, authenticate, authorize, or prepare the request.

Controllers
→ Handle request and response.

Services
→ Handle reusable business logic and external integrations.

Models
→ Define database structure and relationships.

Views
→ Render the user interface.

Frontend JavaScript
→ Handle dynamic browser interactions.

Socket.IO
→ Handle real-time communication.

MongoDB
→ Persist application data.

Cloudinary
→ Persist uploaded images.

Razorpay
→ Process payments.
```

This separation keeps the Twitter Clone maintainable even as the number of features increases.

---

# 303. Complete Twitter Clone Architecture

```text
                                      TWITTER CLONE
                                            |
       +------------------------------------+------------------------------------+
       |                                    |                                    |
    FRONTEND                              BACKEND                            EXTERNAL
       |                                    |                                 SERVICES
       |                                    |                                    |
       v                                    v                         +----------+----------+
     EJS                               EXPRESS.JS                    |          |          |
       |                                    |                         v          v          v
 Bootstrap                              Routes                  Cloudinary   Razorpay   Socket.IO
       |                                    |
 JavaScript                              Middleware
       |                                    |
       |                                    v
       |                               Controllers
       |                                    |
       |                          +---------+---------+
       |                          |                   |
       |                          v                   v
       |                       Services            Models
       |                          |                   |
       |                          |                   v
       |                          |                MongoDB
       |                          |
       +--------------------------+
```

# 304. Production and Deployment Architecture

After completing the development and testing phase, the Twitter Clone can be prepared for production deployment.

The production architecture can be represented as:

```text
User Browser
     |
     v
Production Server
     |
     v
Node.js + Express
     |
     +-------------------+
     |                   |
     v                   v
MongoDB Atlas       External Services
                         |
             +-----------+-----------+
             |                       |
             v                       v
         Cloudinary              Razorpay
```

If real-time chat is enabled:

```text
Browser
   |
   +-------- HTTP --------> Express
   |
   +------ WebSocket ------> Socket.IO
```

---

# 305. MongoDB Atlas

For production, MongoDB Atlas can be used as the hosted MongoDB database.

The application connects using:

```text
MONGODB_URI
```

The production database should have:

- Strong authentication
- Restricted network access
- Appropriate database user permissions
- Regular backups
- Proper indexes
- Production database credentials

The MongoDB connection string must never be committed to Git.

---

# 306. Production Environment Variables

Production credentials should be configured through the hosting platform's environment-variable system.

Typical variables include:

```text
PORT
MONGODB_URI
SESSION_SECRET

CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
```

The values used in production must be different from development credentials whenever appropriate.

---

# 307. Cloudinary Production Configuration

Cloudinary is responsible for permanent image storage.

Production image flow:

```text
User
 |
 v
Production Server
 |
 v
Multer
 |
 v
Cloudinary
 |
 v
Secure Image URL
 |
 v
MongoDB
```

Cloudinary should be configured using environment variables rather than hard-coded credentials.

---

# 308. Razorpay Production Configuration

The donation system requires Razorpay credentials.

Production payment flow:

```text
User
 |
 v
Application
 |
 v
Create Order
 |
 v
Razorpay
 |
 v
Checkout
 |
 v
Payment
 |
 v
Backend Verification
 |
 v
Donation Record
```

The Razorpay secret key must only be accessible to the backend.

It must never be exposed to frontend JavaScript.

---

# 309. Socket.IO Production Architecture

Real-time chat requires the production server to support persistent Socket.IO connections.

```text
Browser A
    |
    | WebSocket
    v
Socket.IO Server
    |
    | Room
    v
Conversation
    ^
    |
    | WebSocket
    |
Browser B
```

The HTTP and Socket.IO servers should operate through the same application server where appropriate.

---

# 310. Production Session Security

Sessions should be configured securely in production.

Important settings include:

```text
HTTP-only cookies
Secure cookies
Appropriate SameSite configuration
Strong session secret
MongoDB session storage
```

The exact cookie configuration should match the production deployment environment.

---

# 311. HTTPS

Production deployment should use HTTPS.

The basic architecture becomes:

```text
Browser
   |
   | HTTPS
   v
Production Server
   |
   v
Express
```

HTTPS protects sensitive information such as:

- Login credentials
- Session cookies
- Payment-related requests
- Private messages
- Profile information

---

# 312. Security Checklist

Before deployment, the following security checks should be completed:

```text
[ ] Passwords are hashed
[ ] .env is ignored by Git
[ ] Production secrets are protected
[ ] Session cookies are secure
[ ] Authentication is required for protected routes
[ ] Authorization checks ownership
[ ] User input is validated
[ ] Uploaded files are validated
[ ] File size limits are configured
[ ] Payment signatures are verified
[ ] Sensitive errors are not exposed
[ ] HTTPS is enabled
[ ] Database access is restricted
```

---

# 313. Input Validation

All important user-controlled input should be validated on the server.

Examples include:

```text
Username
Email
Password
Post Content
Comment Content
Donation Amount
Profile Information
Search Parameters
```

Client-side validation improves user experience, but server-side validation remains mandatory.

---

# 314. File Upload Security

Uploaded files should be restricted by:

```text
File Type
File Size
Upload Destination
```

For example, the application can allow common image formats while rejecting unexpected file types.

The upload pipeline should be:

```text
User Upload
     |
     v
Multer
     |
     v
Validation
     |
     +---- Invalid → Reject
     |
     +---- Valid
            |
            v
        Cloudinary
```

---

# 315. Payment Security Checklist

Payment-related operations require additional protection.

The application must:

```text
Create orders on backend
Never trust client payment status
Verify Razorpay signature
Store payment identifiers
Store transaction status
Prevent duplicate processing
Create donation only after successful verification
```

The client should never directly determine whether a donation is successful.

---

# 316. Authorization Security

Every protected resource should verify ownership when necessary.

Examples:

```text
Edit Post
Delete Post
Edit Comment
Delete Comment
Edit Profile
Delete Content
```

The application should not rely only on the frontend to hide these actions.

Backend authorization is required.

---

# 317. Testing Strategy

Testing should be performed feature by feature.

The application can be divided into:

```text
Authentication
User Profile
Posts
Likes
Comments
Follow
Bookmarks
Notifications
Search
Chat
Payments
```

Each feature should be tested independently and then tested together with dependent features.

---

# 318. Authentication Testing

Test cases:

```text
[ ] Register with valid data
[ ] Register with existing email
[ ] Register with existing username
[ ] Login with valid credentials
[ ] Login with invalid password
[ ] Login with unknown email
[ ] Logout successfully
[ ] Protected page without login
[ ] Session persistence
```

---

# 319. Profile Testing

Test:

```text
[ ] View profile
[ ] Edit profile
[ ] Change profile picture
[ ] Change cover picture
[ ] Update bio
[ ] Update location
[ ] Update website
[ ] Update date of birth
```

Also verify that users cannot modify another user's profile through manipulated requests.

---

# 320. Post Testing

Test:

```text
[ ] Create text post
[ ] Create image post
[ ] Edit own post
[ ] Delete own post
[ ] Attempt to edit another user's post
[ ] Attempt to delete another user's post
[ ] View post details
[ ] Repost
[ ] Quote repost
[ ] Share
```

---

# 321. Engagement Testing

Like:

```text
[ ] Like post
[ ] Unlike post
[ ] Prevent duplicate like
```

Comments:

```text
[ ] Add comment
[ ] Edit own comment
[ ] Delete own comment
[ ] Add reply
```

Bookmarks:

```text
[ ] Bookmark
[ ] Remove bookmark
[ ] View bookmarks
```

---

# 322. Follow Testing

Test:

```text
[ ] Follow user
[ ] Unfollow user
[ ] Prevent self-follow
[ ] Prevent duplicate follow
[ ] View followers
[ ] View following
[ ] Suggested users
```

The follow notification should also be verified.

---

# 323. Notification Testing

Test each notification type:

```text
[ ] Follow notification
[ ] Like notification
[ ] Comment notification
[ ] Reply notification
[ ] Repost notification
[ ] Mention notification
[ ] Donation notification
```

Also verify:

```text
[ ] Mark notification as read
[ ] Mark all as read
[ ] Unread count
```

---

# 324. Chat Testing

Test:

```text
[ ] Create conversation
[ ] Open conversation
[ ] Send message
[ ] Receive message
[ ] Message persistence
[ ] Conversation list
[ ] Read status
[ ] Typing indicator
[ ] Join room
[ ] Leave room
[ ] Disconnect/reconnect
```

Real-time functionality should be tested with multiple browser sessions.

---

# 325. Donation Testing

Payment testing should be performed using the appropriate Razorpay test environment before production.

Test:

```text
[ ] Open donation modal
[ ] Enter valid amount
[ ] Create order
[ ] Open checkout
[ ] Successful payment
[ ] Failed payment
[ ] Invalid signature
[ ] Duplicate payment handling
[ ] Donation record creation
[ ] Payment record creation
[ ] Donation notification
```

---

# 326. Error Testing

The application should also test abnormal situations.

Examples:

```text
Invalid URL
Invalid ObjectId
Missing required field
Unauthorized request
Forbidden request
Database failure
Cloudinary failure
Payment failure
Socket disconnection
```

Expected error pages should be:

```text
404.ejs
500.ejs
```

where appropriate.

---

# 327. Performance Considerations

As the application grows, performance becomes important.

Important practices include:

```text
Database indexes
Pagination
Efficient queries
Selective populate()
Image optimization
Lazy loading
Caching where appropriate
Avoiding unnecessary database queries
```

The application should avoid retrieving thousands of posts in a single request.

---

# 328. Pagination

Feeds, comments, notifications, and search results should support pagination.

Instead of:

```text
Fetch Every Post
```

the application should retrieve a limited number:

```text
Page 1 → Posts 1–20
Page 2 → Posts 21–40
Page 3 → Posts 41–60
```

For large datasets, cursor-based pagination can later be considered.

---

# 329. Database Indexing

Indexes should be created for frequently searched or constrained fields.

Possible indexed fields include:

```text
User.username
User.email
Post.author
Post.createdAt
Follow.follower
Follow.following
Like.user
Like.post
Bookmark.user
Bookmark.post
Notification.recipient
Message.conversation
```

Compound unique indexes can prevent duplicate relationships.

---

# 330. Data Integrity

The application should maintain consistent relationships between collections.

For example:

```text
Like
 |
 +── user
 +── post
```

Both referenced entities should exist before creating the relationship.

Similarly:

```text
Comment
 |
 +── author
 +── post
```

should reference valid documents.

---

# 331. Handling Deleted Users

If a user is deleted, related data should be handled deliberately.

Possible strategies include:

```text
Delete related data
Anonymize related data
Preserve historical references
```

The final implementation should choose a consistent policy.

---

# 332. Handling Deleted Posts

Deleting a post may require handling:

```text
Likes
Comments
Bookmarks
Notifications
Reposts
Quote Reposts
```

The application should define whether these records are:

```text
Deleted
Preserved
Soft-deleted
```

For a student project, a controlled deletion strategy is sufficient.

---

# 333. Optional Soft Delete

Instead of immediately deleting a record, the application can use:

```text
isDeleted: true
```

This is called soft deletion.

Example:

```text
Post
 |
 +── isDeleted = true
```

The post can then be excluded from normal feed queries.

Soft deletion is optional and can be introduced later if required.

---

# 334. Responsive Design

The frontend should support:

```text
Desktop
Tablet
Mobile
```

Bootstrap's responsive grid can be used.

A typical desktop layout can be:

```text
+-------------------------------------------------------+
|                     Navbar                            |
+-------------+-----------------------+-----------------+
|   Sidebar   |      Main Feed        |    Rightbar     |
|             |                       |                 |
+-------------+-----------------------+-----------------+
```

On smaller screens:

```text
+---------------------------+
|         Navbar            |
+---------------------------+
|                           |
|        Main Feed          |
|                           |
+---------------------------+
|       Mobile Nav          |
+---------------------------+
```

---

# 335. Reusable UI Components

Reusable components should be preferred over duplicate HTML.

Important partials include:

```text
header.ejs
navbar.ejs
sidebar.ejs
rightbar.ejs
footer.ejs
flash.ejs
post-card.ejs
comment-card.ejs
user-card.ejs
notification-card.ejs
message-card.ejs
```

This makes UI maintenance easier.

For example, changing the post action buttons should require modifying:

```text
post-card.ejs
```

rather than every page individually.

---

# 336. Frontend JavaScript Responsibilities

Frontend JavaScript should handle browser-side interactions such as:

```text
Like
Unlike
Bookmark
Follow
Unfollow
Delete confirmation
Modal interactions
AJAX requests
Search
Notifications
Chat
Payment checkout
```

It should communicate with the backend rather than directly accessing MongoDB.

---

# 337. Frontend and Backend Boundary

The browser should never directly connect to MongoDB.

Correct:

```text
Browser
   |
   v
Express
   |
   v
Controller
   |
   v
Model
   |
   v
MongoDB
```

Incorrect:

```text
Browser
   |
   X
MongoDB
```

All database operations must remain on the server.

---

# 338. API Responsibility

Although this is primarily an EJS application, several endpoints can behave like APIs.

For example:

```text
POST /posts/:id/like
POST /posts/:id/bookmark
POST /users/:id/follow
POST /comments
GET /users/search
POST /payments/create-order
POST /payments/verify
```

These endpoints can return JSON responses for frontend JavaScript.

---

# 339. Hybrid Rendering Architecture

The application uses two rendering approaches.

Server-rendered:

```text
Request
 |
 v
Controller
 |
 v
EJS
 |
 v
HTML
```

Dynamic:

```text
Browser
 |
 v
JavaScript
 |
 v
fetch()
 |
 v
Express
 |
 v
JSON
 |
 v
Update DOM
```

This provides a balance between traditional server-side rendering and modern interactive behavior.

---

# 340. Project Deployment Checklist

Before deploying the project:

```text
[ ] Remove test credentials
[ ] Configure production .env
[ ] Configure MongoDB Atlas
[ ] Configure Cloudinary
[ ] Configure Razorpay
[ ] Configure session storage
[ ] Enable HTTPS
[ ] Test authentication
[ ] Test all major CRUD operations
[ ] Test payment verification
[ ] Test Socket.IO
[ ] Test image uploads
[ ] Test error pages
[ ] Check mobile responsiveness
[ ] Check database indexes
[ ] Push final code to GitHub
```

---

# 341. Recommended Deployment Structure

A production deployment can use:

```text
Frontend + Backend
        |
        v
Node.js / Express Server
        |
        +------------+
        |            |
        v            v
MongoDB Atlas    External APIs
                     |
              +------+------+
              |             |
              v             v
          Cloudinary     Razorpay
```

Socket.IO runs alongside the Node.js server.

---

# 342. Future Improvements

The first version of the project can be extended with additional features.

Potential improvements include:

```text
Advanced recommendation algorithm
Infinite scrolling
Advanced trending algorithm
Hashtag pages
Verified accounts
Admin dashboard
Content moderation
Report system
Block/mute users
Email notifications
Password reset via email
Two-factor authentication
Media galleries
Video uploads
Voice messages
Group chats
Advanced analytics
```

These features can be added without changing the fundamental architecture.

---

# 343. Possible Admin System

An optional administrative system can manage:

```text
Users
Posts
Comments
Reports
Payments
Donations
System statistics
```

Possible roles:

```text
USER
ADMIN
```

Role-based authorization can then determine which routes are accessible.

---

# 344. Scalability Considerations

If the project grows beyond a student project, the architecture can evolve.

Possible future architecture:

```text
Load Balancer
      |
      v
Multiple Node.js Servers
      |
      +------------+
      |            |
      v            v
 MongoDB       Redis
      |
      v
External Services
```

Redis can later be used for:

```text
Caching
Session management
Rate limiting
Socket.IO scaling
```

This is not required for the initial implementation.

---

# 345. Maintainability Principles

The project should follow these principles:

```text
Single Responsibility
DRY
Separation of Concerns
Reusable Components
Centralized Error Handling
Centralized Notifications
Secure Authentication
Server-Side Validation
Consistent Naming
Meaningful Git Commits
```

Every file should have a clear responsibility.

---

# 346. Naming Convention

Recommended naming:

```text
Models:
User.model.js

Controllers:
user.controller.js

Routes:
user.route.js

Middleware:
auth.middleware.js

Services:
payment.service.js

Views:
profile.ejs

Utilities:
generateUsername.js
```

Consistent naming makes the project easier to navigate.

---

# 347. Final Project Structure

The completed project is expected to follow this structure:

```text
Twitter/
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── .env
├── .gitignore
│
├── public/
│   ├── css/
│   ├── images/
│   │   └── logo/
│   └── js/
│
├── src/
│   ├── config/
│   │   ├── cloudinary.config.js
│   │   ├── db.config.js
│   │   └── razorpay.config.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── bookmark.controller.js
│   │   ├── chat.controller.js
│   │   ├── comment.controller.js
│   │   ├── donation.controller.js
│   │   ├── follow.controller.js
│   │   ├── notification.controller.js
│   │   ├── payment.controller.js
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── errorHandler.middleware.js
│   │   ├── upload.middleware.js
│   │   └── validate.middleware.js
│   │
│   ├── models/
│   │   ├── Bookmark.model.js
│   │   ├── Comment.model.js
│   │   ├── Conversation.model.js
│   │   ├── Donation.model.js
│   │   ├── Follow.model.js
│   │   ├── Like.model.js
│   │   ├── Message.model.js
│   │   ├── Notification.model.js
│   │   ├── Payment.model.js
│   │   ├── Post.model.js
│   │   └── User.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── bookmark.route.js
│   │   ├── chat.route.js
│   │   ├── comment.route.js
│   │   ├── follow.route.js
│   │   ├── notification.route.js
│   │   ├── payment.route.js
│   │   ├── post.route.js
│   │   └── user.route.js
│   │
│   ├── service/
│   │   ├── chat.service.js
│   │   ├── cloudinary.service.js
│   │   ├── notification.service.js
│   │   └── payment.service.js
│   │
│   ├── sockets/
│   │   └── chat.socket.js
│   │
│   ├── uploads/
│   │
│   └── utils/
│       ├── apiError.js
│       ├── apiResponse.js
│       ├── constant.js
│       ├── formateDate.js
│       └── generateUsername.js
│
└── views/
    ├── layouts/
    │   ├── boilerplate.ejs
    │   ├── auth-layout.ejs
    │   └── error-layout.ejs
    │
    ├── partials/
    │   ├── header.ejs
    │   ├── navbar.ejs
    │   ├── sidebar.ejs
    │   ├── rightbar.ejs
    │   ├── footer.ejs
    │   ├── flash.ejs
    │   ├── post-card.ejs
    │   ├── comment-card.ejs
    │   ├── user-card.ejs
    │   ├── notification-card.ejs
    │   ├── message-card.ejs
    │   └── modals/
    │       ├── create-post.ejs
    │       ├── edit-post.ejs
    │       ├── delete-post.ejs
    │       ├── edit-profile.ejs
    │       ├── donate.ejs
    │       └── confirm.ejs
    │
    ├── auth/
    │   ├── login.ejs
    │   ├── register.ejs
    │   └── forgot-password.ejs
    │
    ├── home/
    │   └── home.ejs
    │
    ├── post/
    │   ├── details.ejs
    │   └── edit.ejs
    │
    ├── profile/
    │   ├── profile.ejs
    │   └── edit-profile.ejs
    │
    ├── explore/
    │   └── explore.ejs
    │
    ├── notifications/
    │   └── notifications.ejs
    │
    ├── messages/
    │   ├── messages.ejs
    │   └── conversation.ejs
    │
    ├── bookmarks/
    │   └── bookmarks.ejs
    │
    ├── followers/
    │   ├── followers.ejs
    │   └── following.ejs
    │
    ├── donation/
    │   ├── donate.ejs
    │   ├── success.ejs
    │   └── failed.ejs
    │
    ├── settings/
    │   ├── settings.ejs
    │   ├── account.ejs
    │   ├── privacy.ejs
    │   └── password.ejs
    │
    └── error/
        ├── 404.ejs
        └── 500.ejs
```

---

# 348. Project Completion Checklist

The project can be considered feature-complete when the following checklist is satisfied:

```text
AUTHENTICATION
[ ] Registration
[ ] Login
[ ] Logout
[ ] Session management
[ ] Password hashing
[ ] Protected routes

PROFILE
[ ] Profile page
[ ] Edit profile
[ ] Profile picture
[ ] Cover picture
[ ] Bio
[ ] Date of birth
[ ] Location
[ ] Website

POSTS
[ ] Create post
[ ] Edit post
[ ] Delete post
[ ] Image upload
[ ] Post details
[ ] Repost
[ ] Quote repost
[ ] Share

ENGAGEMENT
[ ] Like
[ ] Unlike
[ ] Comments
[ ] Replies
[ ] Bookmark

SOCIAL
[ ] Follow
[ ] Unfollow
[ ] Followers
[ ] Following
[ ] Suggested users

DISCOVERY
[ ] User search
[ ] Post search
[ ] Hashtag search
[ ] Explore
[ ] Trending

NOTIFICATIONS
[ ] Like
[ ] Comment
[ ] Follow
[ ] Repost
[ ] Mention
[ ] Donation
[ ] Read/unread

CHAT
[ ] Conversations
[ ] Messages
[ ] Socket.IO
[ ] Typing indicator
[ ] Read status

DONATIONS
[ ] Donation modal
[ ] Razorpay order
[ ] Checkout
[ ] Backend verification
[ ] Payment record
[ ] Donation record
[ ] Donation notification

INFRASTRUCTURE
[ ] MongoDB
[ ] Cloudinary
[ ] Sessions
[ ] Error handling
[ ] Validation
[ ] Responsive UI
[ ] Git/GitHub
```

---

# 349. Running the Project

After cloning the repository:

```text
git clone <repository-url>
```

Navigate into the project:

```text
cd Twitter
```

Install dependencies:

```text
npm install
```

Create the environment file:

```text
.env
```

Add the required configuration values.

Then start the development server:

```text
npm run dev
```

For production:

```text
npm start
```

The application can then be accessed through the configured server URL.

---

# 350. Development Environment

Recommended development tools include:

```text
Node.js
MongoDB / MongoDB Atlas
VS Code
Git
GitHub
Postman
Browser Developer Tools
```

Optional tools:

```text
MongoDB Compass
Razorpay Dashboard
Cloudinary Dashboard
```

These tools make development, debugging, database inspection, and API testing easier.

---

# 351. Debugging Strategy

When a feature does not work, debug it from the outside toward the database.

Recommended order:

```text
Browser
   |
   v
Network Request
   |
   v
Route
   |
   v
Middleware
   |
   v
Controller
   |
   v
Service
   |
   v
Model
   |
   v
MongoDB
```

For example, if a like button is not working:

```text
Check JavaScript
        |
Check Request URL
        |
Check HTTP Method
        |
Check Route
        |
Check Authentication
        |
Check Controller
        |
Check Like Model
        |
Check MongoDB
```

This approach makes debugging significantly easier.

---

# 352. Project Philosophy

The project is designed around the following principles:

```text
Simple enough to understand
Modular enough to maintain
Secure enough for real-world concepts
Flexible enough to extend
Structured enough for academic evaluation
```

The architecture intentionally separates:

```text
Presentation
Business Logic
Database Logic
External Services
Real-Time Communication
```

---

# 353. Academic and Portfolio Value

This project demonstrates practical knowledge of:

```text
Node.js
Express.js
MongoDB
Mongoose
REST-style routing
MVC architecture
Authentication
Authorization
Sessions
Password hashing
File uploads
Cloud storage
Payment integration
Real-time communication
Server-side rendering
Frontend JavaScript
Bootstrap
Git/GitHub
Database relationships
API integration
```

It therefore represents more than a basic CRUD project.

---

# 354. Final System Summary

The Twitter Clone combines multiple technologies into one full-stack web application.

```text
                         USER
                          |
                          v
                       BROWSER
                          |
              +-----------+-----------+
              |                       |
              v                       v
             EJS                  JavaScript
              |                       |
              +-----------+-----------+
                          |
                          v
                       EXPRESS
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
      Middleware        Routes        Socket.IO
                          |
                          v
                     Controllers
                          |
                +---------+---------+
                |                   |
                v                   v
             Services             Models
                |                   |
        +-------+-------+           v
        |       |       |        MongoDB
        v       v       v
   Cloudinary Razorpay Notifications
```

---

# 355. Final Application Flow

The complete application can be summarized as:

```text
User
 |
 v
Browser
 |
 +--------------------+
 |                    |
 | Page Request       | Dynamic Action
 |                    |
 v                    v
Express              JavaScript
 |                    |
 v                    v
Routes              fetch()
 |                    |
 v                    v
Middleware           Express
 |                    |
 +---------+----------+
           |
           v
      Controllers
           |
     +-----+-----+
     |           |
     v           v
  Services     Models
     |           |
     |           v
     |        MongoDB
     |
 +---+-------+--------+
 |           |        |
 v           v        v
Cloudinary Razorpay Socket.IO
```

The result is a modular full-stack social media platform inspired by Twitter/X.

---

# 356. Conclusion

The Twitter Clone is designed as a complete full-stack web application using Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, Cloudinary, Razorpay, and Socket.IO.

The project follows a modular architecture in which each layer has a specific responsibility.

The major application layers are:

```text
Frontend
    ↓
Routes
    ↓
Middleware
    ↓
Controllers
    ↓
Services
    ↓
Models
    ↓
MongoDB
```

External integrations extend the system with:

```text
Cloudinary → Image Storage
Razorpay   → Payments
Socket.IO  → Real-Time Communication
```

The architecture is intentionally designed so that individual features can be developed, tested, modified, and extended independently.

The final system provides a complete social-media experience including authentication, profiles, posts, likes, comments, replies, reposts, follows, bookmarks, notifications, search, explore, real-time messaging, image uploads, and user-to-user donations.

The project can also serve as a strong portfolio project because it demonstrates practical implementation of backend architecture, database relationships, authentication, third-party APIs, real-time communication, frontend development, and production-oriented application design.

---

# 357. README Completion

This documentation now covers:

```text
Part 1 → Project Overview
Part 2 → Root Files, Configuration and Dependencies
Part 3 → Middleware and Database Models
Part 4 → Controllers and Routes
Part 5 → Services, Utilities and Socket Architecture
Part 6 → Complete EJS Views Architecture
Part 7 → Application Setup and Execution Flow
Part 8 → Feature Architecture and Database Relationships
Part 9 → Production, Testing, Security and Final Architecture
```

