import React from "react";
import { storiesOf } from "@storybook/react";
// For "action" see https://dev.to/tducasse/how-to-use-storybook-with-react-10g1
// And see https://github.com/storybookjs/storybook/tree/master/addons/actions
import { action } from "@storybook/addon-actions";
import Input from "./Input";

storiesOf("Input", module)
  .add("Email", () => (
    <Input
      id="form-email"
      type="email"
      name="email"
      label="Email"
      placeholder="Email"
    />
  ))
  .add("Email No Label", () => (
    <Input id="form-email" type="email" name="email" placeholder="Email" />
  ))
  .add("Email No Placeholder", () => (
    <Input id="form-email" type="email" name="email" label="Email" />
  ))
  .add("Email No Label No Placeholder", () => (
    <Input id="form-email" type="email" name="email" />
  ))
  .add("Email Medium", () => (
    <Input
      id="form-email"
      type="email"
      name="email"
      medium
      label="Email"
      placeholder="Email"
    />
  ))
  .add("Email Large", () => (
    <Input
      id="form-email"
      type="email"
      name="email"
      large
      label="Email"
      placeholder="Email"
    />
  ))
  .add("Text Button", () => (
    <Input
      id="form-text"
      type="text"
      name="text"
      placeholder="Voucher code"
      buttonText="Redeem"
    />
  ))
  .add("Text Button Large", () => (
    <Input
      id="form-text"
      type="text"
      name="text"
      large
      placeholder="Voucher code"
      buttonText="Redeem"
    />
  ))
  .add("Number Counter", () => (
    <Input
      id="input-number-counter"
      type="number"
      name="input-number-counter"
      min="0"
      max="100"
      step="1"
      value="0"
      // onClick={action("Clicked Input")}
    />
  ))
  .add("Checkbox", () => (
    <Input id="form-checkbox" type="checkbox" name="checkbox" />
  ))
  .add("Checkbox Checked", () => (
    <Input id="form-checkbox" type="checkbox" name="checkbox" checked />
  ))
  .add("Checkbox Color", () => (
    <Input id="form-checkbox" type="checkbox" name="checkbox" color />
  ))
  .add("Checkbox Checked Color", () => (
    <Input id="form-checkbox" type="checkbox" name="checkbox" checked color />
  ))
  .add("Checkbox Checked Label", () => (
    <Input
      id="form-checkbox"
      type="checkbox"
      name="checkbox"
      checked
      label="Don't show again"
    />
  )); // stories of Input
