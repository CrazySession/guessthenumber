export const createNumber = () => {
    return{
        type: 'CREATE_RND_NUMBER',
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