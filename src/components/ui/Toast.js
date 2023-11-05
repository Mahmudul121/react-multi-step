import { toast } from "react-toastify";

const toastify = (type, sms = "") => {
  let block = null;
  if (type === "info") {
    toast.info(sms);
  }
  if (type === "success") {
    toast.success(sms);
  }
  if (type === "error") {
    toast.error(sms);
  }
  if (type === "warn") {
    toast.warn(sms);
  }
  return block;
};

export { toastify };
