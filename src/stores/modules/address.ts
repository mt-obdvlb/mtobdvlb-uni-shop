import { defineStore } from 'pinia'
import type { AddressItem } from '@/types/address'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const changeSelectedAddress = (address: AddressItem) => {
    selectedAddress.value = address
  }
  return {
    selectedAddress,
    changeSelectedAddress,
  }
})
