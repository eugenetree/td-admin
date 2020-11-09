import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectToken } from '@store/auth'
import jwtDecode from "jwt-decode";

const useToken = () => {
  const token = useSelector(selectToken)

  return token
}

export default useToken