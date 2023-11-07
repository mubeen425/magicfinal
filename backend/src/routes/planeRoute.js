const express = require("express");
const {
  createPlane,
  getAllPlanes,
  getPlaneById,
  updatePlaneById,
  deletePlaneById,
} = require("../controllers/planeController");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

// Create a new plane
router.post("/planes", createPlane);

// Get all planes
router.get("/planes", getAllPlanes);

// Get a specific plane by ID
router.get("/planes/:id", getPlaneById);

// Update a plane by ID
router.put("/planes/:id", updatePlaneById);

// Delete a plane by ID
router.delete("/planes/:id", deletePlaneById);

module.exports = router;
