import React, { useEffect, useState } from "react";

import Map from "./Map";
import Selector from "./Selector";
import { getStates } from "../services/state";

export default function Container() {
  const defaultSelection = "0-250";
  const [activeStates, setActiveStates] = useState([]);
  const [useVisits, setUserVisits] = useState(defaultSelection);

  useEffect(() => {
    // Load data on Initial mount.
    fetchData(defaultSelection);
  }, []);

  const selectionHandler = (e) => {
    const selectedValue = e.target.value;
    // Clears Map
    setActiveStates([]);
    // Set current value & Map selection
    setUserVisits(selectedValue);
    fetchData(selectedValue);
  };

  const fetchData = (input) => {
    getStates(input)
      .then((states) => {
        const stateIDs = states.map((e) => e.id.toLocaleLowerCase());
        // Set active states on Map
        setActiveStates(stateIDs);
      })
      .catch((e) => console.log("Error in setting States on Map", e));
  };

  return (
    <React.Fragment>
      <Selector onChange={selectionHandler} value={useVisits} />
      <Map activeStates={activeStates} />
    </React.Fragment>
  );
}
