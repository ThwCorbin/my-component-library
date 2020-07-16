import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Default", () => <Button label="Do something" />)
  .add("Default Hover", () => <Button hover label="Do something" />)
  .add("Default Outline", () => <Button outline label="Do something" />)
  .add("Default Haze", () => <Button haze label="Do something" />)
  .add("Default Large", () => <Button large label="Do something" />)
  .add("Default Large Outline", () => (
    <Button large outline label="Do something" />
  ))
  .add("Default Large Haze", () => <Button large haze label="Do something" />)
  .add("Default Small", () => <Button small label="Do something" />)
  .add("Default Small Outline", () => (
    <Button small outline label="Do something" />
  ))
  .add("Default Small Haze", () => <Button small haze label="Do something" />)

  .add("Primary", () => <Button type="primary" label="Do something" />)
  .add("Primary Hover", () => (
    <Button type="primary" hover label="Do something" />
  ))
  .add("Primary Outline", () => (
    <Button type="primary" outline label="Do something" />
  ))
  .add("Primary Haze", () => (
    <Button type="primary" haze label="Do something" />
  ))
  .add("Primary Large", () => (
    <Button type="primary" large label="Do something" />
  ))
  .add("Primary Large Outline", () => (
    <Button type="primary" large outline label="Do something" />
  ))
  .add("Primary Large Haze", () => (
    <Button type="primary" large haze label="Do something" />
  ))
  .add("Primary Small", () => (
    <Button type="primary" small label="Do something" />
  ))
  .add("Primary Small Outline", () => (
    <Button type="primary" small outline label="Do something" />
  ))

  .add("Primary Small Haze", () => (
    <Button type="primary" small haze label="Do something" />
  ))

  .add("Danger", () => <Button type="danger" label="Do something" />)
  .add("Success", () => <Button type="success" label="Do something" />)
  .add("Warning", () => <Button type="warning" label="Do something" />);

//   icons="heart"
