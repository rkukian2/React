# NASA Picture of the Day (APOD) Project

## Introduction

The NASA Picture of the Day (APOD) project is a web application that displays NASA's Astronomy Picture of the Day. Users can view the image, read the title and description, and toggle a sidebar with more information. The image data is fetched from NASA's APOD API and cached locally for efficient loading.

## Features

- Fetch and display the NASA Astronomy Picture of the Day.
- Display the image's title and description.
- Toggle a sidebar with detailed information about the image.
- Cache the image data locally to reduce API calls and improve performance.

## Installation
- Clone the repository
- Navigate to the project directory
- Install dependencies using *npm install*
- Run the app using *npm run dev*

## Usage
- The application will automatically fetch and display the NASA Astronomy Picture of the Day when you visit the site.
- Click the info icon in the footer to toggle the sidebar, which shows more details about the picture, including the date and explanation.

## Components
- App.jsx:
    This is the main component of the application. It manages the state, including the image data, loading state, and the visibility of the sidebar. It also fetches the image data from NASA's APOD API and handles caching.
- Main.jsx:
    This component displays the main content of the page, which is the NASA Astronomy Picture of the Day.
- Footer.jsx:
    This component renders the footer, which includes the project title, the picture title, and a button to toggle the sidebar.
- SideBar.jsx:
    This component represents the sidebar that displays detailed information about the picture, including the date and explanation. It also includes a button to close the sidebar.




