<template>
<div class="container">
    <table class="table">
        <tbody>
            <tr v-for="(item,idx) in items" v-bind:key="item.no">
            
            <td>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="chks" v-bind:value="idx" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                     {{item.no}}
                </label>
                </div>
            </td>
            <td>{{item.title}}</td>
            <td>{{item.price}}</td>
            </tr>
            <td>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="chks1" v-bind:value="idx1" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    {{item.cnt}}
                </label>
                </div>
            </td>
            <tr>
                <td colspan="2">합계</td>
                <td>{{ sumPrice1() }}</td>
                <td>{{ sumCnt1() }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    export default {
        name: 'OrderList',
        data : function(){
            return {
            items : [
            {no:1, title:'aaa', price:100, cnt:1},
            {no:2, title:'bbb', price:200, cnt:2},
            {no:3, title:'ccc', price:300, cnt:3},
           
            ],
            chks : [],
        }
        
    },
    computed : { //계산되어 있는 데이터의 변화가 없으면 계산된 값을 그대로 사용한다
        sumCnt(){
            let sum = 0; //초기값
            for(let i=0; i<this.items.length; i++){ //3번 반복
                sum = sum + this.items[i].cnt; //100 + 200 + 300
            }
            return sum;
        },
        
        
    },
    methods : { //이벤트(버튼)에 의해서 호출된 경우 ex) v-on:click
        sumPrice(){
            let sum = 0; //초기값
            for(let i=0; i<this.items.length; i++){ //3번 반복
                sum = sum + this.items[i].price; //100 + 200 + 300
            }
            return sum;
        },
        sumPrice1(){
            let sum = 0;
            for(let i=0; i<this.chks.length; i++){
                const chkidx = this.chks[i];
                sum = sum + this.items[chkidx].price;
            }
            return sum;
        },
        sumCnt1(){
            let sum = 0; //초기값
            for(let i=0; i<this.chks1.length; i++){ //3번 반복
            const chkidx1 = this.chks1[i];
                sum = sum + this.items[chkidx1].cnt; //100 + 200 + 300
            }
            return sum;
        },
    },
    mounted () {
        //express 에서 값을 받아서 result에 보관
        const result = [
            {no:1, title:'aaa', price:100, cnt:1},
            {no:2, title:'bbb', price:200, cnt:2},
            {no:3, title:'ccc', price:300, cnt:3},
           
        ];
        //받은 값을 items로 복사 
        this.items = result;
    }
}
</script>

<style scoped>

</style>

