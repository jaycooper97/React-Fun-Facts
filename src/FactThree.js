import React, { Component } from 'react'
import Eren from './img/Eren.jpeg'

const FactThree = () => {
  return (
    <div>
    <img src={Eren} alt="Eren" className='comp-img' />
      <h3 className="par">Eren's Secret Ability</h3>
      <p className="par">Eren Jaeger has a secret superpower?  That's right!  Eren can turn himself into a Titan, if he
      experiences an extreme amount of pain.  This gives the Scouting Legion an advantage, once they realized Eren still
      had his consiousness.  Everyone was quite concerned at first; they didn't realize that Eren could still remain
      himself mentally when he transforms.  Once they saw "Titan Eren" in action against the other Titans, they saw the
      advantage they had with him.  He's about as tall as the other Titans, if not taller, and he has great meleè combat skills!</p>
    </div>
  )
}

export default FactThree