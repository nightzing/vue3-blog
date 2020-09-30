import {reactive, onMounted} from 'vue'
import { updateList } from "@/service/model/list";
function getSwiperData(){
    let state = reactive({
      images: [],
    })

    onMounted(()=>{
      updateList({})
      .then(res => {
        const images = res.data.data;
        state.images = images;
      })
      .catch(error => {
        console.log("发生错误！", error);
      });
  })

    let swipeView = (item:any) => {
      window.location.href = item.url;
    }
    return {state,swipeView}
}
export default getSwiperData