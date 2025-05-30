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

export const deleteMemberCartAPI = (data: { ids: string[] }) =>
  http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })

export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: {
    count?: number
    selected?: boolean
  },
) =>
  http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
