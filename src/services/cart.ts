import { http } from '@/utils/http.ts'
import type { CartItem } from '@/types/cart'

export const postMemberCartAPI = (data: { skuId: string; count: number }) =>
  http({
    method: 'POST',
    url: '/member/cart',
    data,
  })

export const getMemberCartAPI = () =>
  http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
