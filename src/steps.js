// import database from "./firebaseApp";
// const steps = [];
// database
//   .ref("/")
//   .once("value", snap => {
//     snap.forEach(data => {
//       let step = data.val();
//       steps.push(step);
//     });
//   })
//   .then(() => {
//     console.log(steps);
//   });

const steps = [
  {
    title: "Intro to Drop Shipping",
    steps: [
      {
        text: "What is drop shipping?",
        description: `Drop shipping is a method of retail in which the retailer does not keep goods in stock, but instead orders the goods directly from the supplier to the customer. The drop shipping company acts as a middleman, simply selling products that are not in stock and then ordering those directly from their source to the customer.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/7T01z8GSBYk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 0
      },
      {
        text: "Drop shipping & e-commerce",
        description: `E-commerce is a method of retailing products and services online. Drop shipping can easily be facilitated in e-commerce by listing products on a website and accepting payments through that website. There exist pre-built solutions known as <em>e-commerce platforms</em>. These platforms make it easy to list products in an online store and accept payment for those products. <strong>Drop shipping with e-commerce</strong><br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/fdEbvhGdLH8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 0
      },
      {
        text: "What shall I sell?",
        description: `<h3>You can sell ANYTHING</h3>E-commerce businesses sell <em>products</em> and <em>services</em>. Believe it or not, you can essentially drop-ship services. That's pretty much what contractors do! Let's say you need some work done on your home: you may hire a construction contractor. That contractor will tell you he can do the job for $10,000. Then, he will hire a <em>subcontractor</em> who is just as qualified to do the job, but he will pay that subcontractor only $8,000 for the job, meaning that the contractor <em>you</em> hired gets to keep $2,000 just for selling the job to you! As you can see, anything can be sold at a profit if you build your business the right way.`,
        expanded: false,
        completed: false,
        level: 0
      },
      {
        text: "How do I source products?",
        description: `Sourcing physical products is easy. You could go to a store like Costco and purchase something in bulk and then resell each inidividual item -- that would be a typical e-commerce retail store. In drop shipping, we find a supplier or manufacturer for a particular product and, instead of purchasing inventory up front, we make an agreement with them that we will buy the products individually and <em>they</em> will be responsible for shipping it out to our customer.`,
        expanded: false,
        completed: false,
        level: 0
      },
      {
        text: "How do I find these manufacturers?",
        description: `<h3>How do I find these manufacturers?</h3>There are a lot of different ways to find suppliers and manufacturers, and one of the most popular is a website called <a href="https://aliexpress.com" target="_blank">AliExpress</a>.`,
        expanded: false,
        completed: false,
        level: 0
      },
      {
        text: "AliExpress (aka your personal gold mine)",
        description: `AliExpress is an online marketplace where thousands of manufacturers (many of whom are based overseas) list their products at prices close to the wholesale (or bulk-ordering) pricing. This is close to the the pricing that major retailers will pay for products when they buy thousands of units at a time. For example, let's say that a mall kiosk is selling plush toys. They will ask $20 to $50 for each toy, but they have 100 of them for sale and probably bought them all at once for only $5 each. AliExpress is the marketplace where you can pay the $5 instead of the $20-50 that the kiosk is trying to sell them for. As a matter of fact, almost every time I see a mall kiosk I am able to find their exact product offerings on AliExpress for significantly lower cost than they were asking.`,
        expanded: false,
        completed: false,
        level: 0
      },
      {
        text: "🚨 WARNING 🚨",
        description: `You'll be ANGRY 😡 when you realize how much you've been overpaying for literally everything you've ever purchased 😱`,
        expanded: false,
        completed: false,
        level: 0
      },
      {
        text: "How does this make money?",
        description:
          "Simple. You sell products for more than you pay for them. You pocket the difference.",
        expanded: false,
        completed: false,
        level: 0
      }
    ]
  },
  {
    title: "Getting Started",
    steps: [
      {
        text: "Create a new email for your store",
        description: `You will use an email to communicate with all of your customers, accept payments and manage your e-commerce store. Make a new email so that nothing gets lost in your current 482,471 unread messages. I recommend <a href='https://gmail.com' target='_blank'>Gmail</a>.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/bz_qdZfPruM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 1
      },
      {
        text: "Create a PayPal account",
        description: `PayPal is an extremely popular (and trusted) payment processor. You will want to have this on your store so that you can accept payments from customers worldwide. Set up your PayPal <em>business</em> account <a href='https://paypal.com/bizsignup' target='_blank'>here</a>.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/VfWBWcGtXpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 1
      },
      {
        text: "Create a Stripe account",
        description: `Stripe is a payment processor that enables you to accept credit card payments internationally. You want to use Stripe <em>instead of</em> Shopify's default payment processor because Shopify has a habit of holding the money that people pay you for up to 6 months without giving you any warning. <a href='https://stripe.com' target='_blank'>Sign up for Stripe here.</a><br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/_27SmuZd0hA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 1
      },
      {
        text: "Create a Facebook Business Manager",
        description:
          "Facebook will initially be the main source of customers for your e-commerce store. Set yourself up as a business on Facebook so that you can reach your potential customers. Don't worry, you don't need to be an official registered business to get started. <a href='https://business.facebook.com' target='_blank'>Sign up for a Business Manager here.</a>",
        expanded: false,
        completed: false,
        level: 1
      },
      {
        text: "Create a Shopify store",
        description: `The moment we've all been waiting for: get yourself an online store! Shopify is an e-commerce platform. All that means is it is a piece of software that creates a website where you can list products or services and other people can buy them. Shopify handles all the heavy lifting - you don't need to write emails or take down payment information. All you do is add in products and you're pretty much set! <a href='https://shopify.com' target='_blank'>Sign up for Shopify here.</a><br /><br /><iframe width="560" height="315" src="https://www.youtube.com/embed/wy5lNKtLOJU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 1
      }
    ]
  },
  {
    title: "Set up your business",
    steps: [
      {
        text: "Select 4 products",
        description: `<h3>One of the BIGGEST problems in drop shipping</h3>Product selection is something that every student I have ever mentored has struggled with -- and it's honestly not that difficult. I recommend starting with 4 products and, instead of doing a LOT of painstaking research, just let feedback from actual potential customers determine which one you will sell. Watch the video below to see my main product research method.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/7xfOtwRT41c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 2
      },
      {
        text: "Import your products",
        description: `This step is extremely simple. There are multiple ways to do this: one is to use a tool such as <a href="https://apps.shopify.com/oberlo" target="_blank">Oberlo</a>, which automatically imports products directly from AliExpress. I use this tool all the time. Another way is to add products directly through Shopify's admin dashboard. I have made a video showing this method in action.<h3>Add a product in Shopify</h3><iframe width="560" height="315" src="https://www.youtube.com/embed/0bW0sHa6lt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 2
      },
      {
        text: "Customize your website",
        description: `Set up your website to be perfect for drop shipping.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/xBvo8GrKfvU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h3>Custom code makes your online store POP</h3><iframe width="560" height="315" src="https://www.youtube.com/embed/WN_dFJSI66M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 2
      },
      {
        text: "Get a logo",
        description: `Make your own professional logo using a tool such as <a href="https://canva.com" target="_blank">Canva</a>.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/pHr_zAfW4Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 2
      },
      {
        text: "Determine your target audience(s)",
        description:
          "This part is pretty simple. Ask yourself what sort of people will buy your product. If you are selling a dog collar, your target audience is probably people that buy dog food. So you will target people who are interested in specific dog food brands. If you are selling a piece of workout equipment, target people interested in fitness, gyms or even fast food. People that consume fast food are probably also interested in improving their own health.",
        expanded: false,
        completed: false,
        level: 2
      }
    ]
  },
  {
    title: "Go public",
    steps: [
      {
        text: "Determine which of your products to sell",
        description:
          "This is painfully simple. You have added a few products to your Shopify store; now it's time to decide which ones you actually want to sell. Obviously you'd like to sell ALL OF THEM, but let's just pick 2 or 3 that you are passionate about. I usually go with products that have a high profit margin as well as very clear, scroll-stopping photos.",
        expanded: false,
        completed: false,
        level: 3
      },
      {
        text: "Make a Facebook page for your business",
        description: `We want to sell our products and for that we need to connect with our potential customers. Facebook is one of the most powerful online marketing tools in the <em>world</em>, and we can use it to market our own products and services through both organic and paid traffic. We will get into those methods later. For now, we need to create our <strong>Facebook Business Page</strong>. This will act as our storefront on Facebook, so that when people see our business name they will be able to find our website and browse and purchase our products. Watch the video below to learn exactly how to create your Facebook business page. You must have a Facebook account in order to create a Facebook business page.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/JfZi1e9Tudk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 3
      },
      {
        text: "Make your first Facebook page post",
        description: `Your ads are as simple as making a Facebook post! All you have to do is upload a photo (I usually upload 3 or 4), add a compelling text caption and publish your post!<br><br><img src="https://i.imgur.com/9RsgnMe.png" />`,
        expanded: false,
        completed: false,
        level: 3
      },
      {
        text: "Promote your page post for engagement",
        description: `<strong>Engagement</strong> is how Facebook describes the likes/reactions, comments and shares that Facebook posts get. Every comment, share and reaction is a single <strong>engagement</strong> and the more <strong>engagement</strong> your post gets, the more Facebook prioritizes showing it to other people. This means that, when you are posting about your products on your Facebook business page, you want to make sure they get the maximum engagement possible so that Facebook will show it to LOTS of people at very low cost to you. The more people that see your post, the more likely you are to make a sale! Promote your post to receive a LOT of engagement by following the video below.<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/sRKEQpahkBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        expanded: false,
        completed: false,
        level: 3
      }
    ]
  }
  // {
  //   title: "Get that paper [coming soon]",
  //   steps: [
  //     {
  //       text: "Test your audiences",
  //       expanded: false,
  //       completed: false
  //     },
  //     {
  //       text: "Groom your ads",
  //       expanded: false,
  //       completed: false
  //     },
  //     {
  //       text: "Sit back and wait",
  //       expanded: false,
  //       completed: false
  //     },
  //     {
  //       text: "Scale",
  //       expanded: false,
  //       completed: false
  //     }
  //   ]
  // }
];

export default steps;
