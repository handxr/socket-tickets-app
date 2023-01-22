export function getUserStorage() {
  return {
    agent: window.localStorage.getItem("agent"),
    desk: window.localStorage.getItem("desk"),
  };
}
