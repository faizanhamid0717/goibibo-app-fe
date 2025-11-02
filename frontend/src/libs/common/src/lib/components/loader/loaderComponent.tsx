import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoaderState } from "./loaderReducer";


export interface LoaderProps {}
const Loader = (props: LoaderProps) => {
  const loaderState = useSelector(selectLoaderState);

  return (
    <>
      {loaderState ? (
        <LinearProgress
          color="warning"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "2px",
            zIndex: 9999,
          }}
        />
      ) : null}{" "}
    </>
  );
};

export default Loader;
