import React from 'react'

const Description = ({ DescriptionText, DescriptionClass }) => {
    return (
        <p className={`font-sarabun font-normal text-base leading-[130%] text-[#D4E5FF] ${DescriptionClass}`}>{DescriptionText}</p>
    )
}

export default Description