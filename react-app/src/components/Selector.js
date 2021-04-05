import React from "react";

export default function Selector({ onChange }) {
  return (
    <div className="selector">
      <p>User Visits</p>
      <select onChange={onChange}>
        <option value="0-250">0-250</option>
        <option value="250-500">250-500</option>
        <option value="500-1000">500-1000</option>
        <option value="1000+">1000+</option>
      </select>
    </div>
  );
}
