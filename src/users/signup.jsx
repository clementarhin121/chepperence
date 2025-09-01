function Signup() {
  const chepperence = {
    textDecoration: "underline",
  };

  return (
    <>
      <div className="signupHome">
        <div className="main2">
          <div className="welcomepic">
            <img
              src="https://i.etsystatic.com/23362861/r/il/2928a8/5193673482/il_fullxfull.5193673482_kygd.jpg"
              alt=""
            />
          </div>
          <div className="followUs">
            <h1>
              FOLLOW <br />
              US <span style={chepperence}>@CHEPPERENCE</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
