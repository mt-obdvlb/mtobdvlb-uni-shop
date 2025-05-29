import { http } from '@/utils/http.ts'

type LoginParams = {
  code: string
  iv: string
  encryptedData: string
}

export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber,
    },
  })
}
