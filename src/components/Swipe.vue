<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists" :key="list.id">
                <a class="js-no-follow" v-bind:href="list.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="list.img" alt="">
                </a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
      
</template>


<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: 'swipe',
    props: {
        lists: {
            type: Array,
            required: true
        },
        name: ''
    },
    mounted() {
        new Swiper('.swiper-container', {
            loop: true,
            effect: 'coverflow',
            autoplay: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
}
</script>


<style>
    .swiper-slide img {
        width: 100%;
        height: 100%;
    }
</style>
