import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useToken from '@utils/hooks/useToken'
import { setToken } from '@store/auth'

import { toast } from 'react-toastify'
import jwtDecode from "jwt-decode";
import api from '@api'

const useTokenRefresh = () => {
  const token = useToken()
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) api.auth.refresh()
      .then(({ data: { access_token: token } }) => {
        dispatch(setToken(token))
        console.log('updated')
      })
      .catch(() => toast.error()) // TODO
  }, [])
}

export default useTokenRefresh