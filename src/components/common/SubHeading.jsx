import React from 'react'

const SubHeading = ({ subHeadingText, subHeadingClass }) => {
    return (
        <h2 className={`font-franklin text-[43px] leading-[100%] text-[#3586FF] text-center ${subHeadingClass}`}>{subHeadingText}</h2>
    )
}

export default SubHeading