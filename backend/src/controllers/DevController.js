import axios from 'axios'
import Dev from '../models/Dev'

export default {
    async store({ body: {username} }, res) {
        try {
            const userExists = await Dev.findOne({user: username})
            
            if(userExists) {
                return res.json(userExists)
            }

            const { data, status } = await axios.get(`https://api.github.com/users/${username}`)
            const {name, bio, avatar_url} = data
            const dev = await Dev.create({name, user: username, bio, avatar: avatar_url})
            
            return res.json(dev)
        }
        catch(err) {
            return res.json(err)
        }
    }
}