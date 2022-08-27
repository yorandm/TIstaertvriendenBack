const Router = require('@koa/router');
const templateService = require('../service/template');
const {
    requireAuthentication,
    makeRequireRole
} = require('../core/auth');
const Roles = require('../core/roles');
const roles = require('../core/roles');


// const getAllTemplatesByRole = async(ctx) => {
//     ctx.body = await templateService.getAllTemplatesByRole();
// }

// const getTemplateOwned = async(ctx) => {
//     const template = await templateService.getTemplateOwned(ctx.state.session);
//     ctx.body = template;
// }

// const getActiveAndRole = async(ctx) => {
//     const template = await templateService.getActiveAndRole(ctx.state.session);
//     ctx.body = template;
// }

// const getTemplateByUser = async(ctx) => {
//     ctx.body = await templateService.getTemplateByUser(ctx.state.session.userId);
// }

// const getTemplateByUserAndCat = async(ctx) => {
//     ctx.body = await templateService.getTemplateByUserAndCat(ctx.state.session, ctx.params.catId);
// }
// const updateTemplateByUserAndCat = async(ctx) => {
//     ctx.body = await templateService.updateTemplateByUserAndCat(ctx.request.body.layoutId, ctx.request.body.catId, ctx.request.body.layout);
// }

// const updateDefault = async(ctx) => {
//     ctx.body = await templateService.updateDefault(ctx.state.session.userId, ctx.request.params.id);
// }

// const createTemplate = async(ctx) => {
//     ctx.body = await templateService.createTemplate(ctx.request.body.naam, ctx.state.session);
// }
// const createTemplateCat = async(ctx) => {
//     ctx.body = await templateService.createTemplateCat(ctx.request.body.layoutId, ctx.request.body.catId, ctx.request.body.layout);
// }

// const deleteTemplateById = async(ctx) => {
//     ctx.body = await templateService.deleteTemplateById(ctx.params.id, ctx.params.catId);
// }

const createRenner = async(ctx) => {
    ctx.body = await templateService.createRenner(ctx.request.body.voornaam, ctx.request.body.naam, ctx.request.body.jaar, ctx.state.session);
}

module.exports = (app) => {
    const router = new Router({
        prefix: '/templates',
    });


    router.post('/new/', createRenner);


    // router.get('/ro', requireAuthentication, requireMVOC, getActiveAndRole);
    // router.get('/rol', requireAuthentication, requireMVOC, getAllTemplatesByRole);
    // router.get('/owned/', requireAuthentication, requireMVOCMANAGERDIRECTIE, getTemplateOwned);
    // router.get('/user/', requireAuthentication, getTemplateByUser);
    // router.get('/cat/:catId', requireAuthentication, getTemplateByUserAndCat);

    // router.put('/default/:id', requireAuthentication, updateDefault);
    // router.put('/user/', updateTemplateByUserAndCat);

    // router.post('/newTempCat/', requireAuthentication, createTemplateCat)
    // router.delete('/:id/:catId', deleteTemplateById);

    app.use(router.routes()).use(router.allowedMethods());
}