import React, { Component } from 'react'
import logoBorboleta from "../../imgs/logo.svg"
import "../../css/style.css"
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const { username, email, password} = this.state;
    console.log(username, email, password)
    fetch("http://localhost:3000/register", {
      method:"POST",
      crossDomain:true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body:JSON.stringify({
        username,
        email,
        password
      })
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister")
      })
  }
  render() {
    return (
      <div className="modalRegister" >
      <div className="boxModal" style={{flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div className="backBox">
          <Link to="/">
            <button className="backButtonRegister" id="backButton" type="button">X</button>
          </Link>
          </div>
          <div className="imgLogoBox">
            <img src={logoBorboleta} className="logoImg" alt="logo borboleta" />
          </div>
        </div>
        <p>Crie sua conta do Twitok</p>
        <div className="formUser">
          <label htmlFor="userUsername">Nome de usuário</label>
          <input className="userUsername" type="text" name="usernameForm:user" id="formControl" placeholder="Digite seu nome de usuário" onChange={(e)=> this.setState({username:e.target.value})}/>
          <label htmlFor="userEmail">Email</label>
          <input className="userEmail" type="text" name="emailForm:user" id="formControl" placeholder="Digite seu email" onChange={(e)=> this.setState({email:e.target.value})}/>
          <label htmlFor="userPassword">Senha</label>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <input className="userPassword" type="password" name="passwordForm:user" id="formControl" placeholder="Digite sua senha" onChange={(e)=> this.setState({password:e.target.value})}/>
            <i className="far fa-eye" id="togglePassword" />
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <input className="userValidationPassword" type="password" name="passwordValidationForm:user" id="formControl" placeholder="Confirme sua senha" />
            <i className="far fa-eye" id="toggleValidationPassword" />
          </div>
          <div className="buttonsRegisterBox">
            <button className="registerButton" type="button" onClick={this.handleSubmit}>Inscreva-se</button>
            <p style={{fontSize: '11px'}}>Ao se inscrever, você concorda com os <a href>Termos de Serviço</a><br /> e a <a href>Política de Privacidade</a>, incluindo o <a href>Uso de Cookies</a>.</p>
          </div>
        </div>
      </div>
    </div>
    )}
}
