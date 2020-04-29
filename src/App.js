import React from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import logo from './img/logo-line.svg';
import apple from './img/app-store.svg';
import android from './img/google-play.svg';
import phone from './img/phonee.png';
import './App.css';

function App() {
  return (
    <Grid fluid>
      <Row>
        <Col xs={6} md={6}>
          <div className="logo">
            <h1>Krooppa</h1>
            <img className="logo-img" src={logo} alt="krooppa-logo"/>
          </div>
        </Col>
        <Col xs={6} md={6}>
          <div className="social">
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,164,216,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/krooppa.app/" size="30" />
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(44,164,216,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/Krooppa-107644890931234/" size="30" />
          </div>
        </Col>
      </Row>
      <Row>
        <div className="mainPhrase">
            ¿Aburrido? ¡Haz planes con Krooppa!
        </div>
      </Row>
      {/*
      <Row>
        <Col sm={12} md={6}>
          <div className="phrases">
            Únete a un plan y diviértete con nuevos amigos
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="phrases">
            Coordina tus actividades de manera fácil desde la app
          </div>
        </Col>
      </Row>
      */}
      <Row>
        <Col xs={1} md={3}>
        </Col>
        <Col xs={10} md={6}>
          <div className="device">
            <img className="device-img" src={phone} alt="device">
            </img>
          </div>
        </Col>
        <Col xs={1} md={3}>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6}>
          <div className="market-apple">
          <a href="https://apps.apple.com/co/app/krooppa/id1507643467" target="_blank" rel="noopener noreferrer"><img className="markets-img" src={apple} alt="app-store"/></a>
          </div>
        </Col>
        <Col xs={6} md={6}>
          <div className="market-google">
            <a href="/"><img className="markets-img" src={android} alt="play-store"/></a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <footer></footer>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
