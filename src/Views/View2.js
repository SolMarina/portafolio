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
            <div class="ia-container">
                <figure>
                    <img src={lol} alt="image01" />
                    <input type="radio" name="radio-set" checked="checked"/>
                    <figcaption><span>True Colors</span></figcaption>
                    
                    <figure>
                        <img src={burguer} alt="image02" />
                        <input type="radio" name="radio-set" />
                        <figcaption><span>Honest Light</span></figcaption>
                        
                        <figure>
                            <img src={barky} alt="image03" />
                            <input type="radio" name="radio-set" />
                            <figcaption><span>Silent Serenity</span></figcaption>
                            
                            <figure>
                                <img src={comida} alt="image04" />
                                <input type="radio" name="radio-set" />
                                <figcaption><span>Warm Welcome</span></figcaption>
                                
                                <figure>
                                    <img src={mdlink} alt="image05" />
                                    <input type="radio" name="radio-set" />
                                    <figcaption><span>Sensible Magic</span></figcaption>
                                    
                                    <figure>
                                        <img src={credit} alt="image06" />
                                        <input type="radio" name="radio-set" />
                                        <figcaption><span>Lovely Midnight</span></figcaption>
                            
                            
                                    </figure>	
                                        
                                </figure>	
                                    
                            </figure>
                                
                        </figure>
                        
                    </figure>
                    
                </figure>
                
            </div>




        </div>


    );
};
export default View2;