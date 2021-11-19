import User from '../../models/Users.js'
import { admin as nav } from '../../helpers/nav.js'
import { host } from '../../config.js'

export const renderDashboard = async(req, res) => {
    const { username, email, rol } = await User.findOne({ _id: req.user._id })

    const data = {
        title: "GikEdu - Inicio",
        contentHeader: {
            partial: () => { return 'profile' },
        },
        contentRol: {
            partial: () => `rol/admin/inicio`,
            args: {}
        },

        data: {
            username,
            email,
            rol
        },
    }

    data.navigator = nav(req.path)
    data.host = host

    res.render('user/dashboard', data)
}