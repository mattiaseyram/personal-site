import React, { Fragment } from 'react';
//libs
import ReactMarkdown from 'react-markdown';

const ProjectSection = (props) => {

    const { section = {} } = props;
    const { id, type, alignment = "container-start", title, subtitle, body, cards = [] } = section;

    const divider = (key) => (<div className="divider" key={key}/>);

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

            <div className={['container', 'container-projects', alignment].join(' ')}>


            </div>

        </Fragment>
    )
}

export default ProjectSection;