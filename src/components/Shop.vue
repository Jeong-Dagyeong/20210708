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
                        {code:1, name:'사과', price:111, img:'https://picsum.photos/500/300?image=11'}];
                    }
                if(code=== 'A'){
                    this.items = [
                        {code:1, name:'바나나', price:223, img:'https://picsum.photos/500/300?image=12'}];
                    }
                if(code=== 'B'){
                    this.items = [
                        {code:2, name:'당근', price:333, img:'https://picsum.photos/500/300?image=38'}];
                    }
                if(code=== 'B'){
                    this.items = [
                        {code:2, name:'오이', price:444, img:'https://picsum.photos/500/300?image=10'}];
                    }
                if(code=== 'C'){
                this.items = [
                    {code:3, name:'꼬깔콘', price:555, img:'https://picsum.photos/500/300?image=16'}];
                }
                if(code=== 'C'){
                this.items = [
                    {code:3, name:'고래밥', price:666, img:'https://picsum.photos/500/300?image=12'}];
                }
                if(code=== 'D'){
                this.items = [
                    {code:4, name:'비타500', price:777, img:'https://picsum.photos/500/300?image=26'}];
                }
                if(code=== 'D'){
                this.items = [
                    {code:4, name:'포카리스웨트', price:888, img:'https://picsum.photos/500/300?image=27'}];
                }
                if(code=== 'E'){
                this.items = [
                    {code:5, name:'더위사냥', price:999, img:'https://picsum.photos/500/300?image=33'}];
                }
                if(code=== 'E'){
                this.items = [
                    {code:5, name:'스크류바', price:123, img:'https://picsum.photos/500/300?image=25'}];
                }
            

        }

    },

data : function () {

    return{
      items : [],
      cate : [{title :'과일', code:'A'},
            {title :'야채', code:'B'},
            {title :'과자', code:'C'},
            {title :'음료', code:'D'},
            {title :'아이스크림', code:'E'}

        ]
    }
},

mounted(){
    //express에서 목록을 받음 [{},{},{}]
    const result= [
        {code:1, name:'사과', price:111, img:'https://picsum.photos/500/300?image=11'},
        {code:1, name:'바나나', price:223, img:'https://picsum.photos/500/300?image=12'},
        {code:2, name:'당근', price:333, img:'https://picsum.photos/500/300?image=38'},
        {code:2, name:'오이', price:444, img:'https://picsum.photos/500/300?image=10'},
        {code:3, name:'꼬깔콘', price:555, img:'https://picsum.photos/500/300?image=16'},
        {code:3, name:'고래밥', price:666, img:'https://picsum.photos/500/300?image=12'},
        {code:4, name:'비타500', price:777, img:'https://picsum.photos/500/300?image=26'},
        {code:4, name:'포카리스웨트', price:888, img:'https://picsum.photos/500/300?image=27'},
        {code:5, name:'더위사냥', price:999, img:'https://picsum.photos/500/300?image=33'},
        {code:5, name:'스크류바', price:123, img:'https://picsum.photos/500/300?image=25'},
    ];
    this.items = result;
    }
}
    
</script>

<style scoped>
 
</style>
