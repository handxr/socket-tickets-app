import React from "react";

async function getLastTickets() {
  return fetch("http://localhost:8080/tickets").then((res) => res.json());
}

export function useGetLastTickets() {
  const [lastTickets, setLastTickets] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      await getLastTickets().then((tickets) => setLastTickets(tickets.result));
    })();
  }, []);

  return {
    lastTickets,
  };
}
