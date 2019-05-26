import { combineReducers } from 'redux';

const randomNumber = (rndNumber = 0,action) => {
    if (action.type === 'CREATE_RND_NUMBER'){
        return rndNumber = Math.ceil(Math.random() * 10);
    }

    return rndNumber;
};

const hintList = (hint = '',action) => {
    if (action.type === 'NUMBER_ENTERED'){
        console.log(action.payload.number,action.payload.rndNumber);
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

export default combineReducers({
    hintList : hintList,
    randomNumber: randomNumber
});