import React from "react";
import "./skills.css";
import Designer from "./Designer";
import Cmswebsite from "./Cmswebsite";
import Microsoft from "./Microsoft";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Keahlian</h2>
            <span className="section__subtitle">Keahlian dasar yang saya miliki</span>
        
            <div className="skills__container container grid">
                <Designer />
                <Cmswebsite />
                <Microsoft />
            </div>
        </section>
    );
};

export default Skills