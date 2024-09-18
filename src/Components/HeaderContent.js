import React from 'react'

const HeaderContent = ({ head, para }) => {
    return (
        <div className='head'>
            <h1>{head}</h1>
            <p>{para}</p>
        </div>
    )
}

export default HeaderContent