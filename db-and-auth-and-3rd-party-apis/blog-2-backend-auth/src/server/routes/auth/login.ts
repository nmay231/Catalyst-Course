import { Router } from 'express'
import * as passport from 'passport'

import { CreateToken } from '../../utils/security/tokens'

const router = Router()

router.post('/', passport.authenticate('local'), async (req, res, next) => {
    try {
        let token = await CreateToken({ authorid: req.user.id })
        res.json({
            token,
            authorid: req.user.id,
            role: req.user.role,
        })
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

export default router