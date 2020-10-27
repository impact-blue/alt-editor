import { useEffect } from "react";
import type { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  const test = "test";

  useEffect(() => {
    test;
    test;
    // eslint-error
  }, []);

  return <div>App</div>;
};

export { App };
