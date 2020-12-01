import React from "react";
import navegador from "../img/navegador.png"



const NavBar = () => {
    return (
        <div>
            <div class="navbar-fixed">
                <nav class="#fce4ec pink lighten-5">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo"><img src={navegador} alt=""></img></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="Sobre mi" ><span class="cyan-text text-darken-3">Sobre mi</span></a></li>
                            <li><a href="Proyectos"><span class="cyan-text text-darken-3">Proyectos</span></a></li>
                            <li><a href="https://es.scribd.com/document/486516391/Curriculum-5-1?secret_password=WqIsFflRjS9dHbHFrYLw"><span class="cyan-text text-darken-3">Curriculum</span></a></li>
                            <li><a href="Contacto"><span class="cyan-text text-darken-3">Contacto</span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    );
};
export default NavBar;