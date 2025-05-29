import { http } from '@/utils/http.ts'
import type { CategoryItem } from '@/types/home'

export const getCategoryTopAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
