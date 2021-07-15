<template>
    <div>
        <div class="row">
            <div class="col-5">
                <table class="table table-bordered">
                    <tr v-for="item in items1" v-bind:key="item">
                        <td><input type="checkbox" v-model="item.chk" /></td>
                        <td>{{item.no}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                    </tr>
                </table>
            </div>

            <div class="col-2">
                <input type="button" class="btn btn-sm btn-success" value="이동 =>" v-on:click="moveRight()" /><br /><br />
                <input type="button" class="btn btn-sm btn-success" value="<= 이동" v-on:click="moveLeft()" /><br /><br />
                <input type="button" class="btn btn-sm btn-success" value="복사 =>" v-on:click="copyRight()"/><br /><br />
                <input type="button" class="btn btn-sm btn-success" value="<= 복사" v-on:click="copyLeft()"/><br /><br />
            </div>    

            <div class="col-5">
                <table class="table table-bordered">
                    <tr v-for="item in items2" v-bind:key="item">
                        <td><input type="checkbox" v-model="item.chk" /></td>
                        <td>{{item.no}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                    </tr>
                </table>
            </div>
        </div>    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items1 : [],
                items2 : [],
            }
        },
        created () {
            this.items1 = [
                {no:1, name:'a1', age:24},
                {no:2, name:'a2', age:34},
                {no:3, name:'a3', age:44},
                {no:4, name:'a4', age:24},
                {no:5, name:'a5', age:34},
                {no:6, name:'a6', age:44},
            ];

            for(let i=0;i<this.items1.length;i++){
                this.items1[i]['chk'] = false;
                

            }
            
        },
        methods:{
            moveRight(){
                let items1 = [];
                for(let i=0; i<this.items1.length; i++){
                    if(this.items1 === true);
                    this.items1[i]['chk'] = false;
                }

                       
                

            },
            moveLeft(){

            },
            copyRight(){
   
            },
            copyLeft(){

            }
        },
        components : {
            
        }
    }
</script>

<style scoped>

</style>