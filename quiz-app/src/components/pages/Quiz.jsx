import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AllQuestions from '../../utilities/AllQuestions';

function Quiz() {

    // const [questions, setQuestions] = useState('');
    // const navigate = useNavigate();

    // const token = localStorage.getItem("token");
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    // axios
    //     .get('http://127.0.0.1:8000/api/question', config)
    //     .then((res) => {
    //         console.log(res);
    //         let questions = res.data.question
    //         console.log(questions);

    //         questions.forEach(element => {
    //             console.log(element.question);
    //         });
    //         setQuestions(res.data.question[0].question);
    //         // if (res.status === 201) {
    //         //     setError({
    //         //         status: true,
    //         //         message: 'Question Add Sucessfully'
    //         //     });
    //         //     setQuestion('');
    //         //     setOption1('');
    //         //     setOption2('');
    //         //     setOption3('');
    //         //     setOption4('');
    //         //     document.getElementById("addQuestion-btn").disabled = false;
    //         // }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         // localStorage.removeItem("token");
    //         // localStorage.removeItem("user");
    //         // navigate('/login');
    //     });

    return (<>
        <div className="container">
            <AllQuestions />
        </div>
    </>);
}

export default Quiz