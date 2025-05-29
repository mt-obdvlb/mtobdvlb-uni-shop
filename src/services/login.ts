import { http } from '@/utils/http.ts'
import type { LoginResult } from '@/types/member'

type LoginParams = {
  code: string
  iv: string
  encryptedData: string
}

export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber,
    },
  })
}
