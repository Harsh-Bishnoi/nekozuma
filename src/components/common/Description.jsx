import React from 'react'

const Description = ({ descriptionText, descriptionClass }) => {
    return (
        <p className={`font-sarabun leading-[21px] text-[#D4E5FF] ${descriptionClass}`}>{descriptionText}</p>
    )
}

export default Description