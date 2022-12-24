# Youtube-clone-using-API-

This web app is a clone of the site YouTube and is made with javascript the YouTube Data API v3. On here, you are able to search for videos, watch videos and see the comments for the videos. The goal of this project was to clone YouTube as closely and as accurately as possible to showcase my ability to take a wireframe or template and translate that into a functioning and visually identical web app.

![Screenshot (285)](https://user-images.githubusercontent.com/72680556/188513892-41d062b4-c262-471a-8f90-96e3854c06ea.png)

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<pre>
<code> git clone </code>
</pre>

# Setting Up the YouTube API Key
In order to use the YouTube Data API, you will need to obtain an API key from Google Cloud Console. To do this, follow these steps:

Go to the Google Cloud Console
Click the project drop-down and select or create the project that you want to use for the YouTube API.
Click the hamburger menu and select APIs & Services > Credentials.
On the Credentials page, click Create credentials > API key.
The API key created dialog displays your newly created API key.
Click Close.
The new API key is listed on the Credentials page under API keys.
To restrict the API key for use with the YouTube Data API, set the API restrictions.
Once you have obtained an API key, you will need to set it as an environment variable on your machine. To do this, open the .env file in the root directory of the project and add the following line, replacing YOUR_API_KEY with your actual API key:

<pre>
<code>YOUTUBE_API_KEY=YOUR_API_KEY </code>
</pre>

# License
This software is license under the Youtube license.


