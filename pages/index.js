import { useEffect, useState } from "react";
import Head from "next/head";
import { Toast } from "react-bootstrap";
export default function Home() {
	const [progress, setProgress] = useState(50);
	const [question, setQuestions] = useState(testResponse[0]);
	const [answer, setAnswer] = useState("Select Answer");
	const [show, setShow] = useState(false);
	const [statusMessage, setStatusMessage] = useState(
		"Incorrect. Please choose another answer."
	);
	const [variant, setVariant] = useState("danger");

	const getQuestions = () => {
		fetch("https://the-trivia-api.com/api/questions?limit=1&region=ZA")
			.then((response) => response.json())
			.then((question) => {
				setQuestions(
					Array(question[0]).sort(() => Math.random() - 0.5)[0]
				);
			});
	};
	useEffect(() => {
		getQuestions();
	}, []);
	const checkAnswer = async (option) => {
		if (option == question.correctAnswer) {
			setAnswer(
				`Congratulations. The answer is ${question.correctAnswer}`
			);
			setStatusMessage(
				"Correct. You have answered the question correctly."
			);
			setShow(true);
			setVariant("success");
			await new Promise((resolve) => setTimeout(resolve, 3000));
			getQuestions();
			return;
		}
		setAnswer("Incorrect. Try again");
		setStatusMessage("Incorrect. Please choose another answer.");
		setVariant("danger");
		setShow(true);
	};
	return (
    <div>
      <Head>
        <title>Quiz App</title>
        <link rel="icon" href="/vercel.svg" />
        
      </Head>
			<Toast
				onClose={() => setShow(false)}
				bg={variant}
				style={{ position: "fixed", right: "0px", color: "white" }}
				show={show}
				delay={3000}
				autohide
			>
				<Toast.Body>{statusMessage}</Toast.Body>
			</Toast>
			<h1 className='text-3xl text-center text-slate-800'>Quiz</h1>

			<div className='border-spacing-1 border-red-300 border-2 mb-3 bg-slate-500 text-white'>
				<span className='flex justify-center'>
					There is a question below with possible answers. Select an
					answer below. The questions change every 10 seconds.
				</span>
			</div>
			<div
				title='Question'
				className='flex justify-center pt-20 pb-20 rounded-sm border-2 bg-slate-200 border-red-500 hover:bg-orange-200 font-mono shadow-md'
			>
				<div>{question.question}</div>
			</div>
			<div className='pt-5 flex justify-between'>
				<div
					title='Possible answer.'
					className='pr-20 pt-20 pb-20 rounded-sm border-2 border-red-500 text-center pl-20 hover:bg-orange-100 font-mono drop-shadow-lg cursor-pointer'
					onClick={() => checkAnswer(question?.incorrectAnswers[0])}
				>
					{question?.incorrectAnswers[0]}
				</div>
				<div
					title='Possible answer.'
					className='pr-20 pt-20 pb-20 rounded-sm border-2 border-red-500 pl-20 hover:bg-orange-100 font-mono drop-shadow-xl cursor-pointer'
					onClick={() => checkAnswer(question?.incorrectAnswers[1])}
				>
					{question?.incorrectAnswers[1]}
				</div>
				<div
					title='Possible answer.'
					className='pr-20 pt-20 pb-20 rounded-sm border-2 border-red-500 pl-20 hover:bg-orange-100 font-mono drop-shadow-lg cursor-pointer'
					onClick={() => checkAnswer(question?.correctAnswer)}
				>
					{question?.correctAnswer}
				</div>
				<div
					title='Possible answer.'
					className='pr-20 pt-20 pb-20 rounded-sm border-2 border-red-500 pl-20 hover:bg-orange-100 font-mono drop-shadow-lg cursor-pointer'
					onClick={() => checkAnswer(question?.incorrectAnswers[2])}
				>
					{question?.incorrectAnswers[2]}
				</div>
			</div>
			<div className='flex justify-center'>
				<button
					onClick={getQuestions}
					className='bg-slate-700 w-20 h-7 text-white rounded-full mt-5'
				>
					Skip
				</button>
			</div>
		</div>
	);
}
const testResponse = [
	{
		category: "Science",
		id: "624334f8cfaae40c12961479",
		correctAnswer: "A Piglet",
		incorrectAnswers: ["A Maggot", "A Cygnet", "A Colt"],
		question: "What is the word for a young pig?",
		tags: ["animals", "words", "science"],
		type: "Multiple Choice",
		difficulty: "easy",
	}
];
