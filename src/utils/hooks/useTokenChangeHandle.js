import React, { useEffect } from 'react'
import useToken from '@utils/hooks/useToken'

const useTokenChangeHandle = () => {
  const token = useToken()
  useEffect(() => {
    if (token) localStorage.setItem('token', token)
    else localStorage.removeItem('token')
  }, [token])
}

export default useTokenChangeHandle