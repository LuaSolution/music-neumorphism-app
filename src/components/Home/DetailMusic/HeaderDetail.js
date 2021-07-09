import React from 'react';
import iconRandom from '../../../assets/img/icon-random.svg'
import iconDot from '../../../assets/img/icon-dot.svg'
import './headerDetail.scss'

export default function HeaderDetail(){
    return (
        <div className="header-detail-listen">
            <div className="box-circle-listen">
                <div className="dot-item">&nbsp;</div>
            </div>
            <div className="text-box">
                <div className="text-color-1">Relaxation</div>
                <div className="text-color-2  ">25 tracks</div>
            </div>
            <div className="row-icon-image">
                <div className="image-item"><img src={iconRandom} alt=" " /></div>
                <div className="image-item"><img src={iconDot} alt=" " /></div>
            </div>
        </div>
    )
}