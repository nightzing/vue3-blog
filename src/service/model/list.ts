import request from '@/service/request'


export const updateList = async (params:any) => {
  return request({
    url: '/api/v2/banners',
    method:'get',
    data: params 
  })
}
