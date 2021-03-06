// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import styles from './index.module.scss'
import HeaderTabs from './HeaderTabs'
import LoginForm from './LoginForm'
import ThirdPartyLogin from './ThirdPartyLogin'

// import SigninBg from '~/assets/image/sign_bg.png'
const SigninPage: FC = () => {
  return (

    <div className={styles.fullScreenEle}>

      <div className={styles.withoutFooter}>
        <div className="text-center mb-6">
          <h1 className="text-7xl text-primary">傻乎</h1>
          <h3 className="mt-2 text-gray-700 font-semibold">
            <span className="text-sm tracking-widest mr-2">没问题</span>
            <span className="text-sm tracking-widest">就创造问题</span>
          </h3>
        </div>

        <div className="bg-white w-96 flex flex-col items-center rounded-sm shadow px-6 pt-2">
          <div className="self-stretch">
            <HeaderTabs></HeaderTabs>
            <LoginForm></LoginForm>
            <div className="text-xs text-gray-500 pb-4 border-b border-solid border-gray-100">未注册手机验证后自动登录，注册即代表同意<span className="cursor-pointer">《傻乎乎协议》</span></div>
            <ThirdPartyLogin></ThirdPartyLogin>
          </div>

        </div>
      </div>

    </div>)
}

export default SigninPage
