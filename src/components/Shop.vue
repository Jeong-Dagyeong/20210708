<template>
    <div class="container">
        <div class="row">
            <div class="col-9">
                <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div v-for="item in items" v-bind:key="item.code">
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <img v-bind:src="item.img" />
                                <div class="card-body">
                                    <h4 class="card-title pricing-card-title">{{item.name}}</h4>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>{{item.price}}원</li>
                                        <li>Help center access</li>
                                        
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3" style="border-left:1px solid #efefef;">
                <ul class="list-group" v-for="tmp in cate" v-bind:key="tmp.code">
                    <li class="list-group-item" style="cursor:pointer;" v-on:click="changeData(tmp.code)">{{tmp.title}}</li>
                </ul>    
            </div>
        </div>

        
    </div>

    
</template>

<script>

export default {
    name : 'Shop',
    methods : {
        changeData(code){
                //express로 code를 전달 후에 code에 해당하는 항목
                if(code=== 'A'){
                    this.items = [
                        {code:1, name:'꽃다발', price:111, img:'https://picsum.photos/500/300?image=11'}];
                    }
                if(code=== 'B'){
                    this.items = [
                        {code:2, name:'바구니', price:223, img:'https://picsum.photos/500/300?image=12'}];
                    }
                if(code=== 'C'){
                    this.items = [
                        {code:3, name:'한송이', price:333, img:'https://picsum.photos/500/300?image=38'}];
                    }
                if(code=== 'D'){
                    this.items = [
                        {code:4, name:'용돈박스', price:444, img:'https://picsum.photos/500/300?image=10'}];
                    }
                if(code=== 'E'){
                this.items = [
                    {code:4, name:'화분', price:444, img:'https://picsum.photos/500/300?image=10'}];
                }
            

        }

    },

data : function () {

    return{
      items : [],
      cate : [{title :'꽃다발', code:'A'},
            {title :'바구니', code:'B'},
            {title :'한송이', code:'C'},
            {title :'용돈박스', code:'D'},
            {title :'화분', code:'E'}

        ]
    }
},

mounted(){
    //express에서 목록을 받음 [{},{},{}]
    const result= [
        {code:1, name:'사과', price:111, img:'https://picsum.photos/500/300?image=11'},
        {code:2, name:'배', price:223, img:'https://picsum.photos/500/300?image=12'},
        {code:3, name:'바나나', price:333, img:'https://picsum.photos/500/300?image=38'},
        {code:4, name:'약과', price:444, img:'https://picsum.photos/500/300?image=10'},
    ];
    this.items = result;
    }
}
    
</script>

<style scoped>
 
</style>
