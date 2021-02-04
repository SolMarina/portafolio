import navegador from "../img/navegador.png"
import M from "materialize-css";
import React, { useEffect } from 'react';
import cv from "../img/solmarinacv1.pdf"


const NavBar = () => {
    useEffect(() => {
        const sidenav = document.querySelectorAll('.sidenav');
        const instances = M.Sidenav.init(sidenav)

    });
    return (
        <div>
            <div class="navbar-fixed">
                <nav class="#fce4ec pink lighten-5">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo"><img src={navegador} alt=""></img></a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="#Sobremi" ><span class="cyan-text text-darken-3">Sobre mi</span></a></li>
                            <li><a href="#proyectos"><span class="cyan-text text-darken-3">Proyectos</span></a></li>
                            <li><a href = {cv}><span class="cyan-text text-darken-3">Curriculum</span></a></li>
                            <li><a href="#Contacto"><span class="cyan-text text-darken-3">Contacto</span></a></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav #fce4ec pink lighten-5" id="mobile-demo">

                    <li><a href="https://solmparra17.on.fleek.co/#Sobremi" ><span class="cyan-text text-darken-3">Sobre mi</span></a></li>
                    <li><a href="https://solmparra17.on.fleek.co/#proyectos"><span class="cyan-text text-darken-3">Proyectos</span></a></li>
                    <li><a href= {cv}><span class="cyan-text text-darken-3">Curriculum</span></a></li>
                    <li><a href="https://solmparra17.on.fleek.co/#Contacto"><span class="cyan-text text-darken-3">Contacto</span></a></li>

                </ul>
            </div>
        </div>

    );
};
export default NavBar;