import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Tugas Magang</h2>
            <span className="section__subtitle">Tugas yang saya kerjakan</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Ui/Ux <br /> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            Selama 3 bulan lebih magang di salah satu perusahaan, sebagai divisi UI/UX Designer dan diberikan beberapa macam project.
                        </p>
                    
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Merancang sebuah desain aplikasi untuk di smartphone</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Merancang sebuah desain untuk website</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Melakukan pengujian pengguna untuk memvalidasi desain serta memperbaikinya berdasarkan umpan balik yang diterima.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        CMS <br /> Website
                    </h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">
                    View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">CMS Website</h3>
                        <p className="services__modal-description">Masih tahap belajar lanjutan menggunakan wordpress ketika magang dan beberapa materi yang belum dipelajari.</p>
                    
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Membuat desain website menggunakan Elementor</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Memberikan beberapa plugin tambahan untuk kebutuhan terhadap suatu website</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Melakukan pengujian sistem website untuk memvalidasi serta memperbaikinya berdasarkan umpan balik yang diterima.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Microsoft <br /> Office
                        </h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">
                    View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">
                            Microsoft Office</h3>
                        <p className="services__modal-description">Sudah terbiasa menggunakan Microsoft Office sejak menjenjang SMP hingga saat ini.
                        </p>
                    
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Membuat sebuah logbook magang secara manual menggunakan microsoft Word dan excel</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Belum memiliki projek lainnya </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Belum memiliki projek lainnya.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Services;