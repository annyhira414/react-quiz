import Analysis from  "../Analysis";
import Summary from "../Summary";
import { useLocation, useParams} from 'react-router-dom';
import useAnswers from "../../hooks/useAnswers";
import _ from "lodash";

export default function Result(){
    const {state} = useLocation()

    // console.log('localll', state);
    const {id} = useParams();
    // const {loaction} = useNavigate();
    // const {state} = loaction;
    const {qna} = state;
    const {loading , error, answers} = useAnswers(id); 

    console.log(answers);

    function calcutate(){
        let score = 0;
        answers.forEach((question,index1) =>{
            let correctIndexes = [],
            checkedIndexes = [];

            question.options.forEach((option,index2) =>{
                if(option.correct) correctIndexes.push(index2);
                if(qna[index1].options[index2].checked){
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });

            // same 2 array ?
            if(_.isEqual(correctIndexes ,checkedIndexes)){
                score = score + 5;
            }
        });
        return score;  
    }

    const userScore = calcutate();
    return(
        <>
        {loading && <div>Loading...</div>}
        {error && <div>there is an error</div>}
        {answers && answers.length > 0 && (
       <>
        <Summary  score ={userScore} noq={answers.length}/>
        <Analysis answers ={answers}/>
        </>
        )}
        </>
    )
}