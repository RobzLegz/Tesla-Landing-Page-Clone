import React from 'react'

function Item({title,desc,backgroundImg,leftBtnText,rightBtnText,twoButtons}) {
    return (
        <div className="item" style={{

        }}>
            <div className="item-container">
                <div className="item-text">
                    <p>{title}</p>
                    <div className="text-description">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-btns">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
