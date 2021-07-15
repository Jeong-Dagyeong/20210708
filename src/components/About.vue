<template>
    <div>
        <vueper-slides fade :touchable="false">
        <vueper-slide
        v-for="(slide, i) in slides"
        v-bind:key="i"
        v-bind:image="slide.image" 
        v-bind:title="slide.title"
        v-bind:content="slide.content"
        v-bind:style="'width=300px; height=200px; font-size:20px;'" />
        </vueper-slides>
  </div>
  
      
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    data: function() {
        return {
            slides: [
            {
            title: '첫번째 제목',
            content: '첫번째 내용',
            // You can also provide a URL for the image.
            
            image:'https://picsum.photos/500/300?image=45' 
            },
            {
            title: '두번째 제목',
            content: '두번째 내용',
            // You can also provide a URL for the image.
            image: 'https://picsum.photos/500/300?image=15' 
            },
            {
            title: '세번째 제목',
            content: '세번째 내용',
            // You can also provide a URL for the image.
            image: 'https://picsum.photos/500/300?image=18' 
            },
            // Other slides.
            ]
        }
    },
    components : {
    'vueper-slides' : VueperSlides,
    'vueper-slide' : VueperSlide,
    },
}
</script>

<style scoped>

</style>