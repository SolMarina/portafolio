import burguer from "../img/tablet1.png"
import barky from "../img/mobile.png"
import comida from '../img/logocolorS.png'
import mdlink from '../img/mdnode.png'
import M from "materialize-css";
import React, { useEffect } from 'react';

const View2 = () => {

    useEffect(() => {
        const slider = document.querySelectorAll('.slider');
        const instances = M.Slider.init(slider, {
            indicators: true,
            duration: 400,
            height: 600

        });
    })
    return (
        <div id="proyectos">

            <div className="slider" >
                <ul className="slides">

                    <li>
                        <img class="responsive-img" src={mdlink}></img>
                        <div class="row">
                            <div class="col s12 m6">
                                <div class="card black caption center-align">
                                    <div class="card-content cyan-text text-darken-3">
                                        <h4 class="card-title">MdLinks</h4>
                                        <p class="cyan-text text-darken-3">Librería realizada con Node.js enfocada en leer y analizar archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://www.npmjs.com/package/md-links-solex">MdLinks</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img class="responsive-img" src={comida}></img>
                        <div class="row">
                            <div class="col s12 m6">
                                <div class="card amber lighten-5 caption center-align">
                                    <div class="card-content cyan-text text-darken-4">
                                        <h4 class="card-title">Comida Para todos</h4>
                                        <p class="cyan-text text-darken-4">Desarrollado con React.js, el proyecto tuvo como meta principal mejorar el look and feel de la página de la Fundación Comida para Todos</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://comidaparatodos.on.fleek.co/">Comida Para Todos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img class="responsive-img" src={burguer}></img>
                        <div class="row">
                            <div class="col s12 m6">
                                <div class="card amber lighten-5 caption center-align">
                                    <div class="card-content cyan-text text-darken-4">
                                        <h4 class="card-title">Burguer Queen</h4>
                                        <p class="cyan-text text-darken-4">Aplicación desarrollada y diseñada para tablets , es un sistema que ayuda a tomar los pedidos de clientes de un restaurante.SPA,React,Firebase,CSS3</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://burgersong.on.fleek.co/">Burguer Song</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img class="responsive-img" src={barky}></img>
                        <div class="row">
                            <div class="col s12 m6">
                                <div class="card amber lighten-5 caption center-align">
                                    <div class="card-content cyan-text text-darken-4">
                                        <h4 class="card-title">Red Social</h4>
                                        <p class="cyan-text text-darken-4">Aplicación creada con el propósito de generar interacción y sentido de manada entre perros que se encuentren geográficamente cerca y presenten ciertas afinidades.SPA,Javascript,Firebase,CSS3</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://mcmacarena.github.io/SCL014-social-network/">Barkify</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

        </div>

    );
};
export default View2;