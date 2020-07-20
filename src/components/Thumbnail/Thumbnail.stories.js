import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";

storiesOf("Thumbnail", module)
  //* Default *************** */
  .add("Product Thumbnail", () => (
    <Thumbnail type="thumbnail" name="thumbnail" />
  ))
  .add("Product Thumbnail Gray", () => (
    <Thumbnail type="thumbnail" name="thumbnail" gray />
  ))
  .add("Product Thumbnail Input", () => (
    <Thumbnail type="thumbnail" name="thumbnail" input />
  ))
  .add("Product Thumbnail Input Gray", () => (
    <Thumbnail type="thumbnail" name="thumbnail" input gray />
  ))
  .add("Product Thumbnail Horizontal", () => (
    <Thumbnail type="thumbnail" name="thumbnail" horizontal />
  ))
  .add("Product Thumbnail Horizontal Gray", () => (
    <Thumbnail type="thumbnail" name="thumbnail" horizontal gray />
  ))
  .add("Product Thumbnail Inline", () => (
    <Thumbnail type="thumbnail" name="thumbnail" inline />
  ))
  .add("Product Thumbnail Beats", () => (
    <Thumbnail type="thumbnail" name="thumbnail" beats />
  ));
