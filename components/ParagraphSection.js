import React, { Fragment } from 'react';
//libs
import ReactMarkdown from 'react-markdown';

const ParagraphSection = (props) => {

    const { section = {}, useContainer = false } = props;
    const { id, type, alignment = "container-start", title, subtitle, body } = section;

    const divProps = useContainer ? {className:"container-top", id} : {};

    return (
        <div {...divProps}>
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

            <div className={['container', 'container-paragraph', alignment].join(' ')}>
                <div className="container-item">
                    <ReactMarkdown source={body} />
                </div>
            </div>
        </div>
    )
}

export default ParagraphSection;