import {renderEntireTree} from "../../render";

let state = {
    profilePage: {
        postsData: [
            {message: 'Hi, how are you?', id: '1', likesCounts: '5'},
            {message: 'It\' s my first post', id: '2', likesCounts: '10'},
            {message: 'I love React', id: '3', likesCounts: '15'},
        ]
    },
    dialogsPage: {
        messages: [
            {message: 'Hey', id: '1'},
            {message: 'I love is React', id: '2'},
            {message: 'I love Java Script', id: '3'},
            {message: 'I work as a programmer', id: '4'},
        ],
        dialogs: [
            {name: 'Alexandr', id: '1'},
            {name: 'Alexey', id: '2'},
            {name: 'Dima', id: '3'},
            {name: 'Andrey', id: '4'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        message: postMessage,
        id: 5,
        likesCounts: 8
    }
    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}

export default state;