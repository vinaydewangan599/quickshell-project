// src/components/KanbanBoard.js
import React from "react";
import "./KanbanBoard.css";

import Column from "./Column";
import { groupTickets } from "../utils/groupingFunctions";
import { sortTickets } from "../utils/sortingFunctions";

const KanbanBoard = ({ data, grouping, sorting }) => {
  const groupedTickets = groupTickets(data.tickets, grouping, data.users);
  const sortedGroupedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="kanban-board">
      {Object.entries(sortedGroupedTickets).map(([groupName, tickets]) => (
        <Column key={groupName} title={groupName} tickets={tickets} />
      ))}
    </div>
  );
};

export default KanbanBoard;
