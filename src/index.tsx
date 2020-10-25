import { useEffect } from "react";
import type { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  const test = "test";

  useEffect(() => {
    test;
  }, []);

  return <div>App</div>;
};
