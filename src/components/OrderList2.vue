<template>
    <div class="container">
        <table class="table table-bordered">
            <tr v-for="tmp in items" v-bind:key="tmp.no">
                <td>{{tmp.no}}</td>
                <td>{{tmp.name}}</td>
                <td>{{tmp.price}}</td>
                <td>
                    <select v-model.number="tmp.opt">
                        <!-- num in 10 => 1 2 3 4 5 6 7 8 9 10 -->
                        <option v-for="num in tmp.cnt"  v-bind:key="num">
                            {{num}}
                        </option>
                    </select>
                </td>
                <td>{{tmp.sum}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                items : [],
                
            }
        },
        watch : { //[{},{},{}]
            items : {
                deep: true,
                handler(){
                     for(let i=0; i<this.items.length; i++){
                        this.items[i].sum = 
                            this.items[i]['price'] * this.items[i]['opt'];
                     }
                }
            }
        },
        created(){
            const result = [
                {no:1, name:'a', price:1230, cnt:34},
                {no:2, name:'b', price:2230, cnt:35},
                {no:3, name:'c', price:3330, cnt:36},
            ];
            this.items = result;
            // {no:3, name:'c', price:3330, cnt:36, opt:1, sum:1},
            for(let i=0; i<this.items.length; i++){
                this.items[i]['opt'] =1;
                this.items[i]['sum']= 
                this.items[i]['price'] * this.items[i]['opt'];
            }

        },
        mounted(){

        },
        computed :{

        },
       
        methods : {

            }
        }
        
    
</script>

<style scoped>

</style>