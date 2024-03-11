import React, { useState } from "react";

const WorkItems = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
        // Menambahkan atau menghapus kelas 'modal-open' pada body
        document.body.classList.toggle('modal-open');
    };

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h4 className="work__title">{item.title}</h4>
            <button onClick={toggleModal} className="work__button">
                Lihat <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button onClick={toggleModal} className="close-button">
                            X
                        </button>
                        <img src={item.image} alt="" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkItems;
