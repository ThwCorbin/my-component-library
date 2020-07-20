import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";

storiesOf("Thumbnail", module)
  //* Default *************** */
  .add("Product Thumbnail", () => <Thumbnail type="thumbnail" />)
  .add("Product Thumbnail Gray", () => <Thumbnail type="thumbnail" gray />)
  .add("Product Thumbnail Input", () => <Thumbnail type="thumbnail" input />)
  .add("Product Thumbnail Input Gray", () => (
    <Thumbnail type="thumbnail" input gray />
  ))
  .add("Product Thumbnail Horizontal", () => (
    <Thumbnail type="thumbnail" horizontal />
  ))
  .add("Product Thumbnail Horizontal Gray", () => (
    <Thumbnail type="thumbnail" horizontal gray />
  ))
  .add("Product Thumbnail Inline", () => <Thumbnail type="thumbnail" inline />)
  .add("Product Thumbnail Beats", () => <Thumbnail type="thumbnail" beats />);
