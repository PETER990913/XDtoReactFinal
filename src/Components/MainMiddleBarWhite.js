import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightAvatar from "./highlight/HighLightAvatar";
import MainMiddleBarFooter from "./MainMiddleBarFooter";
import HighLightMiddleExpertWhite from "./highlight/HighLightMiddleExpertWhite";
import MainMiddleBarMiddleWhite from "./MainMiddleBarMiddleWhite";
import MainMiddleBarButtonGroupWhite from "./MainMiddleBarButtonGroupWhite";
import MainMiddleBarBodyWhite from "./MainMiddleBarBodyWhite";
const MainMiddleBarWhite = ({ checkedForYou, setCheckedForYou }) => {
    return (
        <div className="MainMiddleBar_out_white">
            <div className="d-flex flex-wrap">
                <div className="d-flex flex-wrap" style={{ flexGrow: "1" }}>
                    <div className="d-flex">
                        <HighLightAvatar />
                        <HighLightMiddleExpertWhite />
                    </div>
                    <MainMiddleBarMiddleWhite />
                </div>
                <MainMiddleBarButtonGroupWhite checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />

            </div>
            <MainMiddleBarBodyWhite checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            <MainMiddleBarFooter />
        </div>


    );
};
export default MainMiddleBarWhite;
