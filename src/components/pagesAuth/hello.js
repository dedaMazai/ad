import React from 'react';
import {Jumbotron, Row, Col, Container} from 'reactstrap';

import './css/hello.css';
function Hello() {
const text1 = 'А ещё базовые сценарии поведения пользователей являются только методом политического участия и преданы социально-демократической анафеме. Как принято считать, элементы политического процесса превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
      text2 = 'Для современного мира понимание сути ресурсосберегающих технологий требует определения и уточнения анализа существующих паттернов поведения. Как принято считать, явные признаки победы институционализации формируют глобальную экономическую сеть и при этом - своевременно верифицированы.',
      text3 = 'Реплицированные с зарубежных источников, современные исследования будут преданы социально-демократической анафеме. А также независимые государства, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы. Внезапно, ключевые особенности структуры проекта набирают популярность среди определенных слоев населения, а значит, должны быть ограничены исключительно образом мышления.';
    return (
        <Jumbotron  className="hello">
            <Container>
                <Row  className="justify-content-center">
                    <h1 className="display-4">Добро пожаловать!</h1>
                    <Row>
                        <Col xs="6"><p className="lead">{text1}</p></Col>
                        <Col xs="6"><p className="lead">{text2}</p></Col>
                    </Row>
                    <p className="lead">{text3}</p>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Hello;