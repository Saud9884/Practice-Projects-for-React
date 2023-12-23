import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css';

export default function StarRating({noOfStar = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleMouseClick(currentIndex) {
      setRating(currentIndex);
    }

    function handleMouseMove(currentIndex) {
        setHover(currentIndex);
    }

    function handleMouseLeave() {
        setRating(currentIndex);
    }

    
  return (
    <div className='star-rating'>
    {  [...Array(noOfStar)].map((_,index) => {
        index += 1
        return <FaStar 
        className={index <= (rating || hover) ? 'active' : 'inactive'}
        key={index}
        onClick={() => handleMouseClick(index)}
        onMouseMove={() => handleMouseMove(index)}
        onMouseLeave={() => handleMouseLeave()}
        size={40}
        />

    })
     }

    </div>
  )
}
