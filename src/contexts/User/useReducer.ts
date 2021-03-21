import UserProps from "src/interfaces/User"

export const initialState:UserProps = {
  id: null,
  name: '',
  stars: 0,
  avatar: '',
  favorites: [],
  appointments: []
}


export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setUser': {
      return { ...action.payload }
      break
    }
    default:
      return state
  }
}
