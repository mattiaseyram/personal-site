import React, { Fragment } from 'react';
//libs
import ReactMarkdown from 'react-markdown';

const ContactSection = (props) => {

    const { section = {} } = props;
    const { id, alignment = "container-start", title, subtitle, links = [] } = section;

    const linkElements = links
        .map((link) => (
            <a href={link.address} className="link-item" key={link.address}>
                {link.icon &&
                    <i className={link.icon}></i>}
                {link.title}
            </a>
        ))
        .reduce((acc, el) => ([...acc, el, <div className="divider" key={acc.length} />]), [])
        .slice(0, -1);

    return (
        <div id={id}>
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

            <div className={['container', 'container-links', alignment].join(' ')}>

                <div className="container-item container-item-center">

                    <img className="profile-image" src="/static/img/me2.png"></img>

                </div>

                <div className="container-item">

                    <div className="link-item-container">

                        {linkElements}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactSection;