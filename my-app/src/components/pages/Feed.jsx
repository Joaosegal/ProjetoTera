import React, { Component }  from "react";
import "../../../src/App.css"
import Borboleta from "../../assets/imgs/Borboleta.svg";
import Pagina from "../../assets/imgs/Pagina.png";
import Hashtag from "../../assets/imgs/Hashtag.png";
import Mensagens from "../../assets/imgs/Mensagens.png";
import Perfil from "../../assets/imgs/Perfil.png";
import Mais from "../../assets/imgs/Mais.png";
import Tiktok from "../../assets/imgs/Tiktok.png";

export default class Feed extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        userData: "",
        postContent: "",
        idUser: "",
        username: "",
        totalPosts: []
    }
  
  this.registerPost= this.registerPost.bind(this)
  this.deletePost= this.deletePost.bind(this)
  this.editPost= this.editPost.bind(this)
  this.confirmEditPost= this.confirmEditPost.bind(this)
}
componentDidMount(){
    fetch("https://twitok.vercel.app/userData", {
    method:"POST",
    crossDomain:true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify({
        token:window.localStorage.getItem("token")
    })
    }).then((res) => res.json())
    .then((data) => {
        this.setState({userData: data.data})
        this.setState({idUser: data.data._id})
        this.setState({username: data.data.username})
    })
    fetch("https://twitok.vercel.app/getUsers", {
    method:"GET",
    crossDomain:true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
    }
    }).then((res) => res.json())
    .then((data) => {
        console.log(data)
        this.setState({totalPosts: data})
    })
}
registerPost(e){
  e.preventDefault();
  const {idUser, postContent, username, totalPosts} = this.state;
  fetch("https://twitok.vercel.app/post", {
    method:"POST",
    crossDomain:true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify({
      idUser,
      username,
      postContent
    })
  }).then((res) => res.json())
    .then((data) => {
      console.log(data, "postRegistered")
      window.location.reload(false);
    })
}
deletePost(e){
  e.preventDefault();
  const _id = e.target.getAttribute('title')
  fetch(`https://twitok.vercel.app/delete/${_id}`, {
    method:"DELETE",
    crossDomain:true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  }).then((res) => res.json())
    .then((data) => {
      console.log(data, "postRegistered")
      window.location.reload(false)
    }).catch((err) => {
      window.location.reload(false)
    })
}
editPost(e){
  e.preventDefault();
  const _id = e.target.getAttribute('title')
  const doneButton = document.getElementsByClassName(_id)[0]
  const postEdit = document.getElementById(_id)
  postEdit.contentEditable = true
  postEdit.style.backgroundColor = "#dddbdb"
  doneButton.style.display = "block"
}
confirmEditPost(e){
  const {idUser, username} = this.state;
  e.preventDefault();
  const _id = e.target.getAttribute('title')
  const post = document.getElementById(_id)
  const doneButton = document.getElementsByClassName(_id)[0]
  const postEdit = document.getElementById(_id)
  postEdit.contentEditable = false
  postEdit.style.backgroundColor = "white"
  doneButton.style.display = "none"
  const postContent =  post.innerHTML
  fetch(`https://twitok.vercel.app/post/${_id}`, {
    method:"PATCH",
    crossDomain:true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify({
      idUser,
      username,
      postContent
    })
  }).then((res) => res.json())
    .then((data) => {
      console.log(data, "postRegistered")
      window.location.reload(false)
    })
}

  render() {
  return(
      <div>
          <title>Twitok</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
          <div className="container">
            <header className="cabeçalho">
              <img src={Borboleta} className= "Borboleta" alt=" imagem de borboleta azul" />
              <figure className="cabeçalho-logo" />
              <nav className="cabeçalho-menu-navegaçao">
                <ul className="cabeçalho-menu-lista">
                  <li className=" cabeçalho-menu-item">
                    <p className="Pagina">Bem vindo <br />{this.state.userData.username}!!</p>
                  </li>
                  <li className=" cabeçalho-menu-item">
                    <img src={Pagina}className="Pagina" alt="botao de home da pagina" />
                    {/*Funcionalidades da pagina*/}
                    <a href>Pagina Inicial</a>
                  </li>
                  <li className="cabeçalho-menu-item">
                    <img src={Hashtag} className= "Hashtag" alt="botao de explorar da pagina" />
                    <a href>Explorar</a>
                  </li>
                  <li className="cabeçalho-menu-item">
                    <img src={Mensagens}className="Mensagens" alt="botao de mensagens da pagina" />
                    <a href>Mensagens</a>
                  </li>
                  <li className="cabeçalho-menu-item">
                    <img src={Perfil}className="Perfil" alt="botao de perfil da pagina" />
                    <a href>Perfil</a>
                  </li><li className="cabeçalho-menu-item">
                    <img src={Mais}className="Mais" alt="botao de mais da pagina" />
                    <a href>Mais</a>
                  </li>
                  <li className="cabeçalho-menu-item">
                    <img src={Tiktok}className= "Tiktok" alt="botao de videos do Tiktok" />
                    <a href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1">TikTok</a>
                  </li>
                </ul>
              </nav>
            </header>
            <main className="conteudo-principal">
              <h2 className="coteudo-principal-titulo">Home</h2>
              <form action className="conteudo-principal-formulario">
                <textarea name="Texto twitok" placeholder="O que esta acontecendo?" defaultValue={""} onChange={(e)=> this.setState({postContent:e.target.value})} />
                <button type="submit"  onClick={this.registerPost}>Twitokar</button>
              </form>
              <section className="conteudo-principal-feed">
                <ul className="conteudo-principal-lista-twitoks">
                  {this.state.totalPosts.map((username) => (
                    <li key={username._id}>
                      <div className="twitok_conteudo">
                        <div className="flexbox">
                        <img src={Perfil}className="Perfil" alt="foto de perfil do usuario" />
                        <h2 className="userTitle">{username.username}</h2>
                        {this.state.idUser === username.idUser && <button className="deleteButton" onClick={this.deletePost}  title = {username._id}>Delete</button>}
                        {this.state.idUser === username.idUser && <button className="editButton" onClick={this.editPost} title = {username._id}>Edit</button>}
                        {this.state.idUser === username.idUser && <button className={`${username._id} doneEditButton`} onClick={this.confirmEditPost} title = {username._id}>Done</button>}
                        </div>
                        <p id = {username._id} className="post">{username.postContent}</p>    
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </main>
          </div>
          </div>
      
    )}
 }

