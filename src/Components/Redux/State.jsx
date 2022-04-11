let store = {
    _state: {
        profilePage: {
            postsData: [
                {message: 'Hi, how are you?', id: '1', likesCounts: '5'},
                {message: 'It\' s my first post', id: '2', likesCounts: '10'},
                {message: 'I love React', id: '3', likesCounts: '15'},
            ],
            newPostText: 'it-kamasutra'
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
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('state change')
    },
    addPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            id: 5,
            likesCounts: 8
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostNext(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}


window.state = store;
export default store;