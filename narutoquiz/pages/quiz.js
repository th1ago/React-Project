import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio LOading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestion, questionIndex }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestion}`}          
        </h3>
      </Widget.Header>
      <img alt="descricao" style={{ width: '100%', height: '150px', objectFit: 'cover' }} src={question.image} />
      
      <form>
        {question.alternatives.map((alternative, alternativeIndex) => {
          const alternativeId = `question__${questionIndex}`;
          return (
            <Widget.Topic as="label" htmlFpr={alternativeId}>
                <input id={alternativeId} name={questionId} type="radio">
                </input>
                {alternative}              
            </Widget.Topic>
          )
        })}
      </form>
      
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Button type="submit">
          Confirmar
        </Button>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'Quiz',
  LOADING: 'Loading',
  RESULT: 'Result'
}


export default function QuizPage() {
  const [screenState, setScreenState] = React.useEffect(screenStates.LOADING)
  const totalQuestion = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenState === screenStates.QUIZ)
    }, 1 * 1000);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg_quiz}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStats.QUIZ && (
        <QuestionWidget
          question={question} 
          totalQuestion={totalQuestion}
          questionIndex={questionIndex}
        />)}
        {screenState === screenStates.QUIZ && <LoadingWidget />}
      </QuizContainer>
    </QuizBackground>
  );
}
