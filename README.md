# Learnify

## Overview

This project is an online education platform that enables course creation and management, student enrollment, progress tracking, ratings and reviews, and email notifications. It is built using Node.js, Express.js, and MongoDB.

## Features

- Course Creation and Management
- Student Enrollment
- Progress Tracking
- Ratings and Reviews
- Email Notifications for Verification

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB
- **Email:** Nodemailer for sending emails
- **Authentication:** JWT (JSON Web Tokens)
- **ORM:** Mongoose for MongoDB interactions

## Installation

### Prerequisites

- Node.js
- MongoDB

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jimi1105/Learnify.git
    cd Learnify
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Environment Variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongo_db_connection_string  # Replace with your MongoDB connection string
    PORT=4000  # You can change the port if needed
    JWT_SECRET=your_jwt_secret  # Replace with your JWT secret key
    MAIL_USER=your_email@example.com  # Replace with your email address
    MAIL_PASS=your_email_password_or_app_password  # Replace with your email password or app-specific password
    ```

4. **Run the server:**

    ```bash
    npm start
    ```

    The server will start on the port defined in your `.env` file (default is 4000).


## Project Structure

Learnify/                                         
│                 
├── config/               
│   ├── cloudinary.js              
│   ├── database.js              
│   └── razorpay.js              
│                
├── controllers/                
│   ├── Auth.js          
│   ├── Category.js                    
│   ├── ContactUs.js                      
│   ├── Course.js              
│   ├── courseProgress.js                
│   ├── payments.js                  
│   ├── profile.js                           
│   ├── RatingandReview.js                 
│   ├── ResetPassword.js                
│   ├── Section.js                     
│   └── Subsection.js                 
│                              
├── mail/                         
│   └── templates/                
│       ├── contactFormRes.js
│       ├── courseEnrollmentEmail.js
│       ├── emailVerificationTemplate.js
│       ├── passwordUpdate.js
│       └── paymentSuccessEmail.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   ├── Category.js
│   ├── Course.js
│   ├── CourseProgress.js
│   ├── OTP.js
│   ├── Profile.js
│   ├── RatingAndReview.js
│   ├── Section.js
│   ├── SubSection.js
│   └── User.js
│
├── routes/
│   ├── Contact.js
│   ├── Course.js
│   ├── Payments.js
│   ├── profile.js
│   └── user.js
│
├── utils/
│   ├── imageUploader.js
│   ├── mailSender.js
│   └── secToDuration.js
│
├── .env
├── package.json
├── README.md
└── server.js

## API Endpoints

### Authentication

- **POST** `/api/v1/login` - Login a user
- **POST** `/api/v1/signup` - Register a new user
- **POST** `/api/v1/sendotp` - Send OTP to user email
- **POST** `/api/v1/changepassword` - Change user password
- **POST** `/api/v1/reset-password-token` - Generate reset password token
- **POST** `/api/v1/reset-password` - Reset user password

### Profile

- **DELETE** `/api/v1/deleteProfile` - Delete user account
- **PUT** `/api/v1/updateProfile` - Update user profile
- **GET** `/api/v1/getUserDetails` - Get user details
- **GET** `/api/v1/getEnrolledCourses` - Get enrolled courses
- **PUT** `/api/v1/updateDisplayPicture` - Update display picture
- **GET** `/api/v1/instructorDashboard` - Get instructor dashboard data

### Courses

- **POST** `/api/v1/createCourse` - Create a new course (Instructor only)
- **POST** `/api/v1/editCourse` - Edit a course (Instructor only)
- **POST** `/api/v1/addSection` - Add a section to a course (Instructor only)
- **POST** `/api/v1/updateSection` - Update a section (Instructor only)
- **POST** `/api/v1/deleteSection` - Delete a section (Instructor only)
- **POST** `/api/v1/addSubSection` - Add a subsection to a section (Instructor only)
- **POST** `/api/v1/updateSubSection` - Update a subsection (Instructor only)
- **POST** `/api/v1/deleteSubSection` - Delete a subsection (Instructor only)
- **GET** `/api/v1/getInstructorCourses` - Get instructor's courses
- **GET** `/api/v1/getAllCourses` - Get all courses
- **POST** `/api/v1/getCourseDetails` - Get course details
- **POST** `/api/v1/getFullCourseDetails` - Get full course details
- **POST** `/api/v1/updateCourseProgress` - Update course progress (Student only)
- **DELETE** `/api/v1/deleteCourse` - Delete a course

### Categories

- **POST** `/api/v1/createCategory` - Create a category (Admin only)
- **GET** `/api/v1/showAllCategories` - Get all categories
- **POST** `/api/v1/getCategoryPageDetails` - Get category page details

### Ratings and Reviews

- **POST** `/api/v1/createRating` - Add a rating (Student only)
- **GET** `/api/v1/getAverageRating` - Get average rating
- **GET** `/api/v1/getReviews` - Get all reviews

### Payments

- **POST** `/api/v1/capturePayment` - Capture a payment (Student only)
- **POST** `/api/v1/verifyPayment` - Verify a payment (Student only)
- **POST** `/api/v1/sendPaymentSuccessEmail` - Send payment success email (Student only)

### Contact

- **POST** `/api/v1/contact` - Contact us form submission
