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
import OrderList1 from '@/components/OrderList1';
import OrderList2 from '@/components/OrderList2';
import Admin from '@/components/Admin';
import ComPropEmit from '@/components/ComPropEmit';
import CompInsertDelete from '@/components/CompInsertDelete';

// 주소 설정
const routes= [
    { path:"/", name:"Home", component:Home },
    { path:"/login", name:"Login", component:Login },
    { path:"/join", name:"Join", component:Join },
    { path:"/board", name:"Board", component:Board },
    { path:"/boardContent", name:"BoardContent", component:BoardContent },
    { path:"/shop", name:"Shop", component:Shop },
    { path:"/OrderList", name:"OrderList", component:OrderList },
    { path:"/OrderList1", name:"OrderList1", component:OrderList1 },
    { path:"/OrderList2", name:"OrderList2", component:OrderList2 },
    { path:"/Admin", name:"Admin", component:Admin },
    { path:"/ComPropEmit", name:"ComPropEmit", component:ComPropEmit },
    { path:"/CompInsertDelete", name:"CompInsertDelete", component:CompInsertDelete },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;

