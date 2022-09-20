import {addPostCreator, deletePost, ProfilePageType, profileReducer} from './profile-reducer';

let startState = {
    posts: [
        {id: 1, message: 'Hello', likeCount: 12}, // post
        {id: 2, message: 'How are you?', likeCount: 10},
        {id: 3, message: 'Nike', likeCount: 10},
        {id: 4, message: 'Moscow', likeCount: 10}
    ],
} as ProfilePageType

it('new post should be added', () => {
    // 1. test data
    let action = addPostCreator('привет')
    // 2. действия
    let newState = profileReducer(startState, action)
    //3. проверка, что ожидаем получить
    expect(newState.posts.length).toBe(5)
})
it(' message new post should be correct', () => {
    // 1. test data
    let action = addPostCreator('привет')
    let startState = {
        posts: [
            {id: 1, message: 'Hello', likeCount: 12}, // post
            {id: 2, message: 'How are you?', likeCount: 10},
            {id: 3, message: 'Nike', likeCount: 10},
            {id: 4, message: 'Moscow', likeCount: 10}
        ],
    } as ProfilePageType

    // 2. действия
    let newState = profileReducer(startState, action)

    //3. проверка, что ожидаем получить
    expect(newState.posts[4].message).toBe('привет')
})
it('after deleting length of messages', () => {
    // 1. test data
    let action = deletePost(2)
    let startState = {
        posts: [
            {id: 1, message: 'Hello', likeCount: 12}, // post
            {id: 2, message: 'How are you?', likeCount: 10},
            {id: 3, message: 'Nike', likeCount: 10},
            {id: 4, message: 'Moscow', likeCount: 10}
        ],
    } as ProfilePageType

    // 2. действия
    let newState = profileReducer(startState, action)

    //3. проверка, что ожидаем получить
    expect(newState.posts.length).toBe(3)
})
it('после удаления длина не должна измениться если неправильный id передали', () => {
    // 1. test data
    let action = deletePost(6667)
    let startState = {
        posts: [
            {id: 1, message: 'Hello', likeCount: 12}, // post
            {id: 2, message: 'How are you?', likeCount: 10},
            {id: 3, message: 'Nike', likeCount: 10},
            {id: 4, message: 'Moscow', likeCount: 10}
        ],
    } as ProfilePageType

    // 2. действия
    let newState = profileReducer(startState, action)

    //3. проверка, что ожидаем получить
    expect(newState.posts.length).toBe(4)
})
