// import { rotateImg } from "../utils/rotateImg";

export default () => {
  self.addEventListener("message", (e) => {
    const worker_type = e.data.type;

    if (worker_type === "image") {
      self.postMessage({ type: worker_type, img: e.data.img });
    }
  });
};
