import react from 'react'
import './Button.css'

const STYLES=[
    'btn--primary',
    'btn--outline'
]
 const SIZES=[
     'btn--medium',
     'btn--large'
 ]

 export const Button=({
     children,
     type,
     onClick,
     buttonStyle,
     buttonSize

 })=>{
     const checkButtonStyle = STYLE.includes(buttinstyle)? buttonStyle : STYLES[0]

     const checkButtonSize = SIZES.includes(buttonsize) ? buttonSize : SIZES [0]

     return(
         <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} onClick={onClick} type={type}>
            {children}
         </button>
     )
     }