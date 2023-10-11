import { IToastifyParams } from "@/models/shared/IToastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastVisualOptions = {
  position: toast.POSITION.TOP_RIGHT,
  className: "Ts-op",
};

export const notify = (options: IToastifyParams) => {
  let { message, typeOfMessage } = options;

  switch (typeOfMessage) {
    case "error":
      toast.error(`${message}`, toastVisualOptions);
      break;

    case "success":
      toast.success(`${message}`, toastVisualOptions);
      break;

    case "warning":
      toast.warning(`${message}`, toastVisualOptions);
      break;

    default:
      break;
  }
};
