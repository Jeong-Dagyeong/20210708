<template>
    <div>

        <table class="table" >
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item"
                    v-show="viewd ===0">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                </tr>

                <tr v-for="item in items" v-bind:key="item"
                v-show="viewd ===1">
                    <td><input type="text" v-bind:value="item.id" /></td>
                    <td><input type="text" v-bind:value="item.name" /></td>
                    <td><input type="text" v-bind:value="item.age" /></td>
                </tr>
            </tbody>
        </table>
        <input type="button" value="변경"
            v-bind:class="styles[viewd]" @click="changeStyle()" />
    </div>
</template>

<script>
    export default {

        methods : {
        changeStyle () {
            if(this.viewd ===0){
                this.viewd = 1;
            }
            else{
                this.viewd = 0;
                
            }
        }
    },
        data() {
            return {
                items : [
                    {id : 'a', name:'가', age:31},
                    {id : 'b', name:'나', age:32},
                    {id : 'c', name:'다', age:33},
                ],
                viewd : 0,
                styles : ['btn btn-success', 'btn btn-primary' ]
            }
        }
    }
</script>

<style scoped>

</style>