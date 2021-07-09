<template>
    
    <div class="container">
        <h4>게시판 목록</h4>
        <hr />

        <div class="d-flex justify-content-end">...
            <div style="width:300px"  />
                <input type="text" class="form-control" placeholder="검색어 입력" />
                <div style="margin-left:5px" />
                <input type="button" class="btn btn-success" value="검색" />
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.no">
                    
                    <td>{{item.no}}</td>
                    <td><router-link v-bind:to="{path:'/boardcontent', query:{no:item.no}}">{{item.title}}</router-link></td>
                    <td>{{item.content}}</td>
                    <td>{{item.writer}}</td>
                    <td>{{item.hit}}</td>
                    <td>{{item.regdate}}</td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
        </nav>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'Board',
        data : function(){
            return {
            items : null,
            }
        
    },
    mounted () {
        //express 에서 값을 받아서 result에 보관
        const result = [
            {no:1, title:'aaa', content:'a', writer:'가', hit:30, regdate:'20200709'},
            {no:2, title:'bbb', content:'b', writer:'나', hit:40, regdate:'20200710'},
            {no:3, title:'ccc', content:'c', writer:'다', hit:50, regdate:'20200711'},
        ];
        //받은 값을 items로 복사 
        this.items = result;
    }
}
</script>

<style scoped>

</style>

