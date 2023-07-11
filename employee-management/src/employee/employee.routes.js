
const express = require('express');
const router = express.Router();

const employeeController = require('./employee.controller');

/* Get all employees */
router.get('/', async (req, res, next) => {
  try {
    const employees = await employeeController.findAll();
    res.json(employees);
  } catch (error) {
    next(error);
  }
});

/* Get a specific employee */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await employeeController.findOne({
      id: id,
    });

    if (!employee) {
      const error = new Error('Employee does not exist');
      return next(error);
    }

    res.json(employee);
  } catch (error) {
    next(error);
  }
});

/* Create a new employee */
router.post('/', async (req, res, next) => {
  try {
    const { name, job } = req.body;

    const employee = await employeeController.create({
      name: name,
      job: job,
    });

    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
});

module.exports = router;