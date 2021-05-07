import React, { Component } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import teachers from "../teachers";
import { YoutubeDataAPI } from "youtube-v3-api";
const API_KEY = "AIzaSyBzOcJ0jfanrYT83za0vcctDcnkvVjtqPU";
const api = new YoutubeDataAPI(API_KEY);

export default class Teachers extends Component {
  constructor() {
    super();

    this.state = {
      educators: teachers
    };
  }
  followers(number) {
    if (number < 1000) return number;

    if (number > 999999999) return `${number / 1000000000}B`;
    else if (number > 999999) return `${number / 1000000}M`;

    return `${number / 1000}K`;
  }

  componentDidMount() {
    const { educators } = this.state;
    educators.map(educator => this.getSubscribers(educator.youtube));
  }

  educators() {
    const { educators } = this.state;
    return educators.map((teacher, i) => {
      const {
        avatar,
        followers,
        instagram,
        name,
        subscribers,
        youtube
      } = teacher;

      return (
        <div className="social" key={`teacher_${i}`}>
          <Col>
            <Row>
              <Col>
                <span className="social__name">{name}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4} lg={4} xl={4}>
                {/* <Link to={`educators/${instagram}`}> */}
                <Image src={avatar} className="avatar" />
                {/* </Link> */}
              </Col>
              <Col xs={8} md={8} lg={8} xl={8}>
                <Row>
                  <Col>
                    <Button
                      variant="danger"
                      href={youtube}
                      target="_blank"
                      className="social-button"
                    >
                      <span>
                        <i className="fa fa-youtube" />
                        <span className="social-button__text">Youtube</span>
                      </span>
                      <span className="educator__followers">
                        <span className="social-button__count">
                          {this.followers(subscribers)}
                        </span>
                      </span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant="primary"
                      href={`https://instagram.com/${instagram}`}
                      target="_blank"
                      className="social-button"
                    >
                      <span>
                        <i className="fa fa-instagram" />
                        <span className="social-button__text">{instagram}</span>
                      </span>
                      <span className="educator__followers">
                        <span className="social-button__count">
                          {this.followers(followers)}
                        </span>
                      </span>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </div>
      );
    });
  }

  getSubscribers(channelId) {
    const { educators } = this.state;
    const modifiedEducators = educators;
    const teacher = teachers.findIndex(
      teacher => teacher.youtube === channelId
    );

    api.searchChannel(channelId).then(res => {
      const {
        statistics: { subscriberCount }
      } = res.items[0];
      modifiedEducators[teacher].subscribers = subscriberCount;
      this.setState({
        educators: modifiedEducators
      });
    });
  }

  render() {
    return <Row>{this.educators()}</Row>;
  }
}
