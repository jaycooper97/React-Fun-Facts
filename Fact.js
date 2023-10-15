import React, { Component } from 'react'
import Mikasa from './img/Mikasa.jpg'

class Fact extends Component {
    render() {
        return (
            <div>
                <img src={Mikasa} alt="Mikasa" className='comp-img'/>
                <h3 className='par'>Mikasa's Lineage</h3>
                <p className='par'>Did you know that Mikasa and Eren aren't actually related? Mikasa was actually adopted by Eren's father, Dr. Jaeger, after her mother's untimely death. They were considered to be high value, due to them being the last of their race, which made them prime targets of robbers and traffickers.  Mikasa's mother, unfortunately, was killed, and Mikasa was going to be sold into trafficking, but Dr. Jaeger saved her from such a gruelingand horrific fate.</p>
            </div>
        )
    }
}


export default Fact