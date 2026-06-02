# GitHub Profile Finder

A simple and responsive web application that allows users to search for GitHub profiles and view their details using the GitHub API.

## Features

* Search GitHub users by username
* Display profile picture
* Show name and bio
* Display followers count
* Display following count
* Display public repositories count
* Error handling for invalid usernames
* Search using both button click and Enter key
* Responsive and modern UI

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* GitHub REST API
* XMLHttpRequest (AJAX)

## How It Works

1. Enter a GitHub username.
2. Click the Search button or press Enter.
3. The application sends a request to the GitHub API.
4. User profile information is fetched and displayed on the screen.
5. If the username does not exist, an error message is shown.

## Project Structure

```text
├── GithubProfileFinder.html
├── GithubProfileFinder.css
└── GithubProfileFinder.js
```

## API Used

GitHub Users API:

```text
https://api.github.com/users/{username}
```

Example:

```text
https://api.github.com/users/isinghabhii
```

## Learning Outcomes

Through this project, I learned:

* DOM Manipulation
* Event Handling
* API Integration
* AJAX Requests
* JSON Parsing
* Error Handling
* Responsive UI Design

## Future Improvements

* Add loading spinner
* Display user location
* Show company and website information
* Display top repositories
* Add dark/light mode toggle
* Use Fetch API instead of XMLHttpRequest

## Author

Abhishek Singh

## License

This project is open source and available under the MIT License.
