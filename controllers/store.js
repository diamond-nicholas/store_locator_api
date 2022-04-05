const Store = require('../model/stores');

const getStore = async (req, res) => {
  try {
    const store = await Store.find({});
    return res.status(200).json({
      success: true,
      count: store.length,
      data: store,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'server error' });
  }
};

const addStore = async (req, res) => {
  try {
    const store = await Store.create(req.body);
    return res.status(200).json({
      sucess: true,
      data: store,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({
        message: 'This store already exists',
      });
    }
    res.status(500).json({ error: 'server error' });
  }
};

module.exports = {
  addStore,
  getStore,
};
