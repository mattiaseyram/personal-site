import React, { useState } from 'react';
//libs
import Scrollspy from 'react-scrollspy';

const ScrollButtons = (props) => {

    const { sections } = props;

    const [links, setLinks] = useState({
        prev: 'section1',
        next: 'section2'
    });

    const setLinksFromCur = (currentSection) => {

        const curIndex = sections.findIndex(item => item === currentSection);

        const prevIndex = Math.max(curIndex - 1, 0);

        const nextIndex = Math.min(curIndex + 1, sections.length - 1);

        setLinks({
            prev: sections[prevIndex],
            next: sections[nextIndex]
        });
        
    };

    return (
        <React.Fragment>
        <div className="scroll-buttons-container">
            <a className="scroll-button" href={'#'+links.prev} onClick={() => setTimeout(() => setLinksFromCur(links.prev), 50)}>
                <i className="fas fa-chevron-up"></i>
            </a>
            <a className="scroll-button" href={'#'+links.next} onClick={() => setTimeout(() => setLinksFromCur(links.next), 50)}>
                <i className="fas fa-chevron-down"></i>
            </a>
        </div>
        <Scrollspy items={sections} onUpdate={(el) => setLinksFromCur(el ? el.id : null)}/>
        </React.Fragment>
    )
}

export default ScrollButtons;