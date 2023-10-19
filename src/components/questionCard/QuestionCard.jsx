import React, { useEffect, useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ questions, score, setScore, count, setCount, modal, setModal }) => {
    const [remainingTime, setRemainingTime] = useState(5);

    useEffect(() => {
        const handleTimer = () => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1);
            }
            if (remainingTime === 0 && count < 10) {
                setCount(count + 1);
                setRemainingTime(5);
            } else if (count >= 10) {
                setModal(true);
            }
        };

        const timer = setInterval(handleTimer, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [remainingTime, count, setCount, setModal]);

    if (questions.length === 0) {
        return <div>Questions loading, please wait...</div>;
    }

    const handleAnswerClick = (answer) => {
        if (answer === questions[count].correct_answer) {
            setScore(score + 100);
        }
        if (count === 9) {
            setModal(true);
        }
        if (count < 9) {
            setCount(count + 1);
        }
        setRemainingTime(5);
    };

    return (
        <div className='questionCard'>
            <div className='questionCard__timer'>{remainingTime}</div>
            <div style={{ cursor: "help" }} className='questionCard__title'>
                {`${count + 1}/10 - ${questions[count]?.question}`}
            </div>
            {questions[count]?.answers.map((answer, i) => (
                <button
                    key={i}
                    className='answer'
                    style={{ cursor: "pointer" }}
                    onClick={() => handleAnswerClick(answer)}
                >
                    {answer}
                </button>
            ),)}
        </div>
    );
};

export default QuestionCard;
