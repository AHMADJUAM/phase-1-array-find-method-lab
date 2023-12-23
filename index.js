// index.js

const superbowlWin = (record) => {
    const winningRecord = record.find(entry => entry.result === 'W');
    return winningRecord ? winningRecord.year : undefined;
  };
  
  module.exports = {
    superbowlWin,
  };
  