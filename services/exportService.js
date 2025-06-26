const Task = require("../models/Task");
const { Parser } = require("json2csv");
const exceljs = require("exceljs");
const PDFDocument = require("pdfkit");


const exportToCSV = async (userId) => {
  const tasks = await Task.find({ userId }).lean();

  // Map tasks to only include required fields
  const refinedTasks = tasks.map(task => ({
    Title: task.title,
    Description: task.description,
    Category: task.category,
    DueDate: task.dueDate,
    Status: task.status,
    CreatedAt: task.createdAt,
  }));

  const parser = new Parser();
  return parser.parse(refinedTasks);
};


const exportToExcel = async (userId) => {
  const tasks = await Task.find({ userId }).lean();
  const workbook = new exceljs.Workbook();
  const worksheet = workbook.addWorksheet("Tasks");

  worksheet.columns = [
    { header: "Title", key: "title", width: 25 },
    { header: "Description", key: "description", width: 40 },
    { header: "Category", key: "category", width: 20 },
    { header: "Due Date", key: "dueDate", width: 20 },
    { header: "Status", key: "status", width: 15 },
  ];

  worksheet.addRows(tasks);

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
};

const exportToPDF = async (userId) => {
  const tasks = await Task.find({ userId }).lean();
  const doc = new PDFDocument();
  const stream = [];

  doc.on("data", chunk => stream.push(chunk));
  doc.on("end", () => {}); // You could remove this if unused

  doc.fontSize(16).text("Task List", { align: "center" });

  tasks.forEach(task => {
    doc.moveDown().fontSize(12).text(
      `Title: ${task.title}\nDescription: ${task.description}\nCategory: ${task.category}\nDue Date: ${task.dueDate}\nStatus: ${task.status}`,
      { underline: false }
    );
  });

  doc.end();

  return new Promise((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(stream)));
  });
};

module.exports = {
  exportToCSV,
  exportToExcel,
  exportToPDF,
};
