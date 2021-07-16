<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                </tr>
            </tbody>
            <draggable v-model="items" tag="tbody" item-key="no">
                <template #item="{element}">
                    <tr>
                        <td>{{element.id}}</td>
                        <td>{{element.name}}</td>
                        <td>{{element.age}}</td>
                    </tr>
                </template>
            </draggable>
        </table>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
    export default {
        components : {
            'draggable' : draggable
        },

        data() {
            return {
                items : [
                    {id : 'a', name:'가', age:31},
                    {id : 'b', name:'나', age:32},
                    {id : 'c', name:'다', age:33},
                ]
            }
        }
    }
</script>

<style scoped>

</style>