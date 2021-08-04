import Home from "../pages/home";
import getHash from "../utils/getHash";
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
}

const router = async () => {
    const content = null || document.getElementById('content');

    let hash = getHash()
    let route = await resolveRoutes(hash);
    
    const render = routes[route]
        ? routes[route]
        : Error404;
    content.innerHTML = await render();
    
}

export default router;
