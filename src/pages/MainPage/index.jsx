
import Header from "../Home/index"
import "./index.css";
import Footer from "../Footer.jsx/Footer";


const Main = () => {
    return (
<div>
    <Header></Header>
    

  <h1 className="titulo">TESTE</h1>
  <pre className="texto">{"      "}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis,{"\n"}{"       "}quisquam ab recusandae, molestiae, id veritatis laborum adipisci{"\n"}{"      "}sunt ullam quas cupiditate mollitia consectetur sit. Fuga ex perferendis doloribus ea?{"\n"}{"      "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quas.{"\n"}{"        "}Assumenda, suscipit sequi, iusto quidem totam quisquam nihil quae culpa{"\n"}{"      "}libero architecto perferendis aspernatur pariatur accusantium recusandae rerum{"\n"}{"      "}nulla reprehenderit.{"\n"}{"    "}</pre>
  <div className="gallery">
    <div className="item">
      <img src="img/alface.jpg" alt="Imagem 1" />
      <h1>Título da Imagem</h1>
      <p>Descrição da Imagem</p>
    </div>
    <div className="item">
      <img src="img/comidadeverdade.jpg" alt="Imagem 2" />
      <h1>Título da Imagem</h1>
      <p>Descrição da Imagem</p>
    </div>
    <div className="item">
      <img src="img/flor.jpg" alt="Imagem 3" />
      <h1>Título da Imagem</h1>
      <p>Descrição da Imagem</p>
    </div>
  </div>
  <h2 className="titulo2">TESTE II</h2>
  <pre className="texto">{"      "}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis,{"\n"}{"       "}quisquam ab recusandae, molestiae, id veritatis laborum adipisci{"\n"}{"      "}sunt ullam quas cupiditate mollitia consectetur sit. Fuga ex perferendis doloribus ea?{"\n"}{"      "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quas.{"\n"}{"        "}Assumenda, suscipit sequi, iusto quidem totam quisquam nihil quae culpa{"\n"}{"      "}libero architecto perferendis aspernatur pariatur accusantium recusandae rerum{"\n"}{"      "}nulla reprehenderit.{"\n"}{"    "}</pre>
  <div class="container">
                <div class="center">
                    <button class="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                        </svg>
                       
                        <span>COLABORE</span>
                     
                    </button>
                </div>
            </div> 
            <div class="container2">
                <div class="center2">
                    <button class="btn2">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                        </svg>
                       
                        <span>COLABORE</span>
                     
                    </button>
                </div>
            </div> 
     <Footer></Footer>          
</div>
 
);   
}

export default Main;