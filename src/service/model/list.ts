import request from '@/service/request'


export const updateList = async (params:any) => {
  return request({
    url: '/api/v2/data/category/GanHuo/type/Android/page/1/count/10',
    method:'get',
    data: params 
  })
}
