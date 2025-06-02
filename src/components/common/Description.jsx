import React from 'react'

const Description = ({ DescriptionText, DescriptionClass }) => {
    return (
        <p className={`font-normal text-base leading-[100%] text-[#D4E5FF] ${DescriptionClass}`}>{DescriptionText}</p>
    )
}

export default Description