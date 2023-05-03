// no need to oscure key as this is backend, not exposed on browser
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

export default async (req, res) => {
  const { items, email } = req.body;

  
};
