# Quiz Whizz

Quiz Whizz is a web application that allows players to test their knowledge by taking quizzes on various topics. It provides an interactive quiz experience with customizable settings and a leaderboard to track and compare scores with other players.

## Technologies Used

- HTML: The markup language used for structuring the application's content.
- CSS: The stylesheet language used for styling the application's appearance.
- JavaScript: The programming language used for adding interactivity and logic to the application.
- React.js: A JavaScript library for building user interfaces.
- React Router: Enables navigation and routing functionality in the application.
- Material-UI: A popular React UI framework for designing responsive and visually appealing components.
- Axios: A promise-based HTTP client for making API requests.
- Firebase: A backend-as-a-service platform used for storing player names and leaderboard data.
- Vite: A fast build tool for modern web development.

## Deployed Link

The application is deployed and can be accessed at: [Quiz Whizz](https://64b0885180313555399f9379--peppy-swan-96d8e4.netlify.app/)

## Features

- **Player Name Storage**: Allows players to enter their name, which is stored in Firebase for future reference.
- **Leaderboard**: Displays the highest scores achieved by players, allowing them to compare their performance with others.
- **Settings Page**: Enables players to select the quiz category, difficulty level, question type, and number of questions.
- **Quiz Page**: Presents quiz questions based on the player's selected settings.
- **Score Tracking**: Keeps track of the player's score as they answer questions.

## Getting Started

To run Quiz Whizz locally, follow these steps:

1. Clone the repository: `git clone <https://github.com/sambidrana/quiz-wizard>`
2. Navigate to the project directory: `cd quiz-whizz`
3. Install the dependencies: `npm install`
4. Set up Firebase:
   - Create a Firebase project on the Firebase console (https://console.firebase.google.com/).
   - Enable the Firebase Realtime Database.
   - Configure the Firebase SDK by adding your Firebase project credentials to the application.
5. Start the development server: `npm start`
6. Open your browser and visit: `http://localhost:3000`


## Usage

1. On the landing page, enter your player name.
2. Click on the "Get Started" button to navigate to the settings page.
3. Customize your quiz settings by selecting the category, difficulty, type, and number of questions.
4. Submit the form to start the quiz.
5. Answer the questions presented one by one and click on the respective options.
6. After answering all the questions, you will be redirected to the result page, which displays your score.
7. You can also view the leaderboard to see the highest scores achieved by other players.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

