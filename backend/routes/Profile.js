const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")
const {
  getAllUserDetails,
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

router.get("/getUserDetails", auth, getAllUserDetails)

module.exports = router
