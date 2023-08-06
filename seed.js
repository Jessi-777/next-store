const Stripe = require('stripe');
const products = require('./products');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = Stripe("sk_test_51NbTcoDNpXFeOTHlaihfS6WM4STLR7ORlzVQffkEaVivUtVY4OQThIL6g55DPhacahjozzztpyTE5SlwGUyFJxQd00Jzs2fLUl");

(async () => {
    for(const product of products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price
            },
            images: [product.image]
        });
        console.log(stripeProduct.name, ":", stripeProduct.id)
    }
})()