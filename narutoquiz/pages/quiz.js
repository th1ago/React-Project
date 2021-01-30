import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

export default function QuizDaGaleraPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo>
          <Widget>
            <Widget.Header>
              <h3>
                Pergunta
                1
                de
                {`${db.questions.length}`}
              </h3>
            </Widget.Header>
            <img alt="descricao" style={{ width: '111%', height: '151px' }} src="https://placehold.it/411x411" />
            <Widget.Content>
              <h2>Titulo</h2>
              <p>Descricao</p>
            </Widget.Content>
          </Widget>
        </QuizLogo>
      </QuizContainer>
    </QuizBackground>
  );
}
