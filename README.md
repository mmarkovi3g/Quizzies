# Quizzies app

## Important: <br>

I am working on this project independently from internet - which means without using Google, Chat GPT, YouTube videos, and the like. While learning React.js through Jonas Schmedtmann's course, I have learned to use it on my own and implement it in the project. Most of the other projects I have on my GitHub account are primarily from courses where I followed a "watch and write" approach. This is my independent project for which I do not seek help on the internet but strive to be creative and design different parts of the application by breaking down problems into smaller components and challenges. </b>

## Description: <br>

I am developing the "Quizzies" quiz application because I am a fan of pub quizzes. The main point of the application is to generate a random quiz each time a user decides to play a quiz. The user can choose the number of questions in the quiz and categories before starting the quiz. The questions are currently stored in a JSON file, and I have generated them in that format using ChatGPT. Each quiz is a separate object with one or more categories. After the user selects the options, a "Quizzie" is initiated – my fictional name for an instance of the game. The specificity is that each Quizzie is different and depends on the settings chosen by the user. Currently, for testing purposes, I have only a few categories, and it is possible to choose one category or get questions from all categories. In the future, the goal is (and it's easily achievable) to be able to select multiple categories. <br>

Once the user starts the quiz, the application filters questions from the JSON file based on the user's input. It is important to note that the questions are random and depend solely on the category chosen by the user. At the end of the quiz, the user has the option to see incorrect answers and start the quiz again. <br>

In the future, I plan to integrate smarter algorithms into the application to enhance the user experience. I have many ideas in mind, but currently, my full-time job and various other personal commitments and side projects are preventing me from completing the application quickly. <br>

Some of the ideas include: user login functionality, adding a question database, tracking questions that the user has already seen and filtering based on that for a better user experience. Logging user's incorrect answers and adding hints. Implementing countdown timers for questions. Incorporating achievements and badges for users. Allowing users to contribute their own questions to the database, and more. <br>

I hope to have the application ready by March 2024. <br>



## Milestones and goals in developement procces: <br>

### Legend: <br>

✔️ - milestone achieved <br>
🕗 - in procces <br>
⚠️ - important next milestone <br>
❓ - need to learn more to achieve goal <br>

## Currently working on:

✔️ Import at least 30 quizzie questions a day into JSON file questions.json <br>
✔️ Add functionality to filter Quizzie questions from different categories <br>
✔️ Add functionality to start new Quizzie after completion <br>
🕗 Review added questions manually <br>
✔️ Create separate app for removing duplicate questions from JSON file <br>
✔️ User inputs category and number of question - App generates random Quizzie based on input values <br>
✔️ Questions can't be repeated in same Quizzie <br>
✔️ User plays the quizz and gets points for correct answers <br>
✔️ Added icon according to quizz category <br>
✔️ Store questions and correct answers into array / object and render results at the end of Quizzie <br>
✔️ Implement algorithm for filtering duplicate questions (i do this manually with some script) <br>
⚠️ Optional - change color scheme for diferent categories (sounds fun) <br>
⚠️ Create visual identity for Quizzies website (logo, colors) <br>
⚠️ Recreate entire CSS by using better aproach (this should be done after completing all logic in app) <br>
🕗 Add more categories (added: Movies, ...) <br>
⚠️ Add better algorithm for Quizzie creation (based on number of categories) <br>
🕗 Refactor the code - it seems to me that it is too complicated right now (break into smaller components, rewrite variables) <br>
🕗 See if there is a way to lower number of props in each component <br>
⚠️ Add timer on Quizzie according to number of questions (at the end of timer end quizzie) <br>

### Extra features: <br>

(need to learn backend, publish Quizzies and optionaly create native app) <br>

❓ Publish Quizzies after creating backend <br>
❓ Points are being added to general user score after each quizzie (need database for this) <br>
❓ User can create questions in app and send them to the server where it will be reviewed and added to the main list of question <br>
❓ User can review existing questions and rate easy / medium / hard questions <br>
⚠️ Improve on algorythm for generating random questions - reduce repeated question on user expirience <br>
❓Enhace user expirience by creating quizz scores / profile sites / badges according to categories <br>
❓User can login and the score can be saved with login data (need server and backend knowledge for this) <br>
❓Achievements - user gets achievements based on activity <br>
❓Create multiple types of questions (eg. with images, right or wrong) <br>
❓Add wikipedia reference on certain topics after the quizz have been completed (maybe based on incorect questions) <br>
❓Mobile version with React native - Android <br>
