import { Box, Spacer, Text, VStack } from "@chakra-ui/react";

type TextBoxProps = {
  title: string;
  paragraph: string;
  gradient: { from: string; to: string };
};

export default function TextBox({ title, paragraph, gradient }: TextBoxProps) {
  return (
    <>
      <VStack>
        <Text
          lineHeight={'110%'}
          align={'center'}
          bgGradient={`linear-gradient(180deg, ${gradient.from} 0%, ${gradient.to} 100%)`}
          bgClip="text"
          fontSize="5xl"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Spacer></Spacer>
        <Box width={"320px"}>
          <Text align={"center"}>{paragraph}</Text>
        </Box>
      </VStack>
    </>
  );
}
