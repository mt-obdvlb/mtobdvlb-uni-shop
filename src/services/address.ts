import { http } from '@/utils/http.ts'
import type { AddressParams } from '@/types/address'

export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
