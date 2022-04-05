const Store = require('../model/stores');

const addStore = async (req, res) => {
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

module.exports = {
  addStore,
};
