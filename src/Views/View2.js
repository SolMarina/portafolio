import React, { useEffect } from 'react';
import burguer from "../img/tablet1.png"
import barky from "../img/mobile.png"
import comida from '../img/logocolorS.png'
import mdlink from '../img/mdnode.png'
import lovers from '../img/cartadelcampeon.png'
import mach from '../img/mach.png'
import styles from "./View2.module.css"
import codew from "../img/200w.webp"
import M from "materialize-css";

const Carrusel = () => {

    useEffect(() => {
        const carousel = document.querySelectorAll('.carousel');
        const instance = M.Carousel.init(carousel, {
            fullWidth: true,
            indicators: true

        });


        console.log(instance);

    })
    return (
         <div id='proyectos'>

            <div className={styles.code} >
               <h2>Proyectos</h2>
               <div className={styles.codemu}>
                  <img className={styles.codewo} src={codew} alt=""></img>
              </div>
          </div>

            <div className="carousel carousel-slider">
                <div className="carousel-item center" href="#one!">
                    <div className={styles.box1}>
                        <div className={styles.box11}>
                            <div class="card z-depth-5 hoverable">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={burguer} alt=""></img></div>

                                <div class="card-content">
                                    <span class="card-title activator white-text">Burger Queen<i class="material-icons right">more_vert</i></span>
                                    <div className={styles.links}>
                                        <p ><a class="white-text" href="https://burgersong.on.fleek.co/">Demo</a></p>
                                        <p><a class="white-text" href="https://github.com/SolMarina/burger-queen">Github</a></p>
                                    </div>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title white-text">Burger Queen<i class="material-icons right">close</i></span>
                                    <p>Single-page Application (SPA) React.js/React hooks/ Firebase / CSS3 / Figma / Github. Es una app desarrollada y diseñada para tablets , un sistema que ayude a tomar los pedidos de clientes de un restaurante.
 </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item center" href="#two!">
                    <div className={styles.box1}>
                        <div className={styles.box11}>
                            <div class="card z-depth-5 hoverable">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={barky} alt=""></img></div>

                                <div class="card-content">
                                    <span class="card-title activator white-text">Red Social<i class="material-icons right">more_vert</i></span>
                                    <div className={styles.links}>
                                        <p><a class="white-text" href="https://mcmacarena.github.io/SCL014-social-network/">Demo</a></p>
                                        <p><a class="white-text" href="https://github.com/SolMarina/SCL014-social-network">Github</a></p>
                                    </div>
                                </div>                       <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Barkify<i class="material-icons right">close</i></span>
                                    <p>Single-page Application (SPA) Javascript / Firebase / CSS3/ Figma / Github. Red Social creada con el propósito de generar interacción y sentido de manada entre perros que se encuentren geográficamente cerca y presenten ciertas afinidades.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item center" href="#three!">

                    <div className={styles.box1}>
                        <div className={styles.box11}>
                            <div class="card z-depth-5 hoverable">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={comida} alt=""></img></div>

                                <div class="card-content">
                                    <span class="card-title activator white-text">Comida Para Todos<i class="material-icons right">more_vert</i></span>
                                    <div className={styles.links}>
                                        <p><a class="white-text" href="https://comidaparatodos.on.fleek.co/">Demo</a></p>
                                        <p><a class="white-text" href="https://github.com/SolMarina/ComidaParaTodos">Github</a></p>
                                    </div>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Comida para todos<i class="material-icons right">close</i></span>                          <p>Desarrollado con React.js, CSS3. El proyecto tiene meta principal solucionar el dolor de la Fundación Comida para Todos, enfocandose en mostrar a los futuros donantes de forma transparente, el destino de las donaciones, maneras de hacer donaciones, historias de personas que recebieron ayuda.

                             Con la colaboración entre estudiantes de Ux y Front-End, mejoramos el design de la página web, dejandola más interesante y así obtenendo una mejor experiencia para el usuario.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item center" href="#four!">
                    <div className={styles.box1}>
                        <div className={styles.box11}>
                            <div class="card z-depth-5 hoverable">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={mdlink} alt=""></img></div>

                                <div class="card-content">
                                    <span class="card-title activator white-text">MdLinks<i class="material-icons right">more_vert</i></span>
                                    <div className={styles.links}>
                                        <p><a class="white-text" href="https://www.npmjs.com/package/md-links-solex">Demo</a></p>
                                        <p><a class="white-text" href="https://github.com/SolMarina/SCL014-md-links">Github</a></p>
                                    </div>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">MdLinks<i class="material-icons right">close</i></span>
                                    <p>r y analizar archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item center" href="#five!">
                    <div className={styles.box1}>
                        <div className={styles.box11}>
                            <div class="card z-depth-5 hoverable">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={lovers} alt=""></img></div>

                                <div class="card-content">
                                    <span class="card-title activator white-text">Data Lovers<i class="material-icons right">more_vert</i></span>
                                    <div className={styles.links}>
                                        <p><a class="white-text" href="https://solmarina.github.io/SCL014-data-lovers/">Demo</a></p>
                                        <p><a class="white-text" href="https://github.com/SolMarina/SCL014-data-lovers">Github</a></p>
                                    </div>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Data Lovers<i class="material-icons right">close</i></span>
                                    <p>Javascript /CSS3/ Figma. Página web para visualizar un conjunto (set) de datos que se adecúa a las necesidades de los jugadores de League of Legend .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item center" href="#six!">
                    <div className={styles.box1}>
                        <div className={styles.box11}>

                            <div class="card z-depth-5 hoverable">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={mach} alt=""></img></div>

                                <div class="card-content">
                                    <span class="card-title activator white-text">MACH<i class="material-icons right">more_vert</i></span>
                                    <div className={styles.links}>
                                        <p><a class="white-text" href="https://mach-app-9892d.firebaseapp.com/">Demo</a></p>
                                        <p><a class="white-text" href="https://github.com/SolMarina/SCL014-Hackathon">Github</a></p>
                                    </div>

                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Sección de Beneficios<i class="material-icons right">close</i></span>
                                    <p>Sección de Beneficios, realizada en 4 días de Hackathon para MACH, es una aplicaciòn realizada para mobile, utilizando react.js y
 Bootstrap </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Carrusel;


































