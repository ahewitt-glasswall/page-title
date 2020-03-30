import React from 'react';

import styles from './PageTitle.scss';

const PageTitle = ({heading, subHeading, children}) => {
    return (
        <div className="titleContainer">
            <h1 className="heading">{heading}</h1>
            <h2 className="subHeading">{subHeading}</h2>
            <div className="childContainer">
                {children}
            </div>
        </div>
    );
};

export default PageTitle;