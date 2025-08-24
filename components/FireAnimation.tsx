const FireAnimation = () => {
  return (
    <>
      <div className="fire">
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="fire-effect"
        width="0"
        height="0"
      >
        <defs>
          <filter id="fire-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="fire-blur" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default FireAnimation;
