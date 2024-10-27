import React from 'react';

const AddFunds = () => {
  return (
    <div>
      <h2>Add Funds</h2>
      <form>
        <label>
          Amount:
          <input type="number" name="amount" />
        </label>
        <button type="submit">Add Funds</button>
      </form>
    </div>
  );
};

export default AddFunds;