import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  components: {
    Button: {
      variants: {
        "gradient-outline": {
          borderRadius: "100rem",
          boxShadow: "2px 1000px 1px #1A202C inset",
          border: "solid 5px transparent",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 100), rgba(255, 255, 255, 100)), linear-gradient(101deg, #78e4ff, #ff48fa)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          _hover: {
            borderRadius: "100rem",
            boxShadow: "2px 1000px 1px #1A202C inset",
            border: "solid 6px transparent",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 100), rgba(255, 255, 255, 100)), linear-gradient(10deg, #78e4ff, #ff48fa)",
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
          },
        },
        "purple-outline": {
          borderRadius: "100rem",
          border: "solid 2px #A663CC",
          _hover: {
            borderRadius: "100rem",
            border: "solid 4px #A663CD",
          }
        },
      },
    },
  },
});

export default theme;
