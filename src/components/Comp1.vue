<template>
    <div>
        {{str1}}, {{num1}}
        <input type="button" value="숫자증가" v-on:click="addNum()" />
    </div>
</template>

<script>
    export default {
        //props : []
        props :{
            str1 : {
                type:String,
                default :''
            },
            num1 : {
                type:Number,
                default:0
            }

        },
        methods :{
            addNum() {
                //여기서 처리X, 부모쪽의 특정 메소드를 호출하는 것.
                //v-on:addevent="addnum()"
                this.$emit('addevent');

            }
        }
        
    }
</script>

<style scoped>

</style>