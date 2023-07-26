# JavaScript Quiz
The JavaScript Quiz is a simple quiz application built using JavaScript, HTML, and CSS. It presents users with a series of multiple-choice questions and tracks their score and time limit for completing the quiz. Users can save their scores and initials for future reference.

## How to Use
Download or clone the project to your local machine.

Open the index.html file in your web browser.

Click the "Start Quiz" button to begin the quiz.

Read each question carefully and select the correct answer by clicking on the corresponding option.

The timer will start counting down from 60 seconds, and each incorrect answer will result in a 10-second time penalty.

After answering all the questions or when the time runs out, the quiz will end, and your final score will be displayed.

You will be prompted to enter your initials, and your score will be saved in the local storage along with other high scores.

To restart the quiz, click the "Restart Quiz" button.

### File Structure
arduino
Copy code
├── index.html            // Main HTML file for the quiz application
├── assets
│   ├── css
│   │   └── style.css     // CSS file for styling the quiz interface
│   └── js
│       └── script.js     // JavaScript file containing the quiz logic
#### Customization
You can customize the quiz by adding more questions to the questions array in the script.js file. Each question object should have a prompt (the question text) and a correctanswer (the correct option).

You can also modify the time limit for the quiz by changing the timeLimit variable in the script.js file.

##### Credits
This JavaScript Quiz application was created as a learning project and is built using HTML, CSS, and JavaScript. The design and code are inspired by various online tutorials and resources.

######License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

Feedback and Contributions
If you have any feedback, suggestions, or would like to contribute to this project, please feel free to create an issue or submit a pull request.

Enjoy the JavaScript Quiz! Happy coding!
