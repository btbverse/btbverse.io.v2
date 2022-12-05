import { Box, Link, HStack, Text } from "@chakra-ui/react";
import { Link as ReachLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <>
      <HStack spacing={4} bgGradient="#000000" p={3} pr={10} justify={"right"}>
        <Box>
          <Link
            fontWeight={location.pathname === "/" ? 400 : 200}
            as={ReachLink}
            to={"/"}
            fontSize={location.pathname === "/" ? 19 : 16}
          >
            Home
          </Link>
        </Box>
        <Text fontSize={19}>|</Text>
        <Box>
          <Link
            fontWeight={location.pathname.includes("/blog") ? 400 : 200}
            as={ReachLink}
            to={"/blog"}
            fontSize={location.pathname.includes("/blog") ? 19 : 16}
          >
            Blog
          </Link>
        </Box>
      </HStack>
    </>
  );
}
