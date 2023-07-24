import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={palette.success.main} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={dark}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/pepsi.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Drinks</Typography>
        <Typography color={medium}>pepsi.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Happy Holidays from Pepsi. Thats What I Like.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
