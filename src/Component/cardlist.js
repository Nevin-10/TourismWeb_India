import React from 'react'
import Card1 from './card'
 

const CardList = ({ robots }) => {

    const cardComponent = robots.map((user,i)=> {
    return (
        <Card1 key={i}
         id={user.id} 
         name={user.name} 
         desc={user.desc} 
         link={user.link}
         />
    ); }
    )

    return(
        <div>
            {cardComponent}
        </div>


    );


    }

export default CardList;

