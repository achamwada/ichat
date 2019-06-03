import React from 'react';
import io from 'socket.io-client'

interface chatAction{
    type: string,
    payload: {
        msg: string,
        from: string,
        channel: string,
    }
}

export const initState: any = {
    ReactJS: [
        { from: "alex", msg: "Hi there" }, { from: "Martha", msg: "I'm fine, how are you?" }, { from: "alex", msg: "doing Greate" }
    ],
    Golang: [
        { from: "alexander", msg: "Hi there Martha golang here" }, { from: "Martha", msg: "It's easy" }, { from: "alex", msg: "yes very!" }
    ],
    PHP: [
        { from: "alex", msg: "Hi there PHP" }, { from: "Martha", msg: "Very interesting" }, { from: "alex", msg: "Done this for long now" }
    ],
    C: [
        { }
    ]
}


export const ContextStore = React.createContext(initState);

const reducer = (state = initState,  action: chatAction ) => {
    const { channel, msg, from } = action.payload;
    try{
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

    }catch(ex){
        console.log(ex);
        return state;
    }
    

}



let socket: any;

function sendChatAction(value: any){
    socket.emit('chat message',  value);
   
} 
const Store = (props: any) => {
    const [allData, dispatch] = React.useReducer(reducer, initState);

    if(!socket){
        socket = io(":3001")
        socket.on('chat message', function(msg: any){
            console.log(msg);
            dispatch({type: "RECEIVE_MESSAGE", payload:msg })
          });
    }
    

    return (
        <ContextStore.Provider value={[allData, sendChatAction]}>
            {props.children}
        </ContextStore.Provider>
    )

}

export default Store;