export function admin(path) {
    return getNavegator(path, [
        { categorie: 'Inicio', path: '/app' },
        {
            categorie: 'Register',
            path: '/app',
            subCategories: [
                { subCategorie: 'Pagina', path: '/app/pagina' },
                { subCategorie: 'Configuracion', path: '/app/configuracion' },
                { subCategorie: 'Miembros', path: '/app/miembros' }
            ]
        },
        { categorie: 'Login', path: '/app/login' },
        { categorie: 'Profile', path: '/app/profile' }
    ])
}

function getNavegator(path, nav) {
    path = path.toLowerCase().split('/')
    nav.forEach(el => {
        if (path[2] && el.categorie.toLowerCase() == path[2].toLowerCase()) {
            el.class = 'active'
        } else if (el.subCategories) {
            el.subCategories.forEach((el) => {
                if (el.subCategorie.toLowerCase() == path[2]) el.class = 'active'
                else el.class = ''
            })
        } else {
            el.class = ''
            if (!path[2]) nav[0].class = 'active'
        }
    })
    return nav
}