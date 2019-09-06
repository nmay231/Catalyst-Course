import {Router} from 'express'

import {sendEmail} from '../../utils/apis/mailgun'

const router = Router()

router.post('/spam-me', (req, res) => {
    try{
        let {from, subject, content, hasHtml}:
            {from: string, subject: string, content: string, hasHtml: boolean} = req.body
        let to = process.env.MY_EMAIL

        sendEmail({from, to, subject, content, hasHtml})
        res.status(200).json('Email sent successfully')
    } catch (err) {
        console.error(err)
        res.status(500).json('Could not send email')
    }
})

export default router