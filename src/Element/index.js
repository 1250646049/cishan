import Vue from 'vue'
import {Button,Container,Main,Footer,Header,Card,
    Form,FormItem,Input,Aside,Menu,Submenu,MenuItemGroup,MenuItem,
    DropdownMenu,DropdownItem,Dropdown,Table,TableColumn

} from 'element-ui'
import {Message} from 'element-ui'

Vue.use(Button).use(Container).use(Main).use(Footer).use(Header).use(Card)
.use(Form).use(FormItem).use(Input).use(Aside)
.use(Menu).use(Submenu).use(MenuItemGroup).use(MenuItem)
.use(DropdownItem).use(DropdownMenu).use(Dropdown)
.use(Table).use(TableColumn)

Vue.prototype.$message=Message



