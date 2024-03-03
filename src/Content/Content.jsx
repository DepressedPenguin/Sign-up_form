import React from "react";
import "./style.css";

export default function Content() {
  return (
    <>
      <div className="contnet">
        <div className="left_side">
          <h1>
            Learn to code by
            <br />
            watching others
          </h1>
          <p>
            See How experience developers solve proplems in real-time.
            <br />
            Watching scripted tutorials is great, but understanding how
            <br />
            developers think is invaluable.
          </p>
        </div>
        <div className="right_side">
          <div className="trial">
            <div className="trial_place">
              <p>
                <span id="day_bold">Try it free 7 days</span> then $20/mo.
                thereafter
              </p>
            </div>
          </div>
          <div className="inputs_place">
            <div className="input_place">
              <input
                className="input_f"
                type="text"
                placeholder="First Name"
              ></input>
            </div>
            <div className="input_place">
              <input
                className="input_f"
                type="text"
                placeholder="Last Name"
              ></input>
            </div>
            <div className="input_place">
              <input
                className="input_f"
                type="text"
                placeholder="Email Adress"
              ></input>
            </div>
            <div className="input_place">
              <input
                className="input_f"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="Button_calim">
              <button className="btn_claim">CLAIM YOUR FREE TRAIL</button>
            </div>
            <div className="p_agree">
              <p>
                By clicking the button you are agree to our{" "}
                <span id="terms">Terms and Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
