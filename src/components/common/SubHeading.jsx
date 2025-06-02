import React from 'react'

const SubHeading = ({ SubHeadingText, SubHeadingClass }) => {
    return (
        <h2 className={`font-Franklin font-normal text-[43px] leading-[100%] text-[#3586FF] text-center ${SubHeadingClass}`}>{SubHeadingText}</h2>
    )
}

export default SubHeading