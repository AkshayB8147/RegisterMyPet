const router=require('express').Router();
const ContactUs = require('../controller/ContactUs');
const Home=require('../controller/Home');
const RegisterPet = require('../controller/RegisterPet');

router.get('/',Home);
router.get('/home-page',Home);
router.get('/contact-us',ContactUs);

router.get('/register-pet',RegisterPet.petForm);
router.post('/register-pet',RegisterPet.saveDetails);
module.exports=router;