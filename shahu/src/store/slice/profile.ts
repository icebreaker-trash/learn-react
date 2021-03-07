import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import redis, { RedisKeyMap } from '~/local/redis'
export interface IUserProfile {
  nickname: string
  avatar: string
}
const initialState: IUserProfile = {
  nickname: '新用户',
  avatar: ''
}
// export const actionTypes = {
//   UPDATE_NICKNAME: 'UPDATE_NICKNAME',
//   UPDATE_AVATAR: 'UPDATE_AVATAR',
//   UPDATE_PROFILE: 'UPDATE_PROFILE'
// }
export const saveProfile2LocalDb = createAsyncThunk(
  'profile/saveProfile2LocalDb',
  async (profile, thunkAPI) => {
    await redis.set(RedisKeyMap.SelfProfile, profile)
    return profile
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateAvatar: (state, action) => {
      state.avatar = action.payload
    },
    updateNickname: (state, action) => {
      state.nickname = action.payload
    },
    updateProfile: (state, action) => {
      Object.assign(state, action.payload)
    }
  },
  extraReducers: {
    [saveProfile2LocalDb.fulfilled]: (state, action) => {
      Object.assign(state, action.payload)
    }
  }
})

export const {
  updateAvatar,
  updateNickname,
  updateProfile
} = profileSlice.actions

export default profileSlice.reducer
