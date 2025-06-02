import React from 'react'

const Line = ({ line, LineClass }) => {
    return (
        <div className={`border border-[#3586FF] max-w-[164px] ${LineClass}`}>{line}</div>
    )
}

export default Line