<template>
    <h3>게시판 내용</h3>
    <div style="width:600px">
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th scope="col" style="width:100px;">번호</th>
                    <td>{{item.no}}</td>
                </tr>
                <tr>
                    <th scope="col" style="width:100px;">제목</th>
                    <td>{{item.title}}</td>
                </tr>
                <tr>
                    <th scope="col" style="width:100px;">내용</th>
                    <td>{{item.content}}</td>
                </tr>
                <tr>
                    <th scope="col" style="width:100px;">작성자</th>
                    <td>{{item.writer}}</td>
                </tr>
                <tr>
                    <th scope="col" style="width:100px;">조회수</th>
                    <td>{{item.hit}}</td>
                </tr>
                <tr>
                    <th scope="col" style="width:100px;">날짜</th>
                    <td>{{item.regdate}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">목록으로</button>
        
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">수정</button>
        <button type="button" class="btn btn-success" v-on:click="deleteContent()">삭제</button>
        <button type="button" class="btn btn-warning">이전글</button>
        <button type="button" class="btn btn-success">다음글</button>
    </div>


    <!-- 수정하기 모달창 -->
    <div class="modal" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control" />
                <input type="text" class="form-control" />
                <input type="text" class="form-control" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

    <!-- 삭제하기 모달창 -->
    <div class="modal" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>삭제 하시겠습니까?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">삭제</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'BoardContent',
    methods : {
         updateContent() {

        },
        deleteContent() {
            
        }

    },
    components : {
       
    },
    data : function (){
        return {
            no : Number(this.$route.query.no),
            item : '',
            title : '',
            content : '',
            writer : '',
            hit : '',
            regdate : '',
        }
    },
    
    mounted () {
        const result = {no:2, title:'bbb', content:'b', writer:'나', hit:40, regdate:'20210710'};
        this.item = result;

    }
}
</script>

<style scoped>
 
</style>
