<template>
    <div>
        <div style="text-align:center" >
        <h1>자! 모두들 회원가입을 하세요! <span class="badge bg-secondary" >띵동</span></h1>
        </div>
    </div>

    <form>
    <div class="container" style="text-align:center">
        <label for="exampleInputEmail1" class="form-label">ID</label>
        <input type="text" class="form-control" id="userid" aria-describedby="emailHelp">
    </div>
    <div class="container" style="text-align:center">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="userpw">
        <div id="userpw" class="form-password">We'll never share your email with anyone else.</div>
    </div>
    <div class="container" style="text-align:center">
        <label for="exampleInputEmail1" class="form-label">PW Check</label>
        <input type="password" class="form-control" id="userpw1" aria-describedby="emailHelp">
        <div id="userpw1" class="form-password">We'll never share your email with anyone else.</div>
    </div>
    <div class="container" style="text-align:center">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" class="form-control" id="username" aria-describedby="emailHelp">
    </div>
    
    <div class="container" style="text-align:center">
        <label for="exampleInputEmail1" class="form-label">E-mail</label>
        <input type="email" class="form-control" id="usermail" aria-describedby="emailHelp">
    </div>
    <p class="user-select-all">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</p>
    <div class="container" style="text-align:center">
        <input type="checkbox" class="form-check-input" id="checkbox">
        <label class="form-check-label" for="exampleCheck1">약관에 동의 하시면 '체크' 하십시오.</label> 
    </div>
    <div class="d-grid gap-2 col-6 mx-auto" style="padding=5px" >
        <button class="btn btn-primary" type="button" v-on:click="checkLogin">회원가입</button>
    </div>
    </form>
    
</template>

<script>
export default {
    name: 'Join',
    methods:{
        checkLogin(){
            /*
            if(
            alert('회원가입 되었습니다'); */
            
        }

    },
    data : function() {
        return {
            
            userid :'',
            userpw :'',
            userpw1 :'',
            username :'',
            usermail :'',
            
            
        }
    }
}
</script>

<style scoped>

</style>