import { useState } from 'react'
import { createModel } from 'hox'

function useUser () {
  const [user, setUser] = useState(null)

  return {
    user,
    setUser
  }
}

export default createModel(useUser)
