import React from "react";
import { CustomText } from "../../utilities/CustomText";
import classes from '../LandingPage.module.css'

function CashInfo({label, value}) {
  return (
    <div className={classes.cashInfo}>
      <h2 className={classes.label}>
        {label}
      </h2>
      <CustomText size="15px" weight="300">{value}</CustomText>
    </div>
  );
}

export default CashInfo;
