import React from 'react';
import imglogin from "../../imgs/imglogin.png"
import logoBorboleta from "../../imgs/logo.svg"
import "../../css/style.css"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage" style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div className="containerImg">
        <img src={imglogin} className="imgLogin" alt="imagem de login" />
      </div>
      <div className="containerLogin" style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <img src={logoBorboleta} className="logoImg" alt="logo borboleta" />
        </div>
        <div>
          <h1>Fique por dentro de tudo que está acontecendo no mundo</h1>
          <h2>Inscreva-se no Twitok agora mesmo.</h2>
        </div>
        <div className="buttonsCenter">
          <div className="buttonsRegisterBoxHome">
          <Link to="/register">
            <button className="registerButtonHome" type="button">Inscreva-se</button>
          </Link>
            <p style={{ fontSize: '11px' }}>Ao se inscrever, você concorda com os <a href>Termos de Serviço</a> e a <a href>Política de Privacidade</a>, incluindo o <a href>Uso de Cookies</a>.</p>
          </div>
          <div className="buttonsLoginBoxHome">
            <p style={{ fontSize: 'larger' }}><b>Já tem uma conta?</b></p>
            <Link to="/login">
            <button className="loginButtonHome" type="button">Entrar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
