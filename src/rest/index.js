const Router = require('@koa/router');
const installRennersRouter = require('./_renners');

/**
 * Install all routes in the given Koa application.
 *
 * @param {Koa} app - The Koa application.
 */
module.exports = (app) => {
    const router = new Router({
        prefix: '/api',
    });


    installRennersRouter(router);


    app.use(router.routes()).use(router.allowedMethods());
};