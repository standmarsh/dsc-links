const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role, clubs } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
    clubs,
  });

  res.status(200).json({ success: true });
});
