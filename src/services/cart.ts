import { http } from '@/utils/http.ts'

export const postMemberCartAPI = (data: { skuId: string; count: number }) =>
  http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
