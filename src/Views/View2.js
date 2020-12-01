import React from "react";
import styles from './View2.module.css'
import lol from "../img/cartadelcampeon.png"
import burguer from "../img/tablet1.png"
import barky from "../img/mobile.png"
import comida from '../img/logocolorS.png'
import mdlink from '../img/mdnode.png'
import credit from '../img/validacion.png'
const View2 = () => {
    return (
        <div>
            <h3>Mis Proyectos </h3>

            <div className={styles.boxprincipal1}>
                <div className={styles.box1}>
                    <div class="card small">

                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card #0097a7 cyan darken-2" >
                                    <div class="card-image">
                                        <img className={styles.lol} src={lol} alt="">
                                        </img>
                                        <span class="card-title"></span>

                                        <div class="card-content">
                                            <p class="cyan-text text-darken-3"> DataLovers: Javascript /html5/ API / CSS3/ Figma / Github/ Hot Jar / Balsamiq Mockups</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="https://algrismarquez.github.io/SCL014-data-lovers/index.html">Data Lovers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.box2}>
                    <div class="card small">
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card #0097a7 cyan darken-2">
                                    <div class="card-image">
                                        <img className={styles.burguer} src={burguer} alt=""></img>
                                        <span class="card-title"></span>
                                        <div class="card-content">
                                            <p>Burguer Queen: Single-page Application (SPA) React / Firebase / CSS3 / Figma / Github.</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="https://burgersong.on.fleek.co/">Burguer Queen</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.box3}>
                    <div class="card small">
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card #0097a7 cyan darken-2">
                                    <div class="card-image">
                                        <img className={styles.barky} src={barky} alt=""></img>
                                        <span class="card-title"></span>

                                        <div class="card-content">
                                            <p>Red Social: Single-page Application (SPA) Javascript /Firebase /CSS3/ Figma /Github.</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="#">Red Social</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <div className={styles.boxprincipal1}>
                <div className={styles.box1}>
                    <div class="card small">
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card #0097a7 cyan darken-2" >
                                    <div class="card-image">
                                        <img className={styles.comi} src={comida} alt="">
                                        </img>
                                        <span class="card-title"></span>

                                        <div class="card-content">
                                            <p class="cyan-text text-darken-3"> Comida para todos:  Javascript / React / CSS3/ Figma / Github/Boostrap</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="https://comidaparatodos.on.fleek.co/">Comida Para Todos</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.box2}>
                    <div class="card small">
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card #0097a7 cyan darken-2">
                                    <div class="card-image">
                                        <img className={styles.mdlink} src={mdlink} alt=""></img>
                                        <span class="card-title"></span>
                                        <div class="card-content">
                                            <p>MdLinks:  Libreria realizada con Node.js/ Markdow-it/ Fetch /JSDom</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="https://www.npmjs.com/package/md-links-solex">md-links-solex</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.box3}>
                    <div class="card small">
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card #0097a7 cyan darken-2">
                                    <div class="card-image">
                                        <img className={styles.credit} src={credit} alt=""></img>
                                        <span class="card-title"></span>

                                        <div class="card-content">
                                            <p>Validador de Tarjeta: Javascript /CSS3 /html5 /Github /Balsamiq Mockups</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="https://solmarina.github.io/SCL014-card-validation/">Card Validator</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </div>


    );
};
export default View2;