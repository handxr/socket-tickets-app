import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { UiProvider } from "../context/ui-context";
import { SocketProvider } from "../context/socket-context";

export function AppProvider({ children }) {
  return (
    <React.Suspense
      fallback={
        <div>
          <Spin tip="Loading" size="large" />
        </div>
      }
    >
      <SocketProvider>
        <UiProvider>{children}</UiProvider>
      </SocketProvider>
    </React.Suspense>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
