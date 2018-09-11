import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

const initialState = {
  users: [],
  managers: [],
  newUser: '',
  newManager: ''

}



//action creators
export const getAllUsers = (users) => ({type: 'getAllUsers', users})
export const getAllManagers = (managers) => ({type: 'getAllManagers', managers})

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'getAllUsers':
      return {...state, users: [...action.users]}
    case 'getAllManagers':
      return {...state, managers: [...action.managers]}
    default: return state
  }
}

const store = createStore(reducer,applyMiddleware(loggerMiddleware))

export default store
