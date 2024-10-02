import { useState } from 'react'
import Modal from 'react-modal';
const customStyles = {
    content: {
        width: '100%',
        height: '100%',
        border: "none",
        top: 0,
        left: 0,
        backgroundColor:'#000000bd',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};



function InstagramItem({ img, id }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

  

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div >
            <img onClick={openModal}
                src={img} width={'190px'} height={'190px'} />

            <div style={{ backgroundColor: 'red', }} onClick={closeModal}>

                <Modal
                    isOpen={modalIsOpen}
                   
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <img src={img} alt="" />
                    <button style={{ position: 'absolute', top: 50, right: 50, width: "50px", height: "50px", fontSize: "20px" }} onClick={closeModal}>X</button>
                </Modal>
            </div>

          
        </div>
    )
}

export default InstagramItem