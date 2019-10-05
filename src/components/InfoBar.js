import React from 'react';

const InfoBar = ({ statusMessages }) => (
  <div className="infoBar">
    <div className="innerContainer">
        {statusMessages}
    </div>
  </div>
);

export default InfoBar;