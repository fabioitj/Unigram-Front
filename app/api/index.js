import axios from 'axios';

const domain = 'http://localhost:3000';

const defaultHeader = () => ({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('token')
});

const api = {
    login: (email, password) =>
        axios.post(domain+'/login', {
            email: email,
            password: password
        }),
    register: (name,username,email,birth_date,password) =>
        axios.post(domain + '/user', {
            name: name,
            username: username,
            email: email,
            birth_date: birth_date,
            password: password
        }),
    feed: () => 
        axios.get(domain + '/publication/feed/', defaultHeader),
    findUser: (username) =>
        axios.get(domain + '/user/search', { search: username }, defaultHeader),
    findIdUser: (id) =>
        axios.get(domain + '/user/' + id, defaultHeader),
    getMessages: () =>
        axios.get(domain + '/messages', defaultHeader),
    getChatMessages: () =>
            axios.get(domain + '/messages', defaultHeader),
    sendMessage: (message) =>
        axios.post(domain + '/message', { body: message }, defaultHeader),
    getUserPosts: (id) =>
        axios.get(domain + '/publication/user/' + id, defaultHeader),
    getPost: (id) =>
        axios.get(domain + '/publication/' + id, defaultHeader),
    createPost: (image, description) =>
        axios.post(domain + '/publication', {image: image, description: description}, defaultHeader),
    editPost: (id, description) =>
        axios.put(domain + '/publication/' + id, {description: description}, defaultHeader),
    deletePost: (id) =>
        axios.delete(domain + '/publication/' + id, defaultHeader),
    getComments: (id) =>
        axios.get(domain + '/comment/' + id, defaultHeader),
    createComment: (id, comment) =>
        axios.post(domain + '/comment', {description: comment, publication: id}, defaultHeader),
    editComment: (id, comment) =>
        axios.put(domain + '/comment/' + id, {description: comment}, defaultHeader),
    deleteComment: (id) =>
        axios.delete(domain + '/comment/' + id, defaultHeader),
};

export default api;