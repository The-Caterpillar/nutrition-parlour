import Button from "./Button";

const Modal = ({rating, closeModal}) => {
    return ( <>
        <div className="modal-overlay">
            <div className="modal">
                <h2>Thank You!!</h2>
                <p>You rated our product : {rating} star{rating == 1 ? 's' : ''}</p>
                <Button className="close-btn" onClick={closeModal}>
                    Close
                </Button>
            </div>
        </div>
    </> );
}
 
export default Modal;