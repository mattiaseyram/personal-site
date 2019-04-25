import React from 'react';
//libs
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const ContactSection = (props) => {

    const { section = {} } = props;
    const { id, type, alignment = "container-start", title, subtitle, body, links = [] } = section;

    const linkElements = links.map((link, i) => {

        return (

            <Link href={link.address} key={i}>{link.title}</Link>

        );
    });

    return (
        <div className={['container', 'container-links', alignment].join(' ')}>

            <div className="container-item">

                {title &&
                    <ReactMarkdown className="title" source={title} />
                }

                {subtitle &&
                    <ReactMarkdown className="subtitle" source={subtitle} />
                }

                {linkElements}

            </div>

        </div>
    )
}

export default ContactSection