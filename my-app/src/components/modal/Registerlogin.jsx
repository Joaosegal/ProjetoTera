import React, { Component } from 'react'
import logoBorboleta from "../../imgs/logo.svg"
import "../../css/style.css"
import { Link } from "react-router-dom";

export default class RegisterLogin extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:""
    }
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const { username, password} = this.state;
    console.log(username, password)
    fetch("http://localhost:3000/login", {
      method:"POST",
      crossDomain:true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body:JSON.stringify({
        username,
        password
      })
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister")
        if (data.status == "ok") {
          alert("login realizado")
          window.localStorage.setItem("token", data.data)
          window.location.href="./Feed"
        }
      })
  }
  render() {
    return (
    <div className="modalLogin">
        <div className="boxModal" style={{ flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'5%' }}>
            <div className="backBox">
            <Link to="/">
              <button className="backButtonLogin" id="backButton" type="button">X</button>
            </Link>
            </div>
            <div className="imgLogoBox">
              <img src={logoBorboleta} className="logoImg" alt="logo borboleta" />
            </div>
          </div>
          <p>Entre na sua conta do <br /> Twitok</p>
          <div className="formUser">
            <label htmlFor="userUsername">Nome de usuário/Login</label>
            <input className="userUsername" type="text" name="usernameForm:user" id="formControl" placeholder="Digite seu nome de usuário ou email" onChange={(e)=> this.setState({username:e.target.value})}/>
            <label htmlFor="userSenha">Senha</label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <input className="userSenhaLogin" type="password" name="senhaForm:user" id="formControl" placeholder="Digite sua senha" onChange={(e)=> this.setState({password:e.target.value})}/>
              <i className="far fa-eye" id="togglePasswordLogin" />
            </div>
          </div>
          <div className="buttonsLoginBox">
            <button className="loginButton" type="button" onClick={this.handleSubmit}>Entrar</button>
            <p style={{ marginTop: '30px', fontSize: '20px' }}>Não possui uma conta?<a href="./register" className="registerLoginLink">Inscreva-se</a> </p>
          </div>
        </div>
      </div>
  )}
}
