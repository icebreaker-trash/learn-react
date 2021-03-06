
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

export async function login (info: LoginAccountInfo) {
  return 'ok'
}
