import React, { Fragment } from 'react';
//libs
import ReactMarkdown from 'react-markdown';
import { Carousel } from 'react-responsive-carousel';

const settings = {
    infiniteLoop: true,
    showThumbs: false,
};


const Card = (props) => {

    const { card = {} } = props;
    const { title, subtitle, date, body, images = [] } = card;

    const imageItems = images
        .map((image, i) => (
            <div key={i}>
                <img className="card-image" src={image} />
            </div>
        ));

    return (
        <div className="container-item card">

            {title &&
                <p className="card-title" >{title}</p>
            }

            {(date || subtitle) &&
                <div className="card-subtitle-container">
                <p className="card-subtitle">{subtitle}</p>
                <p className="card-subtitle card-date">{date}</p>

                </div>
            }

            <div className="divider" />

            {body &&
                <ReactMarkdown className="card-text" source={body} />
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

export default Card;

