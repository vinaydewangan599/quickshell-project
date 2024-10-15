import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { useKanbanData } from "./hooks/useKanbanData";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const { data, grouping, sorting, updateGrouping, updateSorting } =
    useKanbanData();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={updateGrouping}
        onSortingChange={updateSorting}
      />
      <KanbanBoard data={data} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
