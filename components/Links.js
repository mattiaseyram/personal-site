import React, { Fragment } from 'react';

const Links = () => {

    const links = [
        {
            path: '#intro',
            label: 'intro'
        },
        {
            path: '#contact',
            label: 'contact'
        },
        {
            path: '#experience',
            label: 'experience'
        },
        {
            path: '#projects',
            label: 'projects'
        },
        {
            path: '/static/pdf/Mattias Eyram Resume Spring 2019 WEB.pdf',
            label: 'resume'
        }
    ];

    const bullet = (key) => (
        <span key={key}> - </span>
    );

    const linkElements = links
        .map((item, i) => (
            <a href={item.path} className="" key={i}>{item.label}</a>
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