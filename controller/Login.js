let db0 = require('../db/conn');

// Login Auth for Pet owners
let loginPetCal = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        req.flash('error','Please Enter Email and Password');
        res.render('forms/loginPet');
    } else {
        userDetails = req.body;
        let db = db0.getDb();
        let registeredPet;
        let errors = [];
        registeredPet = await db.collection('registered_pets').findOne({ 'ownerEmail': userDetails.email });
        console.log(registeredPet);

        if (registeredPet == null || registeredPet == undefined) {
            req.flash(error, 'Please enter valid Email and Password. If new user please Register as Pet ');
            res.render('forms/loginPet');
        } else {
            if (userDetails.password != registeredPet.password) {
                errors.push({ text: "Password do not match" });
            }
            if (errors.length > 0) {
                res.render('forms/loginPet', {
                    errors: errors,
                    email: req.body.email,
                    password: req.body.password,
                });
            } else {
                console.log(req.session.user)
                req.session.user = registeredPet;
                console.log(req.session.user.ownerName,req.session.user.ownerEmail);
                // ,{success_msg:'you are successfully logged in'}
                res.redirect('/home-page');
            }
        }

    }
    // res.send(results);
};
// Login Auth for Doctors
let loginDocCal = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        req.flash('error','Please Enter Email and Password');
        res.render('forms/loginDoc')
    } else {
        userDetails = req.body;
        let db = await db0.getDb();
        let registeredDoc;
        let errors = [];
        registeredDoc = await db.collection('registered_docs').findOne({ 'docEmail': userDetails.email });
        console.log(registeredDoc);
        if (registeredPet == null || registeredPet == undefined) {
            req.flash(error, 'Please enter valid Email and Password. If new user please Register as Doctor');
            res.render('forms/loginDoc');
        } else {
            if (userDetails.password != registeredDoc.password) {
                errors.push({ text: "Password do not match" });
            }
            if (errors.length > 0) {
                res.render('forms/loginDoc', {
                    errors: errors,
                    email: req.body.email,
                    password: req.body.password,
                });
            } else {
                // req.session.user=registeredDoc;
                console.log(req.session.user)
                req.session.user = registeredDoc;
                console.log(req.session.user.docName,req.session.user.Email);
                res.redirect('/home-page',302);
            }
        }
    }
};

// Show Login Form
let loginPet = (req, res) => {
    res.status(200).render('forms/loginPet');
};
let loginDoc = (req, res) => {
    res.status(200).render('forms/loginDoc');
};
module.exports = { loginPetCal, loginDocCal, loginPet, loginDoc };