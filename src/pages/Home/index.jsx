import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <header classname="align-items-center">


            <nav className='Menu'>
                <img src="img/comidavddbranco.png" className="img" alt="" style={{ width: '120px' }} />

                <ul>
                    <li><a>Agroecologia</a>
                        <ul>
                            <li><a>Técnicas de manejo e cultivo</a></li>
                            <li><a>PANCS</a></li>
                        </ul>
                    </li>
                    <li><a>Plantas medicinais</a>
                        <ul>
                            <li><a>Plantas brasileiras</a></li>
                            <li><a>Receitas</a></li>
                        </ul>
                    </li>
                    <li><a>Faça parte</a>
                        <ul>
                            <li><a>Produtor Rural</a></li>
                            <li><a>Consumidor</a></li>
                        </ul>
                    </li>
                    <li><a>Onde encontrar</a>
                        <ul>
                            <li><a>Produtores</a></li>
                            <li><a>Feiras</a></li>
                        </ul>
                    </li>
                    <li><a>Prestação de contas</a>
                        <ul>
                            <li><a>Mês/Ano</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="wrapper">
                    <a><span></span></a>
                </div>

                      <div class="container">
                <div class="center">
                    <button class="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                        </svg>
                        <Link to="/teste">
                        <span>COLABORE</span>
                        </Link>
                    </button>
                </div>
            </div> 
            </nav>
 
        </header>


    );
}



export default Header;
