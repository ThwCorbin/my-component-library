import React from "react";
import { storiesOf } from "@storybook/react";
import Menu from "./Menu";

storiesOf("Menu", module)
  .add("Select", () => (
    <Menu name="Select" options="Option1, Option2, Option3, Option4" />
  ))
  .add("Select Medium", () => (
    <Menu name="Select" medium options="Option1, Option2, Option3, Option4" />
  ))
  .add("Select Large", () => (
    <Menu name="Select" large options="Option1, Option2, Option3, Option4" />
  ))
  .add("Select Filled", () => (
    <Menu name="Select" filled options="Option1, Option2, Option3, Option4" />
  ))
  .add("Select Medium Filled", () => (
    <Menu
      name="Select"
      medium
      filled
      options="Option1, Option2, Option3, Option4"
    />
  ))
  .add("Select Large Filled", () => (
    <Menu
      name="Select"
      large
      filled
      options="Option1, Option2, Option3, Option4"
    />
  )); // stories of Menu
