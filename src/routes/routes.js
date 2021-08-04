import Home from "../pages/home";
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:name': Pokemon,
}

const router = async () => {
    const content = null || document.getElementById('content');

    let route = await resolveRoutes();
    
    const render = routes[route]
        ? routes[route]
        : Error404;
    content.innerHTML = await render();
    
}

export default router;
