export const createNumber = () => {
    return{
        type: 'CREATE_RND_NUMBER',
    }
};

export const giveHint = (number,hint) => {
    return {
        type: 'NUMBER_ENTERED',
        payload: {
            number : number,
            hint : hint
        }
    }
};