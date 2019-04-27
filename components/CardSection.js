import React, { Fragment } from 'react';
//libs
import ReactMarkdown from 'react-markdown';
//components
import Card from './Card';

const CardSection = (props) => {

    const { section = {} } = props;
    const { id, type, alignment = "container-start", title, subtitle, body, cards = [] } = section;

    const cardElements = cards
        .map((card,i) => (<Card card={card} key={i}/>));

    return (
        <div className="container-top" id={id}>
            {title &&
                <div className="container container-start">
                    <ReactMarkdown className="title" source={title} />
                </div>
            }

            {subtitle &&
                <div className="container container-end">
                    <ReactMarkdown className="subtitle" source={subtitle} />
                </div>
            }
            
            {(title || subtitle) &&
                <div className="divider" />
            }

            <div className={['container', 'container-cards', alignment].join(' ')}>
                {cardElements}
            </div>

        </div>
    );
};

export default CardSection;