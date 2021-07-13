<template>
    <div class="container">
        <div v-if="changeView ===1">
            <table class="table">
                <thead>
                    <tr>
                        <th>check</th>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tmp in items" v-bind:key="tmp.id">
                        <td><input type="checkbox" v-model="tmp.chk" /></td>
                        <td>{{tmp.id}}</td>
                        <td>{{tmp.name}}</td>
                        <td>{{tmp.age}}</td>
                        <td>{{tmp.tel}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
        <div v-if="changeView ===2">
            <table class="table">
                <thead>
                    <tr>
                        <th>check</th>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tmp in items" v-bind:key="tmp.id">
                        <td><input type="checkbox" v-model="tmp.chk" /></td>
                        <td><input type="text" v-bind:value="tmp.id" /></td>
                        <td><input type="text" v-bind:value="tmp.name" /></td>
                        <td><input type="text" v-bind:value="tmp.age" /></td>
                        <td><input type="text" v-bind:value="tmp.tel" /></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <input type="button" value="삭제" v-on:click="deleteItems()" />
        <input type="button" value="수정" v-on:click="updateItems()" />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                items : [],
                changeView : 1,
                

            }
        },
        created(){
            //백엔드에서 회원목록을 받았다고 가정
            const result = [
                {id : 'a', name : '가', age:10, tel:'111'},
                {id : 'b', name : '나', age:20, tel:'222'},
                {id : 'c', name : '다', age:30, tel:'333'},
                {id : 'd', name : '라', age:40, tel:'444'},
                {id : 'e', name : '마', age:50, tel:'555'},

            ];
            //state 변수에 회원정보 넣기
            this.items = result;
            
            //{id:'a', name:'b', age:34, tel:'010', chk:false}
            for(let i=0; i<this.items.length; i++){
                this.items[i]['chk'] = false;
                
            }
        },
        methods : {
            deleteItems(){
                let tmp = []; //items에 추가할 것
                /*
                // items => [{},{},{}]
                // item  => {}
                for(let item of items) {
                    if(item.chk === false){
                        tmp.push(this.items[i]);  
                    }
                }
                this.items = tmp;
                */

                // items => [{},{},{}]
                // i     =>  0 1 2 
                // item === items[i]  => {}
                for(let i=0;i<this.chks.length;i++){
                    if(this.items[i].chk === false) { //삭제하지 않은 항목 이동
                        tmp.push(this.items[i]);  
                    }
                }
                this.items = tmp;
            },
            updateItems(){
                let tmp = [];
                for(let item of this.items){
                    if(item.chk === true){
                        tmp.push(item);
                    }
                }
                this.items = tmp;
                this.changeView = 2;

            },
        }

    }
</script>

<style scoped>

</style>