function isAuth(req, res, next) {
    console.log(`in AUth project sections ${req.session.currentUser}`);
    if (req.session.currentUser)
        next()
    else
        res.redirect('/login')
}

module.exports=isAuth