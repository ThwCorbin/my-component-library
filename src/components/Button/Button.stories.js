import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  //* Default *************** */
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
  //* Primary *************** */
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
  //* Danger *************** */
  .add("Danger", () => <Button type="danger" label="Do something" />)
  .add("Danger Hover", () => (
    <Button type="danger" hover label="Do something" />
  ))
  .add("Danger Outline", () => (
    <Button type="danger" outline label="Do something" />
  ))
  .add("Danger Haze", () => <Button type="danger" haze label="Do something" />)
  .add("Danger Large", () => (
    <Button type="danger" large label="Do something" />
  ))
  .add("Danger Large Outline", () => (
    <Button type="danger" large outline label="Do something" />
  ))
  .add("Danger Large Haze", () => (
    <Button type="danger" large haze label="Do something" />
  ))
  .add("Danger Small", () => (
    <Button type="danger" small label="Do something" />
  ))
  .add("Danger Small Outline", () => (
    <Button type="danger" small outline label="Do something" />
  ))
  .add("Danger Small Haze", () => (
    <Button type="danger" small haze label="Do something" />
  ))
  //* Success *************** */
  .add("Success", () => <Button type="success" label="Do something" />)
  .add("Success Hover", () => (
    <Button type="success" hover label="Do something" />
  ))
  .add("Success Outline", () => (
    <Button type="success" outline label="Do something" />
  ))
  .add("Success Haze", () => (
    <Button type="success" haze label="Do something" />
  ))
  .add("Success Large", () => (
    <Button type="success" large label="Do something" />
  ))
  .add("Success Large Outline", () => (
    <Button type="success" large outline label="Do something" />
  ))
  .add("Success Large Haze", () => (
    <Button type="success" large haze label="Do something" />
  ))
  .add("Success Small", () => (
    <Button type="success" small label="Do something" />
  ))
  .add("Success Small Outline", () => (
    <Button type="success" small outline label="Do something" />
  ))
  .add("Success Small Haze", () => (
    <Button type="success" small haze label="Do something" />
  ))
  //* Warning *************** */
  .add("Warning", () => <Button type="warning" label="Do something" />)
  .add("Warning Hover", () => (
    <Button type="warning" hover label="Do something" />
  ))
  .add("Warning Outline", () => (
    <Button type="warning" outline label="Do something" />
  ))
  .add("Warning Haze", () => (
    <Button type="warning" haze label="Do something" />
  ))
  .add("Warning Large", () => (
    <Button type="warning" large label="Do something" />
  ))
  .add("Warning Large Outline", () => (
    <Button type="warning" large outline label="Do something" />
  ))
  .add("Warning Large Haze", () => (
    <Button type="warning" large haze label="Do something" />
  ))
  .add("Warning Small", () => (
    <Button type="warning" small label="Do something" />
  ))
  .add("Warning Small Outline", () => (
    <Button type="warning" small outline label="Do something" />
  ))
  .add("Warning Small Haze", () => (
    <Button type="warning" small haze label="Do something" />
  ))
  //* User Input *************** */
  .add("Add to Cart", () => (
    <Button type="user-input" rectangle icon="cart" label="Add to Cart" />
  ))
  .add("Add to Favs", () => (
    <Button type="user-input" rectangle icon="heart" label="Add to Favorites" />
  ))
  .add("Add to Cart Square", () => (
    <Button type="user-input" square icon="cart" />
  ))
  .add("Add to Favs Square", () => (
    <Button type="user-input" square icon="heart" />
  )); // storiesOf "Button"
