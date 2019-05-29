export const createNumber = (number) => {
    return{
        type: 'CREATE_RND_NUMBER',
        payload: {
            number : number
        }
    }
};

export const giveHint = (number, rndNumber) => {
    return {
        type: 'NUMBER_ENTERED',
        payload: {
            number : number,
            rndNumber : rndNumber
        }
    }
};

export const count = (some) => {
    return {
        type: 'COUNT_ATTEMPTS',
        payload: {
            some : some
        }
    }
};

export const setValue = (value) => {
    return {
        type: 'SET_VALUE',
        payload: {
            value : value
        }
    }
};

export const guessed = (status) => {
    return {
        type: 'GUESS_STATUS',
        payload: {
            status : status
        }
    }
};

export const addValue = (value) => {
    return {
        type: 'ADD_VALUE',
        payload: {
            value : value
        }
    }
};

export const setDifficulty = (tries) => {
    return {
        type: 'SET_DIFFICULTY',
        payload: {
            tries : tries
        }
    }
};