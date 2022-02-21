// import express from "express";
// import {login,home_screen,postLogin,register,postRegister,getCalculator,
// getResults,postCalculator,getNWU,getUP,getLimpopo,getWits,getUni} from "../controllers/app.js"
// const router = express.Router();

// router.get("/", login);
// router.get('/home_screen',home_screen);
// router.get('/register',register);
// router.post('/login',postLogin);
// router.post("/register",postRegister);
// router.get("/calculator",getCalculator);
// router.post("/calculator",postCalculator);
// router.get('/results',getResults);
// router.get("/nwu",getNWU);
// router.get('/pretoria',getUP);
// router.get("/limpopo",getLimpopo);
// router.get("/wits",getWits)
// router.get("/uni",getUni);

import express from "express";
import { getPosts, getPost, createPost, updatePost, likePost, deletePost, calculate } from '../controllers/app.js';
import {getUser,registerUser,profile} from '../controllers/userLogin.js'

import protect from "../middleware/authMiddleware.js"

const router = express.Router();


router.get('/', getPosts);
router.post('/calculate', calculate);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.post('/login',getUser);
router.post('/register',registerUser)
router.route("/profile").get(protect,profile)


export default router;





