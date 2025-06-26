const {
  exportToCSV,
  exportToExcel,
  exportToPDF,
} = require("../services/exportService");

const exportCSV = async (req, res, next) => {
  try {
    const csv = await exportToCSV(req.user.id);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=tasks.csv");
    res.send(csv);
  } catch (err) {
    next(err);
  }
};


const exportExcel = async (req, res, next) => {
  try {
    const buffer = await exportToExcel(req.user.id);
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=tasks.xlsx");
    res.send(buffer);
  } catch (err) {
    next(err);
  }
};


const exportPDF = async (req, res, next) => {
  try {
    const pdf = await exportToPDF(req.user.id);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=tasks.pdf");
    res.send(pdf);
  } catch (err) {
    next(err);
  }
};


module.exports = {
  exportCSV,
  exportExcel,
  exportPDF,
};
