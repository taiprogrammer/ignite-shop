import { styled } from "@/styles";

export const SuccessContainer = styled("main", {
  height: 656,
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    maxWidth: 560,
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    lineHeight: 1.4,

    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",

    fontSize: "$lg",
    color: "$green500",
    fontWeight: "bold",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  height: 145,
  width: "100%",
  maxWidth: 130,
  borderRadius: 8,
  padding: "0.25rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginTop: "4rem",

  img: {
    objectFit: "cover",
  },
});
