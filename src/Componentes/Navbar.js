import navegador from "../img/navegador.png"
import M from "materialize-css";
import React, { useEffect } from 'react';
import cv from "../img/solmarinacv1.pdf"
import styles from './navbar.module.css'


const NavBar = () => {
    useEffect(() => {
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav)

    });
    return (
        <div>
            <div class="navbar-fixed">
                <nav class="#fce4ec pink lighten-5">
                    <div class="nav-wrapper">
                        <div class="brand-logo"><img  className={styles.link} src={navegador} alt=""></img> </div>
                        
                        
                        <div data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></div>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="#Sobremi" ><span class="white-text">Sobre mi</span></a></li>
                            <li><a href="#proyectos"><span class="white-text">Proyectos</span></a></li>
                            <li><a href = {cv}><span class="white-text">Curriculum</span></a></li>
                            <li><a href="#Contacto"><span class="white-text">Contacto</span></a></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-demo">

                    <li><a href="https://solmportafolio.web.app/#Sobremi" ><span class="white-text">Sobre mi</span></a></li>
                    <li><a href="https://solmportafolio.web.app/#proyectos"><span class="white-text">Proyectos</span></a></li>
                    <li><a href= {cv}><span class="white-text">Curriculum</span></a></li>
                    <li><a href="https://solmportafolio.web.app/#Contacto"><span class="white-text">Contacto</span></a></li>

                </ul>
            </div>
        </div>

    );
};
export default NavBar;