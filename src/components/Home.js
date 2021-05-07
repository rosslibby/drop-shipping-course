import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import BuyDiscord from "./Payments/BuyDiscord";
import BuyMentorship from "./Payments/BuyMentorship";
import SignUpForm from "./SignUpForm";
import "../home-style.css";
import SignIn from "./SignIn";

class Home extends Component {
  componentDidMount() {
    if (this.props.user !== undefined && this.props.user !== null) {
      const {
        user: { uid }
      } = this.props;

      this.props.checkPayment(uid);
    }
  }

  render() {
    const {
      payment: { course },
      user
    } = this.props;

    if (course) window.location.pathname = "/portal";

    return user ? (
      <a href="./portal">Proceed to the Portal</a>
    ) : (
      <div className="home-registration-options">
        <div style={{ width: "100%" }}>
          <SignUpForm />
        </div>
      </div>
    );

    return user ? (
      course === true ? (
        "You have the course"
      ) : (
        <div className="home-container">
          <span className="home-heading">You just earned $3,571!</span>
          <p style={{ fontSize: "1rem", textAlign: "center" }}>
            (Feel free to skip this and{" "}
            <a href="./portal">Proceed to the Portal</a>)
          </p>
          <p>
            You just took your first step toward maximizing your income. This is
            so exciting because it proves that you are willing to take action
            and do <em>whatever it takes</em>{" "}
            <strong>to create passive income.</strong>
          </p>
          <p>
            I gave you over $3,500 of resources, information and coaching and I
            included more than I ever knew before I made my first{" "}
            <strong>half million in sales.</strong>
          </p>
          <p>
            You could effectively take everything I just <strong>gave</strong>{" "}
            you and build your own e-commerce business and scale it to the moon.
          </p>
          <p>
            Because here's the thing that most gurus don't want you to know:{" "}
            <strong>it's not that difficult.</strong>
          </p>
          <p>
            I'm not saying you will become an overnight millionaire like so many
            of them claim. In fact, I don't promise anyone mega riches and
            yachts. I know a few specific things:
          </p>
          <span className="home-heading">My system works</span>
          <p>
            My method for finding products to sell and finding customers to buy
            those products is <strong>insanely</strong> effective. I continue to
            replicate it over and over.
          </p>
          <span className="home-heading">E-commerce is easy to start</span>
          <p>
            Most people get started with no problem. The places they get stuck (
            <strong>data analysis</strong>, <strong>scaling</strong> and{" "}
            <strong>automation</strong>) are where I excel.
          </p>
          <p>And these are the systems I will help you with.</p>
          <span className="home-heading">100% Replicable</span>
          <p>
            I build store after store and no, most of them do not make me tens
            or hundreds of thousands of profit per month.{" "}
            <strong>
              Most make me a few hundred dollars of profit per day.
            </strong>
          </p>
          <p>
            A lot of gurus promise stores doing thousands of dollars of profit
            daily. I have built these stores and, while they are relatively
            straightforward for me, they take much higher level of commitment
            and a much higher budget to create.
          </p>
          <p>
            That is why I released my own blueprint. I want to share my{" "}
            <strong>reliable</strong> system for generating income online. Sure,
            we all want to earn $10,000 a day, but think for a moment:
          </p>
          <p>
            <strong>
              How much would your life change if you earned just an extra $100
              per day
            </strong>{" "}
            with almost no effort? <strong>That's $36,500 a year.</strong> I
            don't know <strong>anyone</strong> who would say no to that.
          </p>
          <p>Ok anyway, back to my story...</p>
          <span className="home-heading">Over $500k in sales</span>
          <p>To continue my story...</p>
          <p>
            I had mostly automated my store so figured I would start new brands.
          </p>
          <p>
            I applied my own strategies and methods and within 1 week{" "}
            <strong>I was profiting $200/day</strong> from a new brand after an
            initial investment of $150.
          </p>
          <p>I replicated this system and tested it in every which way.</p>
          <p>
            I developed a solid strategy to build strong,{" "}
            <strong>profitable</strong> e-commerce brands that earn{" "}
            <strong>passive income.</strong>
          </p>
          <p>
            Most brands will not profit $40k/month. Most of my brands are closer
            to the <strong>$4k-$12k/month mark.</strong>
          </p>
          <p>
            I have one brand that does 6 figures month over month; the others
            just do 4-5 figures each month.
          </p>
          <p>
            If you profit even $1208.33/month you are making a full time
            minium-wage income.
          </p>
          <p>
            I won't promise that my strategies will get you mansions and lavish
            vacations. That's up to you.
          </p>
          <p>
            I know that my methods work and honestly, there isn't a{" "}
            <em>good</em> reason to share my methods for free. Here's the thing:
          </p>
          <span className="home-heading">
            I HATE seeing people get scammed.
          </span>
          <p>
            There are a <strong>lot</strong> of people claiming to teach the
            same things that I teach. They charge hundreds to thousands of
            dollars and their training/courses/mentorships are, to put it
            nicely, some of the worst investments you will ever make. Believe,
            I'd know, I bought them.
          </p>
          <p>
            These self-proclaimed "experts" or "gurus" promise that you will
            achieve extreme wealth virtually overnight.
          </p>
          <p>
            They pose in rented exotic cars and AirBnB penthouses and claim to
            be living the good life.
          </p>
          <p>
            They take screenshots of their e-commerce stores' peformance charts
            and <strong>photoshop them</strong> to look far more successful than
            they really are.
          </p>
          <p>I don't do any of that.</p>
          <p>I don't promise Balenciagas or Gucci belts.</p>
          <p>I won't tell you that financial freedom is just a click away.</p>
          <p>
            <strong>Here's what I will tell you:</strong>
          </p>
          <p>
            The average person spends $71/month on their phone bill.{" "}
            <strong>
              My system is 100% capable of directing you in creating a brand
              that will cover that cost and then some.
            </strong>
          </p>
          <p>
            The average homeowner pays $1,029/month for their mortgage. I used
            my system to build multiple stores that{" "}
            <strong>passively earned that daily.</strong>
          </p>
          <p>
            Would an extra $1,200/month change your life? My system has gotten
            me there <strong>repeatedly</strong>.
          </p>
          <p>
            How much do you earn at your job? With the right strategy,{" "}
            <strong>you can quit your job</strong> and do e-commerce full-time.
          </p>
          <p>
            Want to have direct access to me for any questions you have? Join my
            Discord server and learn in a group setting with all my other
            students.
          </p>
          <BuyDiscord uid={user.uid} />
          <p>Are you looking to build a lasting brand?</p>
          <p>
            Do you want me to personally oversee every step of your e-commerce
            business as you create it from the ground up?
          </p>
          <p>
            I love working one-on-one with students to help them build brands
            that generate passive income for them every day.
          </p>
          <p>
            <strong>Here's what my mentorship program entails:</strong>
          </p>
          <p>
            I help you determine <strong>what to sell</strong>
          </p>
          <p>
            I guide you through creating your brand (name, logo, website, social
            media profiles)
          </p>
          <p>
            I give you access to product sourcing agents who provide lower costs
            and faster shipping
          </p>
          <p>I coach you in acquiring customers</p>
          <p>
            I check in with my students on a group call once weekly to ensure
            that everything is running smoothly and <strong>profitably</strong>
          </p>
          <p>
            You can direct-message me at <em>any time</em> if you have any
            questions at all.
          </p>
          <p>If you are interested in my group mentorship, sign up below.</p>
          <p>
            I currently have 5 spots open in my personal mentorship program.
          </p>
          <BuyMentorship uid={user.uid} />
          <p>
            or <a href="./portal">Proceed to the Portal</a>
          </p>
        </div>
      )
    ) : (
      <div>
        <SignIn />
        <div className="home-container">
          <span className="home-heading">I made $40k in 1 month</span>
          <p>
            It was my first month after quitting my job. I had been earning a
            6-figure salary working for someone else but I had my own dreams to
            consider.
          </p>
        </div>
        <div className="home-registration-options">
          <div style={{ width: "100%" }}>
            <SignUpForm />
          </div>
        </div>

        <div className="home-container">
          <p>
            I won't give you the whole sob-story. I quit my job because, like
            you, I wanted to make a lot of money and that wasn't going to happen
            working for someone else.
          </p>
          <p>
            I started my new brand in the first week of February, following the
            exact methods and strategies I had developed and tested over the
            past half a year.
          </p>
          <p>Within 1 week I was making $300/day profit.</p>
          <p>2 weeks after that I was making $2,000/day profit.</p>
          <p>
            I profited $40,000 in my first month of my e-commerce brand. That
            was 34% of my total sales which were upwards of $117k.
          </p>
          <p>2 months later I had crushed $500k in sales.</p>
          <p>
            <strong>
              I share my highly recplicable strategy in my blueprint.
            </strong>
          </p>
          <p>
            I take you through every single step of creating a{" "}
            <strong>profitable</strong> online brand to maximize your income.
          </p>
          <span className="home-heading">Here's the question:</span>
          <p>
            Are you ready to take action, or are you going to{" "}
            <strong>stay</strong> where you currently are?
          </p>
          <p>
            I'll be honest: if you are not ready to take action to{" "}
            <strong>improve your life</strong>, I don't want you signing up at
            all.
          </p>
          <p>
            I provide <strong>value</strong> and I spend{" "}
            <strong>hours and hours</strong> refining my methods, writing
            content and making videos to help each of my students individually
            achieve success. If you are not ready to put in the effort and
            commit to this process - even with me guiding every step of the way
            - then don't waste my time or yours.
          </p>
          <p>
            If, however, <strong>you want your life to be better</strong>, then
            start by signing below! There is absolutely 0 cost for this part.
          </p>
          <p>Here is what you'll get when you sign up today:</p>
          <p>
            <strong>Access to my Blueprint ($1,497 value)</strong>
          </p>
          <p>
            My Blueprint is an entire course teaching you how to build your own
            e-commerce drop shipping brand from start to finish. I cover every
            step so that you can follow the exact strategies I use to generate
            hugely profitable stores time after time.
          </p>
          <p>
            Access to my <strong>free Facebook group</strong> where you will
            learn with other motivated students just like you.{" "}
            <strong>Gurus tend to charge close to $600 per YEAR</strong> for
            groups like these, but I'm giving mine for <strong>free.</strong>
          </p>
          <p>
            You will get acceess to my free{" "}
            <strong>
              20 step guide to starting a profitable online brand ($197 value)
            </strong>
          </p>
          <p>
            Access to a premiere list of products that you can start selling
            right now to start generating income online{" "}
            <strong>($780 value)</strong>
          </p>
          <p>
            My custom-built strategy for leveraging free methods on Instagram to{" "}
            <strong>make profitable sales</strong> without spending any money{" "}
            <strong>($497 value)</strong>
          </p>
          <span className="home-heading">Sign up today</span>
        </div>
        <div className="home-registration-options">
          <div style={{ width: "100%" }}>
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  payment: {
    course: false,
    mentorship: false,
    discord: false
  }
};

const mapStateToProps = ({ payment, user }) => {
  return {
    payment,
    user
  };
};

export default connect(mapStateToProps, actions)(Home);
