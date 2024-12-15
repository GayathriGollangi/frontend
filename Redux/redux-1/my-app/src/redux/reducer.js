export const reducerFunction =(state,{type,payload})=>{
    switch(type){
        case 'ADD':
            return {...state,count:state.count+payload};
        case 'SUB':
            return{...state,count:state.count-payload};
    }
}