import React from 'react'

const HeaderBorder = ({ line, lineClass }) => {
    return (
        <div className={`border border-[#3586FF] max-w-[164px] ${lineClass}`}>{line}</div>
    )
}

export default HeaderBorder