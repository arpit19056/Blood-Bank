const express = require("express");
const authMidleware = require("../middlewares/authMidleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
  getOrganisationController,
  getOrganisationForHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMidleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMidleware, getInventoryController);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMidleware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMidleware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars", authMidleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMidleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-organisation", authMidleware, getOrganisationController);

//GET orgnaisation RECORDS for hospital
router.get(
  "/get-organisation-for-hospital",
  authMidleware,
  getOrganisationForHospitalController
);
//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMidleware,
  getInventoryHospitalController
);
module.exports = router;