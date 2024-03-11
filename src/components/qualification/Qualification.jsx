import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Pendidikan</h2>
            <span className="section__subtitle">Riwayat Pendidikan Saia
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> 
                        Education
                    </div>

                    <div 
                        className={
                            toggleState === 2 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                            }
                            onClick={() => toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                            }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Universitas Brawijaya</h3>
                                <span className="qualification__subtitle">Teknologi Informasi & Komputer</span>
                                <div className="div qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 
                                    2021 - sekarang
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">SMA Islam Al-Ma'arif Singosari</h3>
                                <span className="qualification__subtitle">IPA</span>
                                <div className="div qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 
                                    2018 - 2021
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                                }
                            >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">PT Connecting Dots Nusa</h3>
                                <span className="qualification__subtitle">IOT, CMS Wordpress, Microsoft Office</span>
                                <div className="div qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 
                                    September 2023 - Februari 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Udacoding Batam</h3>
                                <span className="qualification__subtitle">UI/UX Designer</span>
                                <div className="div qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 
                                    Februari 2023 - Mei 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;