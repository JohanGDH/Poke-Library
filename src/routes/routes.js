import Header from '../templates/Header';
import searchBox from '../pages/searchBox';
import Home from "../pages/home";
import Error404 from '../pages/404'
import Pokemon from "../pages/pokemon";
import getHash from "../utils/getHash";
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:name': Pokemon,
    '404': Error404,
}

const router = async () => {

    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    setTimeout(() => {
        const search = null || document.getElementById('searchbox');    
        search.innerHTML =  searchBox()
    },30)
    
    header.innerHTML = Header()

    let hash = getHash()
    let route = await resolveRoutes(hash);
    let render = routes[route]
        ? routes[route]
        : Error404;
    content.innerHTML = await render();

}

export default router;
