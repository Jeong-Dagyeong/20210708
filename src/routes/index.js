import { createRouter, createWebHashHistory} from "vue-router";

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
import CompSlot from '@/components/CompSlot';
import About from '@/components/About';
import TableCopyMove from '@/components/TableCopyMove';
import DragTable from '@/components/DragTable';
import StyleTable from '@/components/StyleTable';

// 주소 설정
const routes= [
    { path:"/", name:"Home", component:Home },
    { path:"/login", name:"Login", component:Login },
    { path:"/join", name:"Join", component:Join },
    { path:"/board", name:"Board", component:Board },
    { path:"/boardContent", name:"BoardContent", component:BoardContent },
    { path:"/shop", name:"Shop", component:Shop },
    { path:"/orderlist", name:"OrderList", component:OrderList },
    { path:"/orderlist1", name:"OrderList1", component:OrderList1 },
    { path:"/orderlist2", name:"OrderList2", component:OrderList2 },
    { path:"/admin", name:"Admin", component:Admin },
    { path:"/compropemit", name:"ComPropEmit", component:ComPropEmit },
    { path:"/compinsertdelete", name:"CompInsertDelete", component:CompInsertDelete },
    { path:"/compslot", name:"CompSlot", component:CompSlot },
    { path:"/about", name:"About", component:About },
    { path:"/tablecopymove", name:"TableCopyMove", component:TableCopyMove },
    { path:"/dragtable", name:"DragTable", component:DragTable },
    { path:"/styletable", name:"StyleTable", component:StyleTable },
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;

