import React from "react";
import { Card, Image } from "react-bootstrap";

const BlogItem = ({
  author,
  title,
  subtitle,
  text,
  image_description,
  image,
  date,
}) => {
  const dateTransform = () => {
    let d = new Date(date);
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    return curr_date + "-" + curr_month + "-" + curr_year;
  };

  return (
    <>
      <Card>
        <Card.Header>
          <div className="card-header">
            {author} <p>{dateTransform()}</p>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title className="card-subtitle">{subtitle}</Card.Title>
          <Card.Text>{text}</Card.Text>
          {image ? (
            <>
              <Image className="card-image" src={image.url} alt={image_description} />
              <div className="image-description">
                {image_description}
                <hr />
              </div>
            </>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogItem;
