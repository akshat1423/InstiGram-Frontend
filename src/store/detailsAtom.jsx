import { atom } from 'recoil';

export const detailsAtom = atom({
    key: 'detailsAtom',
    default: {
        username: 'username',
        isFollowing: false,
        posts: '0',
        followers: '0',
        following: '0'
    }
})