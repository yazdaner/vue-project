import { defineStore } from 'pinia';

export const useProductStore = defineStore('product',{
    state: () => {
        return {
            products : [
                {
                    id : 1,
                    name : 'iphone 15 pro max',
                    description : "Some quick example text the bulk of the card content.",
                    image : 'https://dkstatics-public.digikala.com/digikala-products/331cd7d6a8b6de9cfbc11f3191ae3856f0d79bc4_1694592411.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                    price : 600
                },
                {
                    id : 2,
                    name : 'iphone 15 pro',
                    description : "Some quick example text to build on the card title and make up",
                    image : 'https://dkstatics-public.digikala.com/digikala-products/4faed9cbe3b3b82146889ea3bbdef26c28598a77_1694592413.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                    price : 500
                },
                {
                    id : 3,
                    name : 'iphone 15',
                    description : "Some quick example text to build on the card title and make up the bulk of the card content.",
                    image : 'https://dkstatics-public.digikala.com/digikala-products/772205960929378e3cfb362ffd16fdfee97b1227_1695127133.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
                    price : 400
                },
                {
                    id : 4,
                    name : 'iphone 14',
                    description : "Some quick example text title and make up the bulk of the card content.",
                    image : 'https://dkstatics-public.digikala.com/digikala-products/34fd06fe0fd956416943f9c23d7db2fc90c025f3_1662792455.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
                    price : 300
                }
            ]
        }
    },
    getters : {
        allProducts(){
            return this.products
        }
    }
}) 
