<template>
    <div>
        <!-- 기본값은 문자열 -->
        <!-- v-bind:num1=data에 정의된 변수 -->
        <comp1 v-bind:str1="str0" v-bind:num1="num0" v-on:addevent="addNum()"></comp1>
    </div>
</template>

<script>
import Comp1 from './Comp1.vue';

    export default {
        methods :{
            addNum() {
                this.num0++;
                //this.num0 = this.num0+1
            }
        },
        data : function(){
            return {
                str0 : 'asdf',
                num0 : 123
            }
        },
        components : {
            'comp1' : Comp1
        }
        
        
    }
</script>

<style scoped>

</style>