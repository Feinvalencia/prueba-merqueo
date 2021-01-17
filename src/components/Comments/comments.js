import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { handleDate } from '../../helpers';
import './styles.scss';
import imageProfile from '../../resources/image/profile.png';

const Comments = (props) => {
  return (
    <div>
      <div className="count-comments">
        <Grid fluid>
          <Row>
              <Col xs={6}>
                <>
                    Reacciones { props.reactions }
                </>
                </Col>
            <Col xs={6}>
                <>
                  Comentarios { props.comments.length }
                </>
            </Col>
          </Row>
        </Grid>
      </div>
      <div>
        {
          props.comments.map(comment => {
            const date = handleDate(comment.date);
            return (
              <Grid fluid key={comment.id}>
                <Row>
                  <Col xs={2} md={1} className="img-center">
                    <img className="image-comment" src={imageProfile} alt="Profile" />
                  </Col>
                  <Col xs={10} md={11}>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <p className="content-comment">
                            <span className="post-name"> { comment.name } </span>
                            { comment.text }
                          </p>
                          <p className="post-date">
                            { date }
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Grid>
            );
          })
        }
      </div>
    </div>
  );
};

export default Comments;
