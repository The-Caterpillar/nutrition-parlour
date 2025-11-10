const Star = ({star, rating, hover, color, ratingClick, hoverEnter, hoverLeave}) => {
    return ( <>
        <span
            onClick={() => ratingClick(star)}
            onMouseEnter={() => hoverEnter(star)}
            onMouseLeave={() => hoverLeave(0)}
            style={{color: star<=(hover || rating) ? color : '#ccc'}}
            className='star'>
                {'\u2605'}</span>
    </> );
}
 
export default Star;