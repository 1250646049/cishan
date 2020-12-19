import Login from '../Components/Login/Login'
import Main from '../Components/Main/Main'



export default [
{path:"/login",component:Login},
{path:"/",redirect:"/login"},
{path:"/main",component:Main,name:"main"},



]