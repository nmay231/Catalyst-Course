import {Router} from 'express'
import * as stripeLoader from 'stripe'

const router = Router()

const stripe = new stripeLoader(process.env.STRIPE_SK)

router.post('/', async (req, res) => {
    let {tokenid, amount, name}: {tokenid: string, amount: string, name: string} = req.body
    let donation = await stripe.charges.create({
        currency: 'usd',
        amount: parseInt(amount)*100,
        source: tokenid,
        description: 'Donation by: '+name,
    })
    if (!donation) {
        res.status(400).json('Failed to create charge')
    }
    res.status(200).json('success')
})

export default router