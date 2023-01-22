import React from "react";
import { UiContext } from "../context/ui-context";

export function useHideMenu(hide) {
  const { showSider, hideSider } = React.useContext(UiContext);

  React.useEffect(() => {
    if (hide) {
      hideSider();
    } else {
      showSider();
    }
  }, [hide]);
}
