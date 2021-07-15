<template>
    <div>
        <h1>컴포넌트3 comp3</h1>
        {{str2}}
        <hr/>
        <slot name="header"></slot>
        comp3컴포넌트에서 출력
        <slot name="content"></slot>
        
        

    </div>
</template>

<script>
    export default {
        props : {
            str2 : {
                type : String,
                default : ''
            }
        },
       
        data : function (){
            return {
               
        }
    }
}
</script>

<style scoped>

</style>