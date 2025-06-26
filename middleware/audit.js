const AuditLog = require("../models/AuditLog");

const auditLogger = async (req, res, next) => {
  try {
    await AuditLog.create({
      userId: req.user?.id || "system",
      method: req.method,
      path: req.originalUrl,
      timestamp: new Date(),
    });
  } catch (err) {
    console.error("Audit log error:", err.message);
  }
  next();
};

module.exports = { auditLogger };
