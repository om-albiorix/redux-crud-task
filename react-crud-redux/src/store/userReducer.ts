import { createStore } from 'redux'


interface UserData {
    fullname: string,
    monumber: Number
}

const intitalUser: UserData = {
    fullname: "",
    monumber: 0
}

const userReducer: any = (state = intitalUser, action: any) => {

    switch (action.type) {
        case "ADD-USER":
            return {
                ...state,
                fullname: action.data.fullname,
                monumber: action.data.monumber
            }
        case "DELETE-USER":
            return {
                ...state,

            }
        default:
            return state;
    }
}
const store = createStore(userReducer)

export default store;