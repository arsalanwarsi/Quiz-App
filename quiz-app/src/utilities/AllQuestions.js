import axios from "axios";
import { useEffect, useRef, useState } from "react";

function AllQuestions() {

    const [questions, setQuestions] = useState([]);

    const qqq = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios
            .get('http://127.0.0.1:8000/api/question', config)
            .then((res) => {
                if (res.status === 200) {
                    setQuestions(res.data.question);
                }
            })
            .catch((err) => {
            });
    }, []);

    const handleAnswer = (e) => {

        const element = document.getElementsByClassName(e.target.dataset.question)[0];
        // const el2 = qqq.current;

        const radioBtn = document.getElementsByName(e.target.name);
        radioBtn.forEach((data, key) => {
            data.disabled = true
        })

        if (e.target.dataset.option === '1') {
            console.log("Correct");
            element.innerHTML = "Correct Answer";

        } else {
            console.log("Wrong");
            element.innerHTML = "Wrong Answer";
        }

        element.style.display = "block";
    }


    return (
        <>
            <div>
                {questions.sort(function (a, b) { return 0.5 - Math.random() }).map((question, key) => {
                    return (
                        <div className="mb-4 quiz-question" key={key}>
                            <h5>Question {key + 1}</h5>
                            <p>{question.question}</p>
                            {question.answers.sort(function (a, b) { return 0.5 - Math.random() }).map((answer, key) => {
                                return (
                                    <div className="form-check" key={key}>
                                        <input className="form-check-input" type="radio" name={"question" + question.id} id={"question" + question.id + key} data-option={answer.option} data-question={"question-" + question.id} onClick={handleAnswer} />
                                        <label className="form-check-label" htmlFor={"question" + question.id + key}>
                                            {answer.answer}
                                        </label>
                                    </div>
                                );
                            })
                            }
                            {/* {userAnswer.status ? <div><p>{userAnswer.message}</p></div> : ''} */}
                            <div className={"question-" + question.id + " ans-val"} ref={qqq}>
                                -
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default AllQuestions