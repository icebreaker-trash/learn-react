import localRedis, { RedisKeyMap } from '~/local/redis'
import { fakeRequestWrapper } from '~/api/util/request'
interface LoginAccountInfo {
  username: String
  password: String
}
export function wait (ts: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, ts)
  })
}

export const login = fakeRequestWrapper(async function (
  info: LoginAccountInfo
) {
  await wait()
  const innerInfo = await localRedis.get<LoginAccountInfo>(
    RedisKeyMap.SelfAccoutInfo
  )
  if (
    innerInfo?.username === info.username &&
    innerInfo.password === info.password
  ) {
    return {
      code: 200
    }
  } else {
    throw new Error('用户名或密码不对')
  }
})
