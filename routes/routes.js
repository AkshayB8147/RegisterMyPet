const router=require('express').Router();
const ContactUs = require('../controller/ContactUs');
const Home=require('../controller/Home');
const RegisterPet = require('../controller/RegisterPet');
const RegisterDoc = require('../controller/RegisterDoctor');
const Login=require('../controller/Login');
const FindDoctor=require('../controller/FindDoctor');
// let FindDoctor=require('../controller/FindDoctor');
const ensureAuthenticated=require('../models/Auth');


router.get('/',Home);
router.get('/home-page',Home);
router.get('/contact-us',ContactUs);

router.get('/register-pet',RegisterPet.petForm);
router.post('/register-pet',RegisterPet.saveDetails);

router.get('/register-doc',RegisterDoc.docForm);
router.post('/register-doc',RegisterDoc.saveDetails);

router.get('/loginPet',Login.loginPet);
router.post('/loginPet',Login.loginPetCal);
router.get('/loginDoc',Login.loginDoc);
router.post('/loginDoc',Login.loginDocCal);

router.get('/getDoc',ensureAuthenticated,FindDoctor);
module.exports=router;