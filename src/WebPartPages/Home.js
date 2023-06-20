import React, { useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import MainTopBar from "../Components/MainTopBar";
import AdvertisementBanner from "../Components/AdvertisementBanner";
import LeftBarHighlight from "../Components/LeftBarHighlight";
import MainMiddleBar from "../Components/MainMiddleBar";
import MainBarEdit from "../Components/MainBar_Edit";
import MainBarComments from "../Components/MainBarComments";
import VPRigthBarSub2 from "../Components/ViewProfile/VPRightBarSub2";
import VPRigthBarSub3 from "../Components/ViewProfile/VPRightBarSub3";
import MyCommentsEditProfileStar from "../Components/ViewProfile/MyCommentsEditProfileStar";
import VPRightTopBarStar from "../Components/ViewProfile/VPRightTopBarStar";
import VPRightBarSubTopBarStar from "../Components/ViewProfile/VPRightBarSubTopBarStar";
import VPRightBarSubTopBarStar1 from "../Components/ViewProfile/VPRightBarSubTopBarStar1";
import VPRightBarSubTopBarFavourite from "../Components/ViewProfile/VPRightBarSubTopBarFavourite";
import VPRightBarSubscriber2 from "../Components/ViewProfile/VPRightBarSubscriber2";
import VPRightBarSubscriberTransaction from "../Components/ViewProfile/VPRightBarSubscriberTransaction";
import MyCommentsEditProfileStar1 from "../Components/ViewProfile/MyCommentsEditProfileStar1";
import VPRigthBarFavourite1 from "../Components/ViewProfile/VPRigthBarFavourite1";
import VPRigthBarFavourite2 from "../Components/ViewProfile/VPRigthBarFavourite2";
const Home = ({ checkedFavourite, setCheckedFavourite, checked, setChecked }) => {
    const [checkedCommentStar, setCheckedCommentStar] = useState(1)
    const [checkedForYou, setCheckedForYou] = useState(1);
    const [checkedMainOption, setCheckedMainOption] = useState(1)
    const displayCase = () => {
        if (checkedMainOption === 1) return <>
            <MainTopBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
        </>
        if (checkedMainOption === 2) return <MainBarEdit />
        if (checkedMainOption === 3) return <MainBarComments />

    }
    const displaystarsubtopbar = () => {
        if (checkedCommentStar === 1) return <VPRightBarSubTopBarStar />
        if (checkedCommentStar === 2) return <VPRightBarSubTopBarStar1 />
        if (checkedCommentStar === 3) return <VPRightBarSubTopBarFavourite checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
    }
    const displaysubtitle1 = () => {
        if (checkedCommentStar === 1) return <>
            <VPRightBarSubscriber2 />
        </>
        if (checkedCommentStar === 2) return <>
            <VPRightBarSubscriberTransaction />
        </>
        if (checkedCommentStar === 3 & checkedFavourite === true) return <>
            <VPRigthBarFavourite1 />
            <VPRigthBarFavourite1 />
        </>
        if (checkedCommentStar === 3 & checkedFavourite === false) return <>
            <VPRigthBarFavourite2 />
        </>
    }
    const displaystar = () => {
        if (checkedMainOption === 4) return <>

            <div className="ViewProfile_Mycomments_1">
                {checkedCommentStar === 1 ?
                    <MyCommentsEditProfileStar />
                    :
                    <MyCommentsEditProfileStar1 />
                }
            </div>
            <div className="ViewProfile_Mycomments_2">
                <VPRightTopBarStar checkedCommentStar={checkedCommentStar} setCheckedCommentStar={setCheckedCommentStar} />
                <div className="d-flex">
                    <div className="VP_RightBarSub1_out">
                        {displaystarsubtopbar()}
                        {displaysubtitle1()}
                    </div>
                    <div className="VP_RightBarSub2_out">
                        <VPRigthBarSub2 />
                        <VPRigthBarSub3 />
                    </div>
                </div>
            </div>
        </>
        else return <>
            <div style={{ width: "calc(100% - 74px)" }}>
                <div className="row">
                    <div className="MainBar_out">
                        {displayCase()}
                    </div>
                    <div className="RightBar_out">
                        <AdvertisementBanner />
                        <LeftBarHighlight />
                    </div>
                </div>
            </div>
        </>
    }


    return (<>
        {checked ?
            <>
                <TopBar checked={checked} setChecked={setChecked} />
                <div className="d-flex">
                    <div className="SideBar_Home_out">
                        <SideBar checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} />
                    </div>
                    {/* {displaystar()} */}
                </div>
            </>
            :
            <>
                <TopBar checked={checked} setChecked={setChecked} />
                <div className="d-flex">
                    <div className="SideBar_Home_out">
                        <SideBar checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} />
                    </div>
                    {displaystar()}
                </div>
            </>
        }
    </>
    );
};
export default Home;
