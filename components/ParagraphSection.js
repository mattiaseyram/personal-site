import React, { Fragment } from 'react';
//libs
import ReactMarkdown from 'react-markdown';

const ParagraphSection = (props) => {

    const { section = {} } = props;
    const { id, type, alignment = "container-start", title, subtitle, body } = section;

    return (
        <Fragment>
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
        </Fragment>
    )
}

export default ParagraphSection;