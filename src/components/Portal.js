import React from "react";
import { users } from "../firebaseConfig";
import { Col, Row } from "react-bootstrap";
import {
  Blueprint,
  Discord,
  Ebook,
  Facebook,
  Instagram,
  Mentorship
} from "./Portal/";

const updatePayment = user => {
  if (window.location.search.split("p=").length > 1) {
    const purchased = window.location.search.split("p=")[1].split("&")[0];

    users
      .child(user)
      .once("value")
      .then(item => {
        /**
         * Update if user has purchased
         */
        const { course, discord, mentorship } = item.val();

        if (course && course !== true) {
          const courseCheck = course.split("__");
          if (courseCheck[0] === user && courseCheck[1] === purchased)
            users.child(user).update({
              course: true
            });
        }

        if (discord && discord !== true) {
          const discordCheck = discord.split("__");
          if (discordCheck[0] === user && discordCheck[1] === purchased)
            users.child(user).update({
              discord: "pending approval"
            });
        }

        if (mentorship && mentorship !== true) {
          const mentorshipCheck = mentorship.split("__");
          if (mentorshipCheck[0] === user && mentorshipCheck[1] === purchased)
            users.child(user).update({
              mentorship: "pending approval"
            });
        }
      });
  }
};

const Portal = ({ user }) => {
  if (window.location.search) updatePayment(user);
  return (
    <div className="portal">
      <Row>
        {/*<Col className="col" md={6} xs={12} lg={4}>
          <Facebook />
        </Col>*/}
        {/*<Col className="col" md={6} xs={12} lg={4}>
          <Ebook />
        </Col>*/}
        <Col className="col" md={6} xs={12} lg={4}>
          <Instagram />
        </Col>
        <Col className="col" md={6} xs={12} lg={4}>
          <Blueprint uid={user} />
        </Col>
        {/*<Col className="col" md={6} xs={12} lg={4}>
          <Discord uid={user} />
        </Col>*/}
        {/*<Col className="col" md={6} xs={12} lg={4}>
          <Mentorship uid={user} />
  </Col>*/}
      </Row>
    </div>
  );
};

export default Portal;
