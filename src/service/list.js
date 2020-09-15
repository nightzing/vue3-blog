export const updateModel = async params => {
  const res = await this.axios.get(
    "/v2/data/category/GanHuo/type/Android/page/1/count/10",
    {
      params
    }
  );
  return res;
};
