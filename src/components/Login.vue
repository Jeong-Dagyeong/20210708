<template>
<div class="container" style="text-align:center">
    <input type="email" class="form-control" id="floatingInput" placeholder="ID를 입력하세요">
    <label for="floatingInput"></label>
    </div>
    <div class="container" style="text-align:center">
    <input type="password" class="form-control" id="floatingPassword" placeholder="PW를 입력하세요">
    <label for="floatingPassword"></label> <br />
    <button type="button" class="btn btn-outline-success">Log-in</button>
    
    </div>
</template>

<script>
export default {
    name: 'About',
    methods:{
        checkLogin(){
            
        }

    },
    data : function() {
        return {
            userid:'',
            userpw:''
        }
    }
}
</script>

<style scoped>

</style>