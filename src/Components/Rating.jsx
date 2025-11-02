import { useState } from "react";

function Rating(){

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const stars = Array.from({length:5}, (_,i) => i + 1);
    const feedbackMessages = ['Terrible','Poor','Fair','Good','Excellent'];

    // setRating

    return (<>
        {/* <div style={{textAlign: 'center'}}> */}
        <div className="rating-container" style={styles.container}>
            <h2 style={styles.heading}>Rate your experience</h2>
            {/* {hover} */}
            <div className="stars">
                {
                    stars.map((star) => (
                        <span 
                            onClick={() => setRating(star)}
                            key={star}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            className={`star ${star <= (hover || rating) ? 'active' : ''}`}>
                            {'\u2605'}
                        </span>
                    ))
                }
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessages[rating-1]}</p>}
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