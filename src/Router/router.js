
// Pages
import homePage from '../pages/home'
import miniHome from '../pages/miniHome'

const routes = [
  { path: '/home', component: homePage , name : 'home' },
  { path: '/', component: miniHome , name : 'miniHome' }
]


export default routes;