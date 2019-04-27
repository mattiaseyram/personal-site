import React, { Fragment } from 'react';
//libs
import ReactMarkdown from 'react-markdown';
import { Carousel } from 'react-responsive-carousel';

const settings = {
    infiniteLoop: true,
    showThumbs: false,
};


const ProjectCard = (props) => {

    const { card = {} } = props;
    const { title, subtitle, date, body, images = [] } = card;

    const imageItems = images
        .map((image, i) => (
            <div key={i}>
                    <img className="card-image" src={image} />
            </div>
        ));

    console.log(card);
    return (
        <div className="container-item">

            {title &&
                <ReactMarkdown className="subtitle" source={title} />
            }

            <div>
                {imageItems.length > 0 &&
                    <Carousel className="carousel" {...settings}>
                        {imageItems}
                    </Carousel>
                }
            </div>

        </div>
    );
};

export default ProjectCard;

