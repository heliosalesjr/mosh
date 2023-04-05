import React from 'react'
import { useState } from 'react'

const ListGroup = () => {

    const items = ['Katya', 'Mona', 'Lena', 'Sasha', 'Vika'];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    //event handler - this is ts
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>Lista da Mona</h1>
                <ul className="list-group">
                    {items.map((item, index) => 
                    <li 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={item} 
                        onClick={() => {setSelectedIndex(index);}}> 
                        
                        {item}
                    </li>)}
                </ul>
        </>
    )
}

export default ListGroup