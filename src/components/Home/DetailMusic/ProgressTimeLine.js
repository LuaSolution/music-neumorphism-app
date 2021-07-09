import React from 'react';
import { Progress } from 'antd';
import './headerDetail.scss'

export default function ProgressTimeLine(){
    return (
        <div className="row-progress-time-line">
            <div className="label-time-now">02:23</div>
            <div className="box-progress-content">
                <Progress percent={30} format={(percent, successPercent) => {
                    return <div className="label-time-right">{percent}</div>
                }} />
            </div>
        </div>
    )
}