import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const Header = () => {
    return (
        <header classname="align-items-center">


            <nav>
                <img src="img/comidadevddd.png" className="img" alt="" style={{ width: '120px' }} />



                <ul>
                    <li><a href="#">Agroecologia</a>
                        <ul>
                            <li><a href="#">Técnicas de manejo e cultivo</a></li>
                            <li><a href="#">PANCS</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Plantas medicinais</a>
                        <ul>
                            <li><a href="#">Plantas brasileiras</a></li>
                            <li><a href="#">Receitas</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Faça parte</a>
                        <ul>
                            <li><a href="#">Produtor Rural</a></li>
                            <li><a href="#">Consumidor</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Onde encontrar</a>
                        <ul>
                            <li><a href="#">Produtores</a></li>
                            <li><a href="#">Feiras</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Prestação de contas</a>
                        <ul>
                            <li><a href="#">Mês/Ano</a></li>
                        </ul>
                    </li>
                </ul>

                <div className='icones'>
                    <a href ><img src="img/Facebook.png" alt /></a>
                    <a href ><img src="img/Instagram.png" alt /></a>
                    <a href ><img src="img/Whatsapp.png" alt /></a>
                </div>
            </nav>
        </header>


    );
}

export default Header;
