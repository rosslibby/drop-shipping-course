import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import EmailSignup from "./EmailSignup";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const getHeading = type => {
  switch (type) {
    case "netflix":
      return (
        <span>
          Netflix:{" "}
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red"
            }}
          >
            $9/mo
          </span>
        </span>
      );
    case "homeOwner":
      return "$216,294";
    // return "$1,029/month";
    case "mobile":
      return "$852";
    // return "$71/month";
    case "student":
      return "$33,600";
    // return "$280/month";
    case "autoInsurance":
      return "$1,500";
    // return "$125.16/month";
    case "car":
      return "$18,635";
    // return "$499/month";
    case "electric":
      return "$1,300";
    // return "$111.67/month";
    case "rent":
      return "$14,392";
    // return "$1,191/month";
    case "nursingHome":
      return "$191,632";
    default:
      return "You don't want to be rich";
  }
};

const getSummary = type => {
  switch (type) {
    case "netflix":
      return "Imagine never having to pay for your Netflix and the subscription never ends. That's perfection.";
    case "homeOwner":
      return "That's how much you would have if you paid the average mortage payment of $1,029 into a high-yield-savings account each month *instead of giving it to the bank*";
    // return "That's the average monthly mortgage payment. Imagine never having to save to make that payment each month - you would be essentially living free. Now picture what your bank account would look like if you had simply saved those payments in a high-yield-savings account: $508,048.";
    case "mobile":
      return "Imgagine you just got a notification from PayPal that someone sent you this much FOR NO REASON. That's how much you would have if you didn't have to pay your phone bill each month (national average is $71/mo)";
    // return "That is how much the average American pays for their monthly phone bill. Imagine if this bill just disappeared - how would your life change?";
    case "student":
      return "That's enough to take a whole year off of work and just chill. And it's how much you would have if you could put your student-loan payments into a high-yield-savings account *instead of sending them to the feds* (national average is $280/mo)";
    // return "The average college graduate will be paying this much each month for the next 10 years. Simply putting that into savings would yield a lump sum of $33,600.";
    case "autoInsurance":
      return "Imagine you just got a notification from PayPal that someone sent you this much FOR NO REASON. That's how much you would have if you didn't have to pay your auto insurance bill each month (national average is $125.16/mo)";
    // return "That's the monthly car insurance payment for the average person. This figure quickly adds up to over $1,500 each year - more than enough for that holiday cruise.";
    case "car":
      return "If you didn't have a car payment, you'd check your bank account 3 years from now and see a MINIMUM of $18k (based on the national average car payment of $499/mo)";
    // return "Would you believe that's how much the average person spends on their car payment each month? Now imagine putting that money into a high-yield-savings account: after 3 years (please tell me your loan term isn't longer than 36 months) you will have $18,635.";
    case "electric":
      return "Maybe if you didn't have to spend $111.67/month just to keep the lights on, you could afford that trip to Cabo. $1,300 is more than enough.";
    // return "The average household spends this on electricity each month. That's over $1,300 just to keep the lights on.";
    case "rent":
      return "You would have that much in savings if you didn't have to pay rent each month (national average is $1,191/mo)";
    case "nursingHome":
      return "Families spend this much on average just to pay for a semi-private room in a nursing home. Imagine if you were putting that in your savings account instead!";
    default:
      return '"Rich" people work for a lot of money. Wealthy people have money working for them.';
  }
};

const getComparison = type => {
  switch (type) {
    case "homeOwner":
      return "You can take your family to Disney World and stay at the resort for almost 2 years straight with this much!";
    case "mobile":
      return "You could get a pair of AirPods and a night at the Four Seasons.";
    case "student":
      return "That is EASILY the down payment on a new condo. Or a Range Rover lease. Either way, that's a lot of green.";
    case "autoInsurance":
      return "You could rent a Lamborghini Huracan for a day with that stack. Or, you know, buy 20 pairs of shoes.";
    case "car":
      return "That's enough to charter your own private jet (plus crew) for 4 hours.";
    case "electric":
      return "That's more than enough to cover an awesome vacation.";
    case "rent":
      return "That's how much you'd pay for pretty sweet Ducati Hypermotard.";
    case "nursingHome":
      return "You could buy a brand new Audi R8 V10 Plus for that.";
    default:
      return "What would you do with that much cash?";
  }
};

const HomePage = ({ facebook }) => {
  const type = useQuery().get("type");
  const heading = getHeading(type);
  const summary = getSummary(type);
  const comparison = getComparison(type);
  const email = (
    <button
      className="facebook-login-button"
      onClick={() => {
        this.setState({
          ...this.state,
          expanded: true
        });
      }}
    >
      <i
        className="fa fa-send"
        style={{
          fontSize: "22px"
        }}
      />
      <span className="facebook-login-button__text">Sign up with Email</span>
    </button>
  );

  return (
    <div>
      <div className="home-container">
        <span className="home-heading">I made $40k in 1 month</span>
        <p>
          It was my first month after quitting my job. I had been earning a
          6-figure salary working for someone else but I had my own dreams to
          consider.
        </p>
      </div>
      <div className="home-registration-options">
        {facebook}
        {email}
        <EmailSignup />
      </div>
      <div className="home-container">
        <p>
          I won't give you the whole sob-story. I quit my job because, like you,
          I wanted to make a lot of money and that wasn't going to happen
          working for someone else.
        </p>
        <p>
          I started my new brand in the first week of February, following the
          exact methods and strategies I had developed and tested over the past
          half a year.
        </p>
        <p>Within 1 week I was making $300/day profit.</p>
        <p>2 weeks after that I was making $2,000/day profit.</p>
        <p>
          I profited $40,000 in my first month of my e-commerce brand. That was
          34% of my total sales which were upwards of $117k.
        </p>
        <p>2 months later I had crushed $500k in sales.</p>
        <p>
          I had mostly automated my store so figured I would start new brands.
        </p>
        <p>
          I applied my own strategies and methods and within 1 week I was
          profiting $200/day from a new brand after an initial investment of
          $150.
        </p>
        <p>I replicated this system and tested it in every which way.</p>
        <p>
          I developed a solid strategy to build strong, profitable e-commerce
          brands that earn passive income.
        </p>
        <p>
          Most brands will not profit $40k/month. Most of my brands are closer
          to the $4k-$12k/month mark.
        </p>
        <p>
          I have one brand that does 6 figures month over month; the others just
          do 4-5 figures each month.
        </p>
        <p>
          If you profit even $1208.33/month you are making a full time
          minium-wage income.
        </p>
        <p>
          I won't promise that my strategies will get you mansions and lavish
          vacations.
        </p>
        <p>
          In fact, I <em>shouldn't</em> promise anything since your success
          depends entirely on <em>you</em>.
        </p>
        <p>
          But I will. I don't promise Balenciagas or Gucci belts. I promise
          results.
        </p>
        <p>
          The average homeowner pays $1,029/month for their mortgage. I can
          easily help you earn that passively.
        </p>
        <p>
          The average person spends $71/month on their phone bill. I can 100%
          help you set up a brand that will cover that cost and then some.
        </p>
        <p>
          Would an extra $1,200/month change your life? I am so confident in my
          strategies that I will <em>promise</em> I can get you there.
        </p>
        <p>
          How much do you earn at your job? With the right strategy (which I
          will help you devise), you can quit your job and do e-commerce
          full-time.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
