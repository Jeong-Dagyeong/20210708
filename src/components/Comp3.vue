<template>
    <div>
        <input type="radio" v-model="top" placeholder="TOP" />
        <input type="radio" v-model="bottom" placeholder="BOTTOM" />
        <input type="radio" v-model="skirt" placeholder="SKIRT" />
        <input type="radio" v-model="dress" placeholder="DRESS" />
        <input type="radio" v-model="shoes" placeholder="SHOES" />
        <input type="radio" v-model="socks" placeholder="SOCKS" />
        <input type="radio" v-model="ring" placeholder="RING" />
        <input type="radio" v-model="watch" placeholder="WATCH" />

    </div>
</template>

<script>
    export default {
        /*
        clo : {
            $emit('choose', this.clo) //''는 호출 , , 는 DB
            },
            */
        
        data : function (){
            return {
                clo : {
                top : '',
                bottom : '',
                skirt : '',
                dress : '',
                shoes : '', 
                socks : '', 
                ring : '', 
                watch : '', 
                }
            }
        }
    }
</script>

<style scoped>

</style>