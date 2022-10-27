import axios from "axios";
import { useEffect, useState } from "react";

function AllQuestions() {

    const [questions, setQuestions] = useState([]);



    useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios
            .get('http://127.0.0.1:8000/api/question', config)
            .then((res) => {
                setQuestions(res.data.question)
                // allQ.forEach((data) => {
                //     console.log(data.answers);
                // })

                // let qq = [];h

                // allQ.forEach(element => {
                //     // setQuestions(questions + ' | ' + element.question);
                //     qq.push(element.question + '|');
                // });
                // console.log(qq);
                // console.log(String(qq));
                // setQuestions(qq);
            })
            .catch((err) => {
            });
    }, [])


    return (
        <>
            <div>
                HEAD
                {console.log(questions.sort(function (a, b) { return 0.5 - Math.random() }))}

                {questions.map((element, key) => {
                    // console.log(element);
                    return (
                        <div key={key}>
                            <div>{element.id + " === " + element.question}</div>
                            {/* <div>{element.answers}</div> */}
                            {console.log(element.answers)}
                            {/* {element.answers.sort((a, b) => 0.5 - Math.random())} */}
                            {/* {console.log(element.answers.sort(function (a, b) { return a.option - b.option }))} */}
                            {console.log(element.answers.sort(function (a, b) { return 0.5 - Math.random() }))}
                            {/* {console.log(element.answers.sort())} */}

                            {element.answers.map((ans, key) => {
                                return (
                                    <div key={key}>
                                        <div>{ans.id + " | " + ans.answer}</div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default AllQuestions