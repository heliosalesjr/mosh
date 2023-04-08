import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react';

const Like = ( {onClick}: Props) => {
    
    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

    if (status) <AiFillHeart color={'red'} size={50} onClick={ toggle }/>;

    return <AiOutlineHeart color={'red'} size={50} onClick={ toggle}/>
    
}

export default Like