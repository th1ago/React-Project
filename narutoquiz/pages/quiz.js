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

export default function QuizPage() {
  const question = db.questions[0];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {/* <BackLinkArrow href="/" /> */}
            <h3>
              Pergunta
              1
              de
              {`${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img alt="descricao" style={{ width: '100%', height: '150px', objectFit: 'cover' }} src="https://placehold.it/400x400" />
          <Widget.Content>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <Button>
              Confirmar
            </Button>
          </Widget.Content>
        </Widget>
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
