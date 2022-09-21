import * as React from "react";

import { worker } from "worker";

import img from "../../../images/send_mess.png";

//
export interface WorkerExProps {}

//
function WorkerEx({}: WorkerExProps) {
  //
  React.useEffect(() => {
    worker.addEventListener("message", onWorkerMessage);

    return () => {
      worker.removeEventListener("message", onWorkerMessage);
    };
  }, []);

  // ---

  //
  const handlePostMess = () => {
    worker.postMessage({ type: "image", img: img });
  };

  const onWorkerMessage = (e: MessageEvent) => {
    console.log(e.data.img);
  };

  //
  return (
    <div>
      <h3>Worker Example</h3>

      <div>
        <button type="button" onClick={handlePostMess}>
          Web Worker: Rotate Image
        </button>
      </div>
    </div>
  );
}

export default WorkerEx;
