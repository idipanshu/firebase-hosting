import { useState, useEffect } from "react";
import { getLaunchCrew, LaunchResponse } from "./launches";

export const getLaunches = () => {
  const [launches, setLaunches] = useState<LaunchResponse>();

  useEffect(() => {
    getLaunchCrew().then(res => setLaunches(res));

    return () => {
      setLaunches(undefined);
    };
  }, []);

  return {
    launches
  };
};
