module.exports = {
    env: 'NODE_ENV',
    database: {
        host: 'DATABASE_HOST_Lokaal',
        port: 'DATABASE_PORT_Lokaal',
        username: 'DATABASE_USERNAME_Lokaal',
        password: 'DATABASE_PASSWORD_Lokaal',
        name: 'DATABASE_NAME_Lokaal',
    },
    auth: {
        jwt: {
            secret: 'JWT_SECRET',
        },
    },
};