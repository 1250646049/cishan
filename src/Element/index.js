import Vue from 'vue'
import {Button,Container,Main,Footer,Header,Card,
    Form,FormItem,Input,Aside,Tabs,TabPane
} from 'element-ui'
import {Message} from 'element-ui'

Vue.use(Button).use(Container).use(Main).use(Footer).use(Header).use(Card)
.use(Form).use(FormItem).use(Input).use(Aside).use(Tabs).use(TabPane)

Vue.prototype.$message=Message



