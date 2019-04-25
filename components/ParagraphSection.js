import React from 'react';
//libs
import ReactMarkdown from 'react-markdown';

const ParagraphSection = (props) => {

    const { section = {} } = props;
    const { id, type, alignment = "container-start", title, subtitle, body } = section;

    return (
        <div className={['container', 'container-paragraph', alignment].join(' ')}>
            <div className="container-item">
                {title &&
                    <ReactMarkdown className="title" source={title} />
                }
                {subtitle &&
                    <ReactMarkdown className="subtitle" source={subtitle} />
                }
                <ReactMarkdown source={body} />
            </div>
        </div>
    )
}

export default ParagraphSection