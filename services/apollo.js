import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http'

export default {
    auth: withData({
        link: new HttpLink({
            headers: {},
            uri: 'http://localhost:4444/graphql'
        })
    })
}