import {base} from './baseRequest';

export function getCategory() {
  return base({
    url:'/category',
  })
}

export function CategorySub(maitKey) {
  return base({
    url:'subcategory',
    params:{
      maitKey
    }
  })
}
export function CategoryRecommend(miniWallkey, type) {
  return base({
    url: '/subcategory/detail',
    params: {
      miniWallkey, //是在 /category 下的list[index]中的 miniWallkey
      type
    }
  })
}
