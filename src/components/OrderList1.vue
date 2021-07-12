<template>
    <div class="container">
        items => [{},{},{}]
        tmp => { no:1, name:'a', price:1230, cnt:34},<hr /> 
        <table class="table table-bordered">
            <tr v-for="(tmp, idx) in items" v-bind:key="tmp.no">
                <td>
                    <div class="form-check">
                        <input class="form-check-input" v-model="chks" type="checkbox" v-bind:value="idx" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">{{tmp.no}}</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <input class="form-check-input" v-model="chks1[idx]" type="checkbox" v-bind:value="idx" id="flexCheckDefault1">
                        <label class="form-check-label" for="flexCheckDefault1">{{tmp.no}}</label>
                    </div>
                </td>
                <td>{{tmp.name}}</td>
                <td>{{tmp.price}}</td>
                <td>{{tmp.cnt}}</td>
                <td>{{tmp.sum}}</td>

            </tr>
            <tr>
                <td>합계</td>
                <td></td>
                <td>{{addPrice}}</td>
                <td>{{addCnt()}}</td>
                <td></td>
            </tr>

        </table>

    </div>
</template>

<script>
    export default {
        watch :{
            chks : {
                handler(){
                    //console.log(this.chks);
                    //초기화
                    for(let item of this.items){
                        item['sum'] = 0;
                    }
                    //체크된 항목에 대해서만 계산
                    for(let idx of this.chks){
                        this.items[idx].sum
                        =this.items[idx].price * this.items[idx].cnt
                    }
                }
            },
            chks1 :{ //chks1의 변수의 변화
                deep:true, //배열 내부의 변화를 감지=>깊이있는 변화
                handler(){
                    console.log(this.chks1);
                    for(let i=0; i<this.chks1.length; i++){
                        if(this.chks1[i] == true){
                            this.items[i]['sum']
                            =this.items[i]['price'] * this.items[i]['cnt']

                    }
                    else{
                        this.items[i]['sum'] = 0;
                    }

                    }
                }
            }
        },
        computed :{
            addPrice(){
                console.log('3.computed');
                let sum = 0;
                for(let tmp of this.items) {
                    sum = sum + tmp.price;
                }
                return sum;
            }
        },
        methods :{ //화면이 
            addCnt(){
                console.log('4.methods');
                let sum = 0;
                for(let tmp of this.items) {
                    sum = sum + tmp.cnt;
                }
                return sum;

            }

        },
        created(){
            console.log('2.created');
            const result = [
                {no:1, name:'a', price:1230, cnt:34},
                {no:2, name:'b', price:2230, cnt:35},
                {no:3, name:'c', price:3330, cnt:36},
            ];
            this.items = result;

            // {no:1, name:'a', price:1230, cnt:34, sum:0}
            for(let i=0; i<this.items.length; i++){
                this.items[i]['sum'] = 0;
                //this.items[i].sum = 0;
                this.chks1[i] = false;
            }

            },
        mounted(){
            console.log('3.mounted');

            },
        data() { //state 변수 설정 
            console.log('1.data');
            return{
                items : [],
                chks : [], //체크박스 배열로 했을 경우 순서의 변화가 생김
                chks1 : [false,false,false],
                

            }
        },
    }

</script>

<style scoped>

</style>