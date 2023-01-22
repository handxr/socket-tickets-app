import * as React from "react";

export function lazyImport(factory) {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then((module) => ({ default: module[name] }))
    ),
  });
}
