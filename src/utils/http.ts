import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if(!options.url.startsWith('/http')){
      options.url = baseURL + options.url
    }
    options.timeout = 5000
    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if(token) {
      options.header.Authorization = token
    }
  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
