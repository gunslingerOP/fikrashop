import * as express from "express";
const router = express.Router();
import userAuth from "../../middleware/userAuth";

import UserController from "../../controllers/app/user.contoller";
import HomeController from "../../controllers/app/home.controller";
import AdminController from "../../controllers/app/admin.controller";

// USER CONTROLLER
router.post("/register", UserController.register);
router.post("/otp", UserController.checkOTP);
router.post("/login",userAuth, UserController.login);
router.post("/invoice", userAuth, UserController.makeInvoice);
router.put("/edit",userAuth,UserController.change)
router.post("/resend",userAuth,UserController.forgetPass)
router.post("/reset",userAuth,UserController.fixPass)
router.post("/addCategory",userAuth,AdminController.makeCategory)
router.post("/addProduct",userAuth,AdminController.makeProduct)
router.post("/ZC/payment",userAuth,UserController.zcRedirect)



// HOME CONTROLLERproducts
router.get("/categories", HomeController.getCategories);
router.get("/products/:category", HomeController.getProducts); 
router.get("/methods", HomeController.getMethods);
router.get("/invoices", userAuth, HomeController.getInvoices);

export default router;