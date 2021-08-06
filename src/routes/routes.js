import searchBox from '../pages/searchBox';
import Home from "../pages/home";
import Pokemon from "../pages/pokemon";
import getHash from "../utils/getHash";
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:name': Pokemon,
}

const router = async () => {
    const content = null || document.getElementById('content');
    const search = null || document.getElementById('searchbox');

    search.innerHTML = await searchBox()
    let hash = getHash()
    let route = await resolveRoutes(hash);    
    let render = routes[route]
        ? routes[route]
        : Error404;
    content.innerHTML = await render();
    
}

export default router;