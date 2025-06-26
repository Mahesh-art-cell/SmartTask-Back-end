const express = require("express");
const {
  exportCSV,
  exportExcel,
  exportPDF,
} = require("../controllers/exportController");

const { verifyToken } = require("../middleware/auth");

const router = express.Router();

router.get("/csv", verifyToken, exportCSV);
router.get("/excel", verifyToken, exportExcel);
router.get("/pdf", verifyToken, exportPDF);

module.exports = router;
