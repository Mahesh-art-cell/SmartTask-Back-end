const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isStrongPassword = (password) => {
  return password.length >= 6;
};

module.exports = {
  isEmail,
  isStrongPassword,
};
