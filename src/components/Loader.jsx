import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#363535"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};

export default Loader;
