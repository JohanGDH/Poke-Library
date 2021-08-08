const resolveRoutes = (route) => {
    
    if(route === '404') {
        console.log(route)
        return '404';
    }    

    if(route.length <= 15) {
        let validRoute = route;                
        if(validRoute === '/') {
            validRoute =  route;
        }else {
            validRoute = '/:name';
        }            
        return validRoute;
    }

    return `/${route}`;
}

export default resolveRoutes;