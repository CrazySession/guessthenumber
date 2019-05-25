import { combineReducers } from 'redux';

const randomNumber = (rndNumber = 0,action) => {
    if (action.type === 'CREATE_RND_NUMBER'){
        return rndNumber = Math.ceil(Math.random() * 10);
    }

    return rndNumber;
};

const hintList = (hint = '') => {
    return hint;
};

export default combineReducers({
    hintList : hintList,
    randomNumber: randomNumber
});