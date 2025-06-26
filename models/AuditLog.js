const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  method: String,
  path: String,
  timestamp: Date,
});

module.exports = mongoose.model("AuditLog", auditLogSchema);
