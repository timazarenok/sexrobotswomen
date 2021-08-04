import React from "react";
import { Card, Image } from "react-bootstrap";

const BlogItem = () => {
  return (
    <>
      <Card>
        <Card.Header>
          <div className="card-header">
            Author <p>Date</p>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Title Title Title Title Title Title Title</Card.Title>
          <Card.Title className="card-subtitle">
            SubTitle SubTitle SubTitle SubTitle SubTitle SubTitle SubTitle
            SubTitle SubTitle SubTitle SubTitle SubTitle SubTitle SubTitle
          </Card.Title>
          <Card.Text>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </Card.Text>
          <Image className="card-image" src="" alt=""/>
          <div className="image-description">
            image description
            <hr />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogItem;
