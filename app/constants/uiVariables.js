/**
 * UIVariables
 *
 * Examples:
 * UIVariables.Header.Height
 * UIVariables.Padding.Small
 * UIVariables.Margin.Normal
 *
 * @module app/constants
 */

const Header = Object.freeze({
  Height: 60,
});

const Spacing = Object.freeze({
  Small: 5,
  Normal: 10,
  Large: 20,
});

const UIVariables = Object.freeze({
  Header: Object.freeze({ ...Header }),
  Padding: Object.freeze({ ...Spacing }),
  Margin: Object.freeze({ ...Spacing }),
});

export { UIVariables as default };
