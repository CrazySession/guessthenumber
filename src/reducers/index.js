import { combineReducers } from 'redux';

const randomNumber = (rndNumber = 0,action) => {
    if (action.type === 'CREATE_RND_NUMBER'){
        return rndNumber = Math.ceil(Math.random() * 10);
    }

    return rndNumber;
};

const hintList = (hint = '',action) => {
    if (action.type === 'NUMBER_ENTERED'){
        if (action.payload.number === action.payload.rndNumber) {
            return hint = 'success';
        }else if (action.payload.number < action.payload.rndNumber){
            return hint = 'too low';
        }else{
            return hint = 'too high';
        }

    }

    return hint;
};

const counts = (count = 5,action) => {
    if (action.type === 'COUNT_ATTEMPTS'){
        count = count - action.payload.some;
        // count-- also fine -- no need for action creaator variable
        return count;
    }

    return count;
};

export default combineReducers({
    hintList : hintList,
    randomNumber: randomNumber,
    counts: counts
});