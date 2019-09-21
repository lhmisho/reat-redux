
const initalState = {
    count: 0
}

const rootReducer = (state=initalState, action) =>{
    switch(action.type){
        case 'ADD':{
            return{
                count: state.count + 1
            }
        }
        case 'SUB':{
            return{
                count: state.count - 1
            }
        }

        default: return state
    }
}

export default rootReducer