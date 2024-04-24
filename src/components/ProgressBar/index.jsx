import React from 'react';
import { Progress } from 'antd';

export const ProgressBar = ({ percent, formatPercentText }) => (
  <div className="text-white flex">
    <Progress
      percent={percent}
      status="active"
      showInfo={false}
      size='large'
    />
    <div className="ml-4 text-base">{percent}%</div>
  </div>
)
