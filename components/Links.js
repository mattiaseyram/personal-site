import React from 'react';

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
            path: 'static/img/mattias_eyram_resume_fall_2019.pdf',
            label: 'resume'
        }
    ];

    const bullet = (key) => (
        <span key={key}> - </span>
    );

    const linkElements = links
        .map((item, i) => (
            <a href={item.path} className="" key={`links-${i}`}>{item.label}</a>
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