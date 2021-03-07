// eslint-disable-next-line no-use-before-define
import React from 'react'
import ProfileStore from '~/bus/Profile'
import { Provider } from 'react-redux'
import Profile from './Profile'
export default function HomePage () {
  return (
    <>
      <Provider store={ProfileStore}>
        <Profile></Profile>
      </Provider>
    </>)
}
