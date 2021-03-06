import * as db from 'idb-keyval'

export const RedisKeyMap = {
  SelfAccoutInfo: 'SelfAccoutInfo'
}

export async function init () {
  const v = await db.get(RedisKeyMap.SelfAccoutInfo)
  if (!v) {
    await db.set(RedisKeyMap.SelfAccoutInfo, {
      username: 'admin',
      password: '123456'
    })
  }
}

init()

export default db
