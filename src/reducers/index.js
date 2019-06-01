import { combineReducers } from 'redux';

const randomNumber = (rndNumber = 0,action) => {
    if (action.type === 'CREATE_RND_NUMBER'){
        return rndNumber = Math.ceil(Math.random() * action.payload.number);
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
    if (action.type === 'SET_DIFFICULTY'){
        count = action.payload.tries;
        return count
    }

    if (action.type === 'COUNT_ATTEMPTS'){
        count = count - action.payload.some;
        // count-- also fine -- no need for action creaator variable
        return count;
    }

    return count;
};

const chosenDiff = (chosenDiff = 'Choose your difficulty',action) => {
    if (action.type === 'SET_DIFFICULTY'){
        switch (action.payload.tries){
            case 5:
                return chosenDiff = 'Easy';
            case 10:
                return chosenDiff = 'Medium';
            case 15:
                return chosenDiff = 'Hard';
            default:
                return chosenDiff = 'Choose your difficulty';
        }
    }

    return chosenDiff
};

const value = (values = ' ', action) => {
    if (action.type === 'SET_VALUE'){
        values = action.payload.value;
        return values;
    }

    return values;
};

const guess = (stat = true,action) => {
    if (action.type === 'GUESS_STATUS'){
        return stat = action.payload.status;
    }

    return stat;
};

const valueList = (valueList = [],action) => {
    if (action.type === 'ADD_VALUE') {
        if ( action.payload.value === 'clear'){
            return valueList = []
        }
        valueList = [...valueList,action.payload.value];
        return valueList
    }

    return valueList;
};

export default combineReducers({
    hintList : hintList,
    randomNumber: randomNumber,
    counts: counts,
    value : value,
    guess : guess,
    valueList : valueList,
    chosenDiff : chosenDiff
});