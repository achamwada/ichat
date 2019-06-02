import React from 'react';

interface chatAction{
    type: string,
    payload: {
        msg: string,
        from: string,
        channel: string,
    }
}

export const initState: any = {
    Javascript: [
        { from: "alex", msg: "Hi there" }, { from: "Martha", msg: "I'm fine, how are you?" }, { from: "alex", msg: "doing Greate" }
    ],
    Golang: [
        { from: "alexander", msg: "Hi there Martha golang here" }, { from: "Martha", msg: "It's easy" }, { from: "alex", msg: "yes very!" }
    ],
    PHP: [
        { from: "alex", msg: "Hi there PHP" }, { from: "Martha", msg: "Very interesting" }, { from: "alex", msg: "Done this for long now" }
    ]

}


export const ContextStore = React.createContext(initState);

const reducer = (state = initState,  action: chatAction ) => {
    const { channel, msg, from } = action.payload;

    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [channel]: [
                    ...state[channel],
                    { channel, msg, from }
                ]

            }

        default:
            return state;
    }

}

const Store = (props: any) => {
    const reducerHook = React.useReducer(reducer, initState);

    return (
        <ContextStore.Provider value={reducerHook}>
            {props.childen}
        </ContextStore.Provider>
    )

}

export default Store;