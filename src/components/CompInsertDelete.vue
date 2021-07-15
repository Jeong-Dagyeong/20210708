<template>
    <div>
        <component v-for="(tmp, idx) in compList"
        v-bind:key="tmp" v-bind:idx2="idx"
        v-on:sendmem="recvData"
        v-bind:is="tmp"></component>
        <input type="button" value="컴포넌트 추가" v-on:click="addComp()" />
        <input type="button" value="컴포넌트 삭제" v-on:click="delComp()" />
        <hr />
        <table class="table table-bordered">
            <tr v-for="mem in compData" v-bind:key="mem.name">
                <td>{{mem.name}}</td>
                <td>{{mem.age}}</td>
                <td>{{mem.tel}}</td>
            </tr>
        </table>
        <hr />
    </div>
</template>

<script>
import Comp2 from './Comp2.vue';
import Menu1 from './Menu1.vue';
import Comp3 from './Comp3.vue';


    export default {
        watch : {
            compData : {
                deep : true,
                handler(){
                    //console.log(this.compData);
                }
            }
        },
        methods : {
            

            
            recvData(mem, idx) {
                //console.log(idx2,mem);
                this.compData[idx] = mem;

            },
            addComp(){
                this.compList.push('comp2');
                const ret = {name:'', age:0, tel:''};
                this.compData[this.compList-1] = ret;
            },
            delComp(){
                this.compList.pop();
                this.compData.pop();
            }
        },
        data : function() {
            return {
                compList : [], //빈칸들을 하나씩 추가해준다 comp2에서 온 데이터
                compData : [], //빈칸에 추가한 내용들의 데이터
                currentComp : 'menu1',
            }
        },
        components : {
            'menu1' : Menu1,
            'comp2' : Comp2,
            'comp3' : Comp3,
        }
        
    }
</script>

<style scoped>

</style>