import React from "react";
import { storiesOf } from "@storybook/react";
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
  )); // stories of Input
