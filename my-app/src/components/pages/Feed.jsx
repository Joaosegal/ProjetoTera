import React from "react";
import Borboleta from "../../assets/imgs/Borboleta.svg";
import Pagina from "../../assets/imgs/Pagina.png";
import Hashtag from "../../assets/imgs/Hashtag.png";
import Mensagens from "../../assets/imgs/Mensagens.png";
import Perfil from "../../assets/imgs/Perfil.png";
import Mais from "../../assets/imgs/Mais.png";
import Tiktok from "../../assets/imgs/Tiktok.png";

function Feed () { 
 

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
              <textarea name="Texto twitok" placeholder="O que esta acontecendo?" defaultValue={""} />
              <button type="submit">Twitokar</button>
            </form>
            <section className="conteudo-principal-feed">
              <ul className="conteudo-principal-lista-twitoks"> 
                <li className="conteudo_principal_twitoks">
                  <img src={Perfil}className="Perfil" alt="foto de perfil do usuario" />
                  <div className="twitok_conteudo">
                    <h2>Luis</h2>
                    <span>LuisCastro 3min</span>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Casamentiss faiz malandris se pirulitá.
                      Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.</p>    
                  </div>
                </li>
                {/*Feed de noticias*/}
                <li className="conteudo_principal_twitoks">
                <img src={Perfil}className="Perfil" alt="foto de perfil do usuario" />
                  <div className="twitok_conteudo">
                    <h2>Joao</h2>
                    <span>JoaoPedro 1min</span>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Casamentiss faiz malandris se pirulitá.
                      Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.</p>    
                  </div>
                </li>
                <li className="conteudo_principal_twitoks">
                <img src={Perfil}className="Perfil" alt="foto de perfil do usuario" />
                  <div className="twitok_conteudo">
                    <h2>Paulo</h2>
                    <span>PauloSantos 14sg</span>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Casamentiss faiz malandris se pirulitá.
                      Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.</p>    
                  </div>
                </li>      
              </ul>
            </section>
          </main>
        </div>
        </div>
     
  );
 }
  export default Feed;

