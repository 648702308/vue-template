import YuiTabBar from '@/components/common/TabBar.vue'
// import {
//   Tag, Col, Icon, Cell, CellGroup, Swipe, Toast, SwipeItem, GoodsAction, Sku, Card, Button, SwipeCell,
//   Dialog, Tab, Tabs, Row, Checkbox, CheckboxGroup, SubmitBar, NavBar, Tabbar, TabbarItem, Panel, List, Step, Steps,
//   Field, Popup, Stepper, RadioGroup, Radio, Picker, Uploader, Info, NumberKeyboard, GoodsActionIcon, GoodsActionButton,
//   grid, GridItem, PullRefresh, Divider, Area, Switch, IndexBar, IndexAnchor
// } from 'vant';

const components = [
  YuiTabBar,

  // Tag, Col, Icon, Cell, CellGroup, Swipe, Toast, SwipeItem, GoodsAction, Sku, Card, Button, SwipeCell,
  // Dialog, Tab, Tabs, Row, Checkbox, CheckboxGroup, SubmitBar, NavBar, Tabbar, TabbarItem, Panel, List, Step, Steps,
  // Field, Popup, Stepper, RadioGroup, Radio, Picker, Uploader, Info, NumberKeyboard, GoodsActionIcon, GoodsActionButton,
  // grid, GridItem, PullRefresh, Divider, Area, Switch, IndexBar, IndexAnchor
];


export default (Vue) => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  });
}
