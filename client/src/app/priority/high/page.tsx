import React from "react";
import ReusablePriorityPAge from "../reusablePriorityPAge";
import { Priority } from "@/state/api";

const Urgent = () => {
  return <ReusablePriorityPAge priority={Priority.High} />;
};

export default Urgent;