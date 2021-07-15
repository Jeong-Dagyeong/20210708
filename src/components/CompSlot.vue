<template>
    <div>
        <comp3 v-bind:str2= "str1">
            <template v-solt:header>
                <h3>부모에서 전달하는 header</h3>
            </template>
            <template v-solt:content>
                <input type="text" class="form-control" />
            </template>

        </comp3>
    </div>
</template>

<script>
import Comp3 from './Comp3.vue';
    export default {
        data() {
            return{
                str1 : 'bbbb',
            }
        },
        components :{
            'comp3' : Comp3,
        }

        
    }
</script>

<style scoped>

</style>