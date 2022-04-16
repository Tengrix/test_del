import axios from 'axios'
const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export const getPosts = (limit = 10, page = 1) => {
    return instance.get('posts', {
        params:{
            _limit:limit,
            _page:page,
        }
    })
}
export const getPostById = (id:string) => {
    return instance.get('posts/'+id)
}
export const getPostComments = (id:string) => {
    return instance.get(`posts/${id}/comments`)
}