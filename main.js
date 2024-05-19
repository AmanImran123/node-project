import * as readline from "readline";
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function runQuiz(quiz, quizNumber) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let score = 0;
    const shuffledQuestions = shuffleArray(quiz.questions);
    function askQuestion(index) {
        if (index < shuffledQuestions.length) {
            const question = shuffledQuestions[index];
            console.log(`Question ${index + 1}: ${question.question}`);
            for (let j = 0; j < question.options.length; j++) {
                console.log(`${j + 1}: ${question.options[j]}`);
            }
            rl.question("Enter your answer (1,2,3, etc.):", (userAnswer) => {
                const userAnswerIndex = parseInt(userAnswer.trim()) - 1;
                if (userAnswerIndex === question.correctAnswerIndex) {
                    console.log("Correct!");
                    score++;
                }
                else {
                    console.log(`Incorrect! The correct answer is: ${question.options[question.correctAnswerIndex]}`);
                }
                askQuestion(index + 1);
            });
        }
        else {
            rl.close();
            const percentageScore = (score / shuffledQuestions.length) * 100;
            console.log(`Quiz ${quizNumber} Complete! Your score: ${score}/${shuffledQuestions.length} (${percentageScore}%)`);
        }
    }
    rl.question(`Quiz ${quizNumber}: Press Enter to start the quiz...`, () => {
        askQuestion(0);
    });
}
const myQuiz = {
    questions: [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the capital of Germany?",
            options: ["Berlin", "London", "Paris", "Madrid"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the capital of Italy?",
            options: ["Rome", "London", "Paris", "Madrid"],
            correctAnswerIndex: 0,
        },
    ],
};
runQuiz(myQuiz, 1);
