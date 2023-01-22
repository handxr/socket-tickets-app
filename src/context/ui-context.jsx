import React from "react";

export const UiContext = React.createContext();

export function UiProvider({ children }) {
  const [isSiderCollapsed, setIsSiderCollapsed] = React.useState(false);

  function hideSider() {
    setIsSiderCollapsed(true);
  }

  function showSider() {
    setIsSiderCollapsed(false);
  }

  const memoedValues = React.useMemo(
    () => ({
      isSiderCollapsed,
      hideSider,
      showSider,
    }),
    [isSiderCollapsed]
  );

  return (
    <UiContext.Provider value={memoedValues}>{children}</UiContext.Provider>
  );
}
