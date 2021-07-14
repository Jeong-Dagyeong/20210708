<template>
    <div>
        {{idx2}}
        <input type="text" v-model="mem.name" placeholder="이름" />
        <input type="text" v-model.number="mem.age" placeholder="나이" />
        <input type="text" v-model="mem.tel" placeholder="연락처" />
    </div>
</template>

<script>
    export default {
        watch : {
            mem : {
                deep:true,

                handler(){
                    //console.log(this.mem);
                    //v-on:sendmem="호출할 부모의 메소드()"
                    this.$emit('sendmem', this.mem, this.idx2); //''는 호출 , , 는 DB

                }
            }
        },
        props : {
            idx2 : {
                type : Number,
                default : 0
            }
        },
        data : function() {
            return {
                mem : {
                    name : '',
                    age : 0,
                    tel : ''
                }
            }
                
        }
    }
</script>

<style scoped>

</style>