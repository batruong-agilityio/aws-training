class EmployeeController {
  findAll() {
    return [
      {
        id: 1,
        name: 'Ba Truong'
      }
    ];
  }

  findOne(id) {
    return {
      id: 1,
      name: 'Ba Truong'
    }
  }

  create(employee) {
    return {
      id: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...employee,
    }
  }
}

module.exports = new EmployeeController();