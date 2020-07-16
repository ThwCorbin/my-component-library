import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button type="primary" label="Primary" />)
  .add("Primary Hover", () => (
    <Button type="primary" hover label="Primary Hover" />
  ))
  .add("Primary Outline", () => (
    <Button type="primary" outline label="Primary Outline" />
  ))
  .add("Danger", () => <Button type="danger" label="Danger" />)
  .add("Success", () => <Button type="success" label="Success" />)
  .add("Warning", () => <Button type="warning" label="Warning" />)
  .add("Large Primary", () => (
    <Button type="primary" large label="Large Primary Button" />
  ))
  .add("Small Primary", () => (
    <Button type="primary" small icons="heart" label="Small Primary Button" />
  ));
