import Vue from 'vue'
import {Button,Container,Main,Footer,Header,Card,
    Form,FormItem,Input,Aside,Menu,Submenu,MenuItemGroup,MenuItem,
    DropdownMenu,DropdownItem,Dropdown,Table,TableColumn,TabPane,Tabs
    ,Steps,Step,Dialog,Drawer,Timeline,TimelineItem,Pagination
} from 'element-ui'
import {Message,MessageBox} from 'element-ui'

Vue.use(Button).use(Container).use(Main).use(Footer).use(Header).use(Card)
.use(Form).use(FormItem).use(Input).use(Aside)
.use(Menu).use(Submenu).use(MenuItemGroup).use(MenuItem)
.use(DropdownItem).use(DropdownMenu).use(Dropdown)
.use(Table).use(TableColumn).use(TabPane).use(Tabs)
.use(Steps).use(Step).use(Dialog).use(Drawer).use(Timeline).use(TimelineItem)
.use(Pagination)
Vue.prototype.$message=Message
Vue.prototype.$MessageBox=MessageBox


