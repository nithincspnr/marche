const data = require('./data/stateData.json');

const getStates = async (req, res) => {
  const { visitRange } = req.query;
  let results = [];
  switch (visitRange) {
    case '0-250':
      results = data.filter((item) => item.visits <= 250);
      break;
    case '250-500':
      results = data.filter((item) => item.visits > 250 && item.visits <= 500);
      break;
    case '500-1000':
      results = data.filter((item) => item.visits > 500 && item.visits <= 1000);
      break;
    case '1000+':
      results = data.filter((item) => item.visits > 1000);
      break;
    default:
      break;
  }
  res.json({ results });
};

module.exports = { getStates };
