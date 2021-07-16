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
                    let tmp = []; //임시변수, 이동하지 않는 내용보관
                    
                    for(let i=0; i<this.items1.length; i++){
                        if(this.items1[i].chk === true){
                        this.items2.push(this.items1[i]);
                    }
                    //체크하지 않은 항목 : 남겨둬야하는 항목
                    else{
                        tmp.push(this.items1[i]);
                    }
                }
                //tmp에 있는 체크하지 않은 항목으로 넣음
                this.items1 = tmp;
            },

            moveLeft(){
                    let tmp = []; //임시변수, 이동하지 않는 내용보관
                    
                    for(let i=0; i<this.items2.length; i++){
                        if(this.items2[i].chk === true){
                        this.items1.push(this.items2[i]);
                    }
                    //체크하지 않은 항목 : 남겨둬야하는 항목
                    else{
                        tmp.push(this.items2[i]);
                    }
                }
                //tmp에 있는 체크하지 않은 항목으로 넣음
                this.items2 = tmp;
            },
    
            copyRight(){
                //items1에서 items2로 체크된 항목만 복사
                 for(let i=0; i<this.items1.length; i++){
                        if(this.items1[i].chk === true){
                        this.items2.push(Object.create(this.items1[i]));
                    }
                 }
   
            },
            copyLeft(){
                //items1에서 items2로 체크된 항목만 복사
                 for(let i=0; i<this.items2.length; i++){
                        if(this.items2[i].chk === true){
                        this.items1.push(Object.create(this.items2[i]));
                    }
                 }
   
            },

        
        },
        components : {
            
        }
    }
</script>

<style scoped>

</style>