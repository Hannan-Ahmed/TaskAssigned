// eslint-disable-next-line react/prop-types
const Backdrop = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="absolute inset-0"></div>
      {children}
    </div>
  );
};

export default Backdrop;
