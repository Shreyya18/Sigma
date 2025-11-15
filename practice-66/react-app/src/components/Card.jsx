import React from 'react'
import './component.css'

// const Card = (props) => {
//   return (
//     <div className='card'>
//         <h1>{props.title}</h1>
//         <p>{props.desc}</p>
//     </div>
//   )
// }
const Card = ({title, desc}) => {
  return (
    <div className='card'>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque recusandae neque harum, odit nobis magnam distinctio. Cupiditate ipsum inventore aliquid quidem odio modi voluptate, rem sint blanditiis explicabo non assumenda?
        Blanditiis corrupti porro quam recusandae rerum accusantium commodi, praesentium eos officiis ab molestias vitae eius delectus, beatae reiciendis consequatur perferendis iste harum hic. Sapiente illo nam ex sint molestiae corrupti!</p>
    </div>
  )
}


export default Card