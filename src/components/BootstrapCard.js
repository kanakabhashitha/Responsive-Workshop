import React from "react";

import { Card } from "react-bootstrap";
import "../Styles/BootstrapCardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faVideo,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function BootstrapCard(props) {
  const { title, description, image } = props;

  return (
    <>
      <Card className="card">
        <Card.Img className="cardImg" variant="top" src={image} />

        <Card.Body className="cardBody">
          <div className="cardPrice">$ 15</div>
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className="cardDescription">{description}</Card.Text>

          <div className="ratinGroup">
            <div className="starGroup">
              <FontAwesomeIcon className="star" icon={faStar} color="#f47925" />
              <FontAwesomeIcon className="star" icon={faStar} color="#f47925" />
              <FontAwesomeIcon className="star" icon={faStar} color="#f47925" />
              <FontAwesomeIcon
                className="star"
                icon={faStarHalfAlt}
                color="#f47925"
              />
              <FontAwesomeIcon className="star" icon={faStar} color="#d9d9d9" />
            </div>
            <div className="ratingCount">4.8</div>
          </div>

          <div className="iconSection">
            <div className="iconGroup">
              <FontAwesomeIcon
                className="icon"
                icon={faYoutube}
                color="#d9d9d9"
              />
              <div className="iconText">Video</div>
            </div>
            <div className="iconGroup">
              <FontAwesomeIcon
                className="icon"
                icon={faVideo}
                color="#d9d9d9"
              />
              <div className="iconText">54</div>
            </div>
            <div className="iconGroup">
              <FontAwesomeIcon
                className="icon"
                icon={faDownload}
                color="#d9d9d9"
              />
              <div className="iconText">54</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default BootstrapCard;
