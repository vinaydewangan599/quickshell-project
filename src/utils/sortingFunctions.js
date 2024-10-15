// src/utils/sortingFunctions.js
export const sortTickets = (groupedTickets, sorting) => {
    const sortedGroupedTickets = {};
  
    for (const [groupName, tickets] of Object.entries(groupedTickets)) {
      sortedGroupedTickets[groupName] = tickets.sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else if (sorting === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }
  
    return sortedGroupedTickets;
  };