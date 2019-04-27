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

    console.log(card);
    return (
        <div className="container-item">

            {date &&
                <p>{date}</p>
            }

            {title &&
                <p className="subtitle" >{title}</p>
            }

            {subtitle &&
                <h4>{subtitle}</h4>
            }

            {body &&
                <ReactMarkdown source={body} />
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

