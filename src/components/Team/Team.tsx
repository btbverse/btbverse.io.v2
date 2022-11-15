import { Text, HStack, Image, VStack, Box, Link } from "@chakra-ui/react";
import flo from "./flo.svg";
import kai from "./kai.svg";
import peter from "./peter.svg";

type TeamProps = {
  isOpen: Boolean;
};

export const Team = ({ isOpen }: TeamProps) => {
  return (
    <Box>
      <HStack mb={10} zIndex={-1}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/fseeh/"
            rel="noreferrer"
          >
            <VStack spacing={0}>
              <Image width={"44"} src={flo} />

              <Text fontWeight={800}>Florian</Text>
              <Text fontWeight={150}>Product</Text>
            </VStack>
          </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/kai-roevenich-1a205786/"
          rel="noreferrer"
        >
          <VStack spacing={0}>
            <Image width={"44"} src={kai} />
            <Text fontWeight={800}>Kai</Text>
            <Text fontWeight={150}>Growth</Text>
          </VStack>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/peter-seeh-95a324246/"
          rel="noreferrer"
        >
          <VStack spacing={0}>
            <Image width={"44"} src={peter} />
            <Text fontWeight={800}>Peter</Text>
            <Text fontWeight={150}>Tech</Text>
          </VStack>
        </Link>
      </HStack>
    </Box>
  );
};
