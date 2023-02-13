import React, { useState, useContext } from "react";
import SectionHeader from "../Components/Get-Involved/SectionHeader";
import Form from "../Components/Get-Involved/Form";
import PictureCards from "../Components/Get-Involved/PictureCards";
import Volunteers from "../Components/Get-Involved/Volunteers";
import MakeADonation from "../Components/Get-Involved/MakeADonation";
import tabContext from "../context/tabContext";

const GetInvolved = () => {
  const tabCtx = useContext(tabContext);

  return (
    <div>
      <SectionHeader />
      {/* Tab Switching */}
      <div className="">
        {tabCtx.getInvolvedActiveTab === "tab1" && (
          <div>
            <MakeADonation />
          </div>
        )}
        {tabCtx.getInvolvedActiveTab === "tab2" && (
          <div>
            <Volunteers />
            <PictureCards />
            <Form />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInvolved;
