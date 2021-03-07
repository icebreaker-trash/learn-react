import redis, { RedisKeyMap } from '~/local/redis'
import '~/local/db.ts'
import { updateProfile } from '~/store/slice/profile'
import store from '~/store'
;(async () => {
  const p = await redis.get(RedisKeyMap.SelfProfile)
  if (p) {
    store.dispatch(updateProfile(p))
  }
})()
