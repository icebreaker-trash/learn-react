import { createStore } from 'redux'

export interface IUserProfile {
  nickname: string
  avatar: string
}
const initialState: IUserProfile = {
  nickname: '新用户',
  avatar: ''
}
export const actionTypes = {
  UPDATE_NICKNAME: 'UPDATE_NICKNAME',
  UPDATE_AVATAR: 'UPDATE_AVATAR',
  UPDATE_PROFILE: 'UPDATE_PROFILE'
}

export const actions = {
  updateNickname (nickname: string) {
    return {
      type: actionTypes.UPDATE_NICKNAME,
      nickname
    }
  },
  updateAvatar (avatar: string) {
    return {
      type: actionTypes.UPDATE_AVATAR,
      avatar
    }
  },
  updateProfile (payload: Object) {
    return {
      type: actionTypes.UPDATE_PROFILE,
      payload
    }
  }
}

interface IAction {
  type: string
  [key: string]: any
}

const ProfileReducer = (state = initialState, action: IAction) => {
  // 初始化有个 {type: "@@redux/INITz.1.r.r.3.c"}
  // console.log(state, action)
  switch (action.type) {
    case actionTypes.UPDATE_AVATAR: {
      return {
        ...state,
        avatar: action.avatar
      }
    }
    case actionTypes.UPDATE_NICKNAME: {
      return {
        ...state,
        nickname: action.nickname
      }
    }
    case actionTypes.UPDATE_PROFILE: {
      return Object.assign({}, state, action.payload)
    }
    default: {
      return state
    }
  }
}
const store = createStore(ProfileReducer)

export default store
