import { style } from "@vanilla-extract/css";
import { dp } from "styles/dp";
import { color } from "styles/vars/color.css";
import { layouts } from "styles/vars/layouts.css";

export const postListFrame = style({
  paddingInline: layouts.full,
  paddingBottom: dp(40),
  paddingTop: dp(12),
  maxWidth: layouts.width,
  marginInline: "auto",
});

export const viewLink = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const postLinkFrame = style({
  width: "100%",
  paddingBlock: dp(3),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  listStyleType: "none",
  borderBottom: `1px solid ${color.background_opacity95}`,
  color: color.text,
  "@media": {
    "(hover: hover) and (pointer: fine)": {
      ":hover": {
        color: color.accent,
      },
    },
  },
});

export const postLinkInner = style({
  display: "inline-flex",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid transparent",
});

const postLinkTitleBase = style({
  fontSize: dp(4.25),
  fontFamily: '"Mona Sans", "Pretendard", monospace',
  fontWeight: 400,
  lineHeight: 1,
  color: "inherit",
});

export const postLinkTitle = style([
  postLinkTitleBase,
  {
    display: "inline-block",
    color: "inherit",
  },
]);
