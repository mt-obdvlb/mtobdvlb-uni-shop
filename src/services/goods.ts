import { http } from '@/utils/http.ts'

export const getGoodsByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/goods`,
    data: {
      id,
    },
  })
}
