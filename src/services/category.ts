import { http } from '@/utils/http.ts'
import type { CategoryTopItem } from '@/types/category'

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
