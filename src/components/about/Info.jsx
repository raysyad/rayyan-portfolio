import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>

                <h3 className="about__title">Jam Magang</h3>
                <span className="about__subtitle">8 Bulan +</span>
            </div>

            <div className="about__box">
            <i class='bx bx-task about__icon'></i>

                <h3 className="about__title">Tugas Terselesaikan</h3>
                <span className="about__subtitle">7+ Projek</span>
            </div>

            <div className="about__box">
            <i class='bx bx-chat about__icon'></i>

                <h3 className="about__title">Chat Saya</h3>
                <span className="about__subtitle">Fast Respond</span>
            </div>
        </div>
    )
}

export default Info