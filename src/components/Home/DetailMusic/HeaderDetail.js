import React from 'react';
import iconRandom from '../../../assets/img/icon-random.svg'
import iconDot from '../../../assets/img/icon-dot.svg'


export default function HeaderDetail(){
    return (
        <div>
            <div>
                <div>&nbsp;</div>
            </div>
            <div>
                <div>Relaxation</div>
                <div>25 tracks</div>
            </div>
            <div>
                <div><img src={iconRandom} alt=" " /></div>
                <div><img src={iconDot} alt=" " /></div>
            </div>
        </div>
    )
}