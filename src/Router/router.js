// 后台路由
import Login from '../Components/Login/Login'
import Main from '../Components/Main/Main'
import Admin from '../Components/Admin/Admin'

// 后端主界面路由
import System from '../Components/Main/System'
import Welcome from '../Components/Main/Welcome'
import Need from '../Components/Main/Need'
// 前端路由
import Index from '../Components/Static/Index'


export default [
// {path:"/login",component:Login},
{path:"/",redirect:"/index"},

{path:"/admin",component:Admin,children:[
    {path:"login",component:Login},
    {path:"main",component:Main,name:"main",children:[
        {path:"system",component:System},
        {path:"welcome",component:Welcome},
        {path:"need",component:Need},
        {path:"/",redirect:"welcome"}
              
    ]},
    {path:"/",redirect:"login"}

]},

{path:"/index",component:Index}

]