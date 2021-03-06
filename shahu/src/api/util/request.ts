import { message } from 'antd'

export function fakeRequestWrapper (fn: Function) {
  return async (...args: any[]) => {
    try {
      return await fn(...args)
    } catch (err) {
      message.error(err.message)
    }
  }
}
