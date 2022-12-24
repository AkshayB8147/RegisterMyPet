module.exports =(req, res, next)=> {
      if (req.session.user) {
        return next();
      }
      req.flash('error_msg', 'Not authorized');
      res.redirect('/loginPet');
    }