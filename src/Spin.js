import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spin = (props) => {
  const spinner = useSelector((state) => state.appReducer.loading);

  return (
    <div className="loader-styles">
      <TailSpin color="#00BFFF" height={100} width={100} visible={spinner} />
    </div>
  );
};

export default Spin;
