const router=require('express').Router();
const ContactUs = require('../controller/ContactUs');
const Home=require('../controller/Home');
const RegisterPet = require('../controller/RegisterPet');
const RegisterDoc = require('../controller/RegisterDoctor');
const Login=require('../controller/Login');


router.get('/',Home);
router.get('/home-page',Home);
router.get('/contact-us',ContactUs);

router.get('/register-pet',RegisterPet.petForm);
router.post('/register-pet',RegisterPet.saveDetails);

router.get('/register-doc',RegisterDoc.docForm);
router.post('/register-doc',RegisterDoc.saveDetails);

router.get('/login-pet',Login.loginPet);
router.post('/login-pet',Login.loginPetCal);
router.get('/login-doc',Login.loginDoc);
router.post('/login-doc',Login.loginDocCal);
module.exports=router;