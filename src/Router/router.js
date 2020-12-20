// 后台路由
import Login from '../Components/Login/Login'
import Main from '../Components/Main/Main'
import Admin from '../Components/Admin/Admin'

// 前端路由
import Index from '../Components/Static/Index'


export default [
// {path:"/login",component:Login},
{path:"/",redirect:"/index"},

{path:"/admin",component:Admin,children:[
    {path:"login",component:Login},
    {path:"main",component:Main,name:"main"},
    {path:"/",redirect:"login"}

]},

{path:"/index",component:Index}

]