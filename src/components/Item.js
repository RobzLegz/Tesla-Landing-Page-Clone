import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Item.css"

function Item({title,desc,backgroundImg,leftBtnText,rightBtnText,twoButtons,descLink,leftBtnLink,rightBtnLink, first}) {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item-container">
                <div className="item-text">
                    <p>{title}</p>
                    <div className="text-description">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item-lowerThird">
                    <div className="item-btns">
                        <Button imp="primary" text={leftBtnText} link={leftBtnLink}/>
                        {twoButtons && (
                            //if there aren't two buttons, then ignore this:
                            <Button imp="secondary" text={rightBtnText} link={rightBtnLink}/>
                        )}
                    </div>
                    {first && (
                        //if item is first, then show:
                        <div className="item-expand">
                            <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
