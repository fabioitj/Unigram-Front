import axios from 'axios';

const domain = 'http://localhost:3000';

const defaultHeader = () => ({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer '+ sessionStorage.getItem('@unigram-session-token')
});

const api = {
    login: (email, password) =>
        axios.post(domain+'/login', {
            email: email,
            password: password
        }),
    register: (name, username, password, confirmPassword, email, birth_date) => {
        console.log("API");
        return axios.post(domain + '/user', {
            name: name,
            username: username,
            email: email,
            birth_date: birth_date,
            password: password,
            confirm_password: confirmPassword
        })
    },
    getMyself: () => 
        axios.get(domain + '/user/me', {headers: defaultHeader()}),
    feed: () => {
        return axios.get(domain + '/publication/feed', {headers: defaultHeader()})},
    like: (id) =>
        axios.put(domain + '/publication/like/'+id, {}, {headers: defaultHeader()}),
    unlike: (id) =>
        axios.put(domain + '/publication/unlike/'+id, {}, {headers: defaultHeader()}),
    findUser: (username) =>
        axios.get(domain + '/user/search/'+username, {headers: defaultHeader()}),
    findIdUser: (id) =>
        axios.get(domain + '/user/' + id, {headers: defaultHeader()}),
    getMessages: () =>
        axios.get(domain + '/messages', {headers: defaultHeader()}),
    getChatMessages: (id) =>
        axios.get(domain + '/message/' + id, {headers: defaultHeader()}),
    sendMessage: (message) =>
        axios.post(domain + '/message', { body: message }, {headers: defaultHeader()}),
    getUserPosts: (id) =>
        axios.get(domain + '/publication/user/' + id, {headers: defaultHeader()}),
    getPost: (id) =>
        axios.get(domain + '/publication/' + id, {headers: defaultHeader()}),
    connect: (id) =>
        axios.post(domain + '/connection/request', {id_user_requested: id}, {headers: defaultHeader()}),
    disconnect: (id) =>
        axios.delete(domain + '/connection/' + id, {headers: defaultHeader()}),
    block: (id) =>
        axios.put(domain + '/connection/block', {id_connection: id}, {headers: defaultHeader()}),
    acceptConnection: (id) =>
        axios.put(domain + '/connection/accept', {id_connection: id}, {headers: defaultHeader()}),
    rejectConnection: (id) =>
        axios.put(domain + '/connection/reject', {id_connection: id}, {headers: defaultHeader()}),
    createPost: (image, description) =>
        axios.post(domain + '/publication', {image: image, description: description}, {headers: defaultHeader()}),
    editPost: (id, description) =>
        axios.put(domain + '/publication/' + id, {description: description}, {headers: defaultHeader()}),
    deletePost: (id) =>
        axios.delete(domain + '/publication/' + id, {headers: defaultHeader()}),
    getComments: (id) =>
        axios.get(domain + '/comment/' + id, {headers: defaultHeader()}),
    createComment: (id, comment) =>
        axios.post(domain + '/comment', {description: comment, id_publication: id}, {headers: defaultHeader()}),
    editComment: (id, comment) =>
        axios.put(domain + '/comment/' + id, {description: comment}, {headers: defaultHeader()}),
    deleteComment: (id) =>
        axios.delete(domain + '/comment/' + id, {headers: defaultHeader()}),
};

export default api;