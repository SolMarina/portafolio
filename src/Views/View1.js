import React from "react";
import NavBar from "../Componentes/Navbar"
import styles from "./View1.module.css"
import AboutMe from "../img/aboutme.jpg"
import View3 from './View3';
import View2 from './View2';
import github from "../img/200 (1)hub.webp"
import React1 from "../img/200react.webp"
import Javascript from "../img/200wjava.webp"
import html from "../img/200wjs.webp"
import css3 from "../img/200wss.webp"
import firebase from "../img/firebase.webp"
import nodejs from "../img/giphynode.webp"
const View1 = () => {
    return (
        <div>
             <NavBar />
            <div className={styles.boxprincipal} >
                <div>
                   
                </div>
                <div className={styles.aboutme}>
                    <div className={styles.boxImgme}  >
                        <img className={styles.Imgme} src={AboutMe} alt=""></img>
                    </div>
                    <div className={styles.textimage}>
                        <div>
                            <h3>Hola, Soy Sol Marina Parra.</h3>
                        </div>
                        <h5>
                            Amante de la creatividad y de la tecnología, responsable y resolutiva a
                            la hora de enfrentar nuevos desafíos, mentalidad de crecimiento, manejo de
                            incertidumbre y adaptabilidad al cambio. Mi formación y experiencia laboral
                            me ha permitido trabajar colaborativamente de manera fluida siempre en pro del
                            equipo, de mi desarrollo personal y profesional, apasionada del aprendizaje, autodidacta.
                            En mis ratos libres, me encanta hacer ejercicios, yoga, comer y estar con mis perros Joe y
                            Lupita me declaro 100% doglover.
                    </h5>
                    <h4>Habilidades Técnicas.</h4>
                        <div className={styles.skills}>
                        
                            <img className={styles.Imgme} src={github} alt=""></img>
                            <img className={styles.Imgme} src={React1} alt=""></img>
                            <img className={styles.Imgme} src={Javascript} alt=""></img>
                            <img className={styles.Imgme} src={html} alt=""></img>
                            <img className={styles.Imgme} src={firebase} alt=""></img>
                            <img className={styles.Imgme} src={css3} alt=""></img>
                            <img className={styles.Imgme} src={nodejs} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <View2 />
            <View3 />
        </div>
    );
};
export default View1;

