export const createNumber = (number) => {
    return{
        type: 'CREATE_RND_NUMBER',
        payload: {
            number : number
        }
    }
};

// too low - too high
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

// set input value -- onChange()
export const setValue = (value) => {
    return {
        type: 'SET_VALUE',
        payload: {
            value : value
        }
    }
};

// lock/open input field
export const guessed = (status) => {
    return {
        type: 'GUESS_STATUS',
        payload: {
            status : status
        }
    }
};

// adding numbers for BurnendNumbers
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