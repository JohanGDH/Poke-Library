const resolveRoutes = (route) => {
    if(route.length <= 15) {
        let validRoute = route === '/'
            ? route
            : '/:name'
        return validRoute;
    }

    return `/${route}`;
}

export default resolveRoutes;