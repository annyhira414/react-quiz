import { useParams, useNavigate } from "react-router-dom";
import { useState, useReducer, useEffect } from "react";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import useQuestions from "../../hooks/useQuestions";
import _ from "lodash";
import {useAuth} from "../../contexts/AuthContext"
import { getDatabase, set ,  ref } from "firebase/database";

// userReducer e kaj gula
// action mulotu ai jaiya akta objcet r type property maje ai action ta ache 13
// case - firerbase thke date acher por amre akta copy banayte hobe and sob gulo flase banate hobe

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "question":
      action.value.forEach((questions) => {
        questions.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const question = _.cloneDeep(state);
      question[action.questionID].options[action.optionIndex].checked =
        action.value;

      return question;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
   const {currentUser} = useAuth();

   const navigate =  useNavigate();

  useEffect(() => {
    dispatch({
      type: "question",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

   // handle when the user clicks the next button to get the next button 
 function nextQuestion(){
  //  
  if(currentQuestion + 1 < questions.length){
    setCurrentQuestion((prevCurrent) => prevCurrent + 1);
  }
 }

 
   // handle when the user clicks the next button to get the next button 
   function prevQuestion(){
    if(currentQuestion >= 1 && currentQuestion <= questions.length){
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
   } 

   // submit Quiz
   async function submit(){
      const {uid} = currentUser;  // get from firebase
      const db = getDatabase();

      const resultRef = ref(db , `result/${uid}`); 

      await set(resultRef, {
        [id]: qna
      });
      // navigate("/");
      // navigate to=`/result &{id}`  state={qna} ;
     navigate(`/result/${id}`, {state:{qna,}})
   }
  

const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0 ;


  return (
    <>
      {loading && <div>Loading ..</div>}
      {error && <div>there is a error</div>}
      {!loading && !error && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}
        
          </h1>
        

          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handerChange={handleAnswerChange}
          />
          <ProgressBar next={nextQuestion} 
           prev = {prevQuestion}  
           submit={submit}
           progress ={percentage}
           />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
