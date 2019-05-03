import React, { Fragment } from 'react';

const Links = (props) => {

    const { links = [] } = props;

    const bullet = (key) => (
        <span key={key}> - </span>
    );

    const linkElements = links
        .map(item => (
            <a href={'#' + item} className="" key={item}>{item}</a>
        ))
        .reduce((acc, el) => ([...acc, el, bullet(acc.length)]), [])
        .slice(0, -1);

    return (
        <div className="container container-center">
            <div className="container-item">
                {linkElements}
            </div>
        </div>
    );
};

export default Links;