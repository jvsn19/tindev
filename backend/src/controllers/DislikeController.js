import Dev from '../models/Dev'

export default {
    async store(req, res) {
        try {
            const { user } = req.headers
            const { target } = req.body

            const loggedDev = await Dev.findById(user)
            
            if(loggedDev.dislikes.indexOf(target) != -1) {
                return res.json(loggedDev)
            }

            loggedDev.dislikes.push(target)
            await loggedDev.save()

            return res.json(loggedDev)
        }        
        catch(err) {
            return res.json(Object(err))
        }
    }
}