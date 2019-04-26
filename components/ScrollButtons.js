import React, { useState } from 'react';
//libs
import Scrollspy from 'react-scrollspy';

const ScrollButtons = (props) => {

    const { sections } = props;

    const [links, setPrevSection] = useState({
        prev: 'section1',
        next: 'section2'
    });

    const setLinks = (currentSection) => {

        const curIndex = sections.findIndex(item => item === currentSection);

        const prevIndex = Math.max(curIndex - 1, 0);

        const nextIndex = Math.min(curIndex + 1, sections.length - 1);

        setPrevSection({
            prev: sections[prevIndex],
            next: sections[nextIndex]
        });
        
    };

    return (
        <React.Fragment>
        <div className="scroll-buttons-container">
            <a className="scroll-button" href={'#'+links.prev}>
                <i className="fas fa-chevron-up"></i>
            </a>
            <a className="scroll-button" href={'#'+links.next}>
                <i className="fas fa-chevron-down"></i>
            </a>
        </div>
        <Scrollspy items={sections} onUpdate={(el) => setLinks(el ? el.id : null)}/>
        </React.Fragment>
    )
}

export default ScrollButtons;