import { createRouter, createWebHistory} from "vue-router";

// 컴포넌트 가져오기
//import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Join from '@/components/Join';
import Board from '@/components/Board';
import BoardContent from '@/components/BoardContent';
import Shop from '@/components/Shop';
import OrderList from '@/components/OrderList';

// 주소 설정
const routes= [
    { path:"/", name:"Home", component:Home },
    { path:"/login", name:"Login", component:Login },
    { path:"/join", name:"Join", component:Join },
    { path:"/board", name:"Board", component:Board },
    { path:"/boardContent", name:"BoardContent", component:BoardContent },
    { path:"/shop", name:"Shop", component:Shop },
    { path:"/OrderList", name:"OrderList", component:OrderList },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;

