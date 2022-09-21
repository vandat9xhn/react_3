import worker_event from "./worker";

const code = worker_event.toString();
const blob = new Blob([`(${code})()`]);
export const worker = new Worker(URL.createObjectURL(blob));
