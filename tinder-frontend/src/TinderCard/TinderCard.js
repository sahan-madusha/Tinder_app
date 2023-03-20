import React, { useState } from 'react';
import  './TinderCard.css';

function TinderCard() {

  const [people, setPeople] = useState([
    {
      name:"akila",
      url:"https://www.google.lk/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjimgorzelany%2F2019%2F07%2F23%2Fhere-are-the-coolest-new-cars-for-2020%2F&psig=AOvVaw3o3MkFFmyRpVMe4j0t4ISv&ust=1679134504860000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDlvM7d4v0CFQAAAAAdAAAAABAE",
    },
    {
      name:"sahana",
      url:"wwwwww.",
    }
  ]);

  return (
    <div className='tinderCard'>
      <div className='tinderCard_container'>
        {
         people.map((person)=>
            <TinderCard
                className="swipe"
                key={person.name}
                prevenSwipe={["up","down"]}
                onSwipe={(dir)=> swiped(dir,person.name)}
                onCardLeftScreen={()=>{outOfFrame(person.name)}}
            >
                
            </TinderCard>
         )
        }
      </div>
    </div>
  )
}

export default TinderCard;