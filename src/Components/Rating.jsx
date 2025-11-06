

import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";
import './Rating.css'

function Rating(){

    const color = "gold";
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const stars = Array.from({length:5}, (_,i) => i + 1);
    const feedbackMessages = ['Terrible','Poor','Fair','Good','Excellent'];
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = () => {
        if(rating > 0)
        {
            setSubmitted(true);
        }
    }

    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0)
    }

    // setRating
    return (<>
        <div className="ratings-body">
        <div className="rating-container" style={styles.container}>
            <h2 style={styles.heading}>Rate your experience</h2>
            {/* {hover} */}
            <div className="stars">
                {stars.map((star) => (
                        <Star 
                            key={star}
                            star={star}
                            rating={rating}
                            hover={hover}
                            hoverEnter = {setHover}
                            hoverLeave = {setHover}
                            ratingClick = {setRating}
                            color={color}/>
                ))}
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessages[rating-1]}</p>}
            <Button className="submit-btn" disabled={rating ===  0} onClick={handleSubmit}>Submit</Button>

            {
                submitted &&
                    ( <Modal rating={rating} closeModal={closeModal}/> )
            }
        </div>
        </div>
    </>);
}

export default Rating;

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'arial',
        padding: '20px',
    },
    heading:{
        color:'purple',
    }
}