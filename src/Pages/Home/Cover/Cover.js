import React from "react";
import "./Cover.css";

const Cover = () => {
    return (
        <section style={{ backgroundColor: "rgb(243 243 243)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 py-5 d-flex align-items-center">
                        <img className="w-100" src="https://i.ibb.co/TwJJfh2/cover.jpg" alt="" />
                    </div>
                    <div className="col-md-6 py-5 d-flex align-items-center">
                        <div>
                            <h1 className="display-3 fw-bold">SPEAKO PAD</h1>
                            <p>
                                Speako POD comes with new breakthrough technology that adapts to its location and
                                deliver the high quality sound to audience. This speaker will change your home.
                            </p>
                            <div className="btn-container">
                                <button className="cover-btn">Learn More</button>
                                <button className="cover-btn">
                                    <i className="far fa-play-circle"></i> Watch Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cover;
