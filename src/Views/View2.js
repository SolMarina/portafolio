
import styles from './View2.module.css'
import lol from "../img/cartadelcampeon.png"
import burguer from "../img/tablet1.png"
import barky from "../img/mobile.png"
import comida from '../img/logocolorS.png'
import mdlink from '../img/mdnode.png'
import M from "materialize-css";
import React, {useEffect } from 'react';

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
                        <img  className={styles.Imgme} src={lol}></img>
                        <div class="caption center-align">
                            <h1> holaaaaaaa</h1>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img  className={styles.Imgme} src={mdlink}></img>
                        <div class="caption center-align">
                            <h1> holaaaaaaa</h1>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img  className={styles.Imgme} src={comida}></img>
                        <div class="caption center-align">
                            <h1> holaaaaaaa</h1>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img className={styles.Imgme} src={burguer}></img>
                        <div class="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img className={styles.Imgme} src={barky}></img>
                        <div class="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>

                </ul>
            </div>

        </div>

    );
};
export default View2;