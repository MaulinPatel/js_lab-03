const People = require('../models/people');

exports.index = async (req, res, next) => {
  try {
    const people = await People.find();
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const people = await People.findById(req.params.id);
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);

  try {
    const { id, name, age, field } = req.body;
    const pl = await People.create({
      id,
      name,
      age,
      field
    });
    res.status(200).json({message: 'People was created successfully', status: 'success', people: pl});
  } catch (error) {
    next(error);
  }
}


  
