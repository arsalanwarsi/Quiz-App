import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequiredField from "../ErrorMessage";

function AddQuestion() {

    const navigate = useNavigate();
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [error, setError] = useState({
        status: false,
        message: ''
    });

    const submitForm = (e) => {
        e.preventDefault();

        if (question === '' | option1 === '' | option2 === '' | option3 === '' | option4 === '') {
            setError({
                status: true,
                message: 'All fields are required.'
            });
        }
        else {
            document.getElementById("addQuestion-btn").disabled = true;

            setError({
                status: false,
                message: ''
            });

            const sub_question = {
                question,
                option1,
                option2,
                option3,
                option4
            }

            const token = localStorage.getItem("token");
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .post('http://127.0.0.1:8000/api/question', sub_question, config)
                .then((res) => {
                    if (res.status === 201) {
                        setError({
                            status: true,
                            message: 'Question Add Sucessfully'
                        });
                        setQuestion('');
                        setOption1('');
                        setOption2('');
                        setOption3('');
                        setOption4('');
                        document.getElementById("addQuestion-btn").disabled = false;
                    }
                })
                .catch((err) => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    navigate('/login');
                });
        }
    }

    return (<>
        <div className="container">
            <form className=" row g-5 mt-4" action="" onSubmit={submitForm}>
                <div className="col-md-12 mt-3">
                    <label htmlFor="question" className="form-label">Question</label>
                    <input type="text" className="form-control" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="option1" className="form-label">Correct Answer</label>
                    <input type="text" className="form-control bg-correct" id="option1" value={option1} onChange={(e) => setOption1(e.target.value)} />
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="option2" className="form-label">Option</label>
                    <input type="text" className="form-control" id="option2" value={option2} onChange={(e) => setOption2(e.target.value)} />
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="option3" className="form-label">Option</label>
                    <input type="text" className="form-control" id="option3" value={option3} onChange={(e) => setOption3(e.target.value)} />
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="option4" className="form-label">Option</label>
                    <input type="text" className="form-control" id="option4" value={option4} onChange={(e) => setOption4(e.target.value)} />
                </div>
                {error.status ? <RequiredField message={error.message} /> : ''}
                <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary" id="addQuestion-btn">Add Question</button>
                </div>
            </form>
        </div>
    </>);
}

export default AddQuestion