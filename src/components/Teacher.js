import React, { Component } from "react";
import { YoutubeDataAPI } from "youtube-v3-api";
import { withRouter, useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import teachers from "../teachers";
const API_KEY = "AIzaSyBzOcJ0jfanrYT83za0vcctDcnkvVjtqPU";
const api = new YoutubeDataAPI(API_KEY);

class Teacher extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    console.log(params.id);
    const teacher = teachers.filter(
      teacher => teacher.instagram === params.id
    )[0];
    console.log(teacher);

    const { videos } = teacher;
    this.getVideos(videos);
  }

  getVideos(playlistId) {
    if (!playlistId) return null;

    api.searchPlaylistItems(playlistId, 5).then(res => {
      const { items } = res;
      const videos = items.map(item => {
        const {
          contentDetails: { videoId },
          snippet: { title }
        } = item;
        return (
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <iframe
                    src={`https://youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0`}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      });

      this.setState({ videos });
    });
  }

  render() {
    const { videos } = this.state;

    return <div>{videos}</div>;
  }
}

export default withRouter(Teacher);
