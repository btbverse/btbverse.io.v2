import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Box,
  Button,
  ChakraProvider,
  Link,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import theme from "./styles/theme";
import TextCard from "./components/Card/TextCard";
import { Circles } from "./components/Circles/Circles";
import { Background } from "./components/Background/Background";

export const App = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <ChakraProvider theme={theme}>
      <Box scale={10} height={"100vh"} zIndex="100">
        <Parallax pages={6}>
        <Background />
          <ParallaxLayer
            sticky={{ start: 0, end: 0.1 }}
            speed={1}
            style={{
              ...alignCenter,
              justifyContent: "center",
              zIndex: "100",
              background: "rgba(7, 7, 7, 0.6)"
            }}
          >
            <VStack>
              <Circles></Circles>
            </VStack>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 0.9, end: 1.7 }}
            speed={1}
            style={{ ...alignCenter, justifyContent: "center", zIndex: "1"}}
          >

            <VStack>
              <TextCard
                title="Merchants"
                paragraph="We want to create an NFT-based loyalty and collaboration suite for merchants that  want to strengthen their user base and align incentives for users with factors that increase customer lifeteime value for merchants"
                gradient={{ from: "#6F2DBD", to: "#A663CC " }}
              />
            </VStack>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 2, end: 2.7 }}
            speed={1}
            style={{ ...alignCenter, justifyContent: "center", zIndex: "100" }}
          >
            <TextCard
              title="Creators"
              paragraph="We strive to establish a more direct and more platform independent way for creators to  interact with their community and improve monetization"
              gradient={{ from: "#A663CC", to: "#B298DC" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 3, end: 3.5 }}
            speed={1}
            style={{ ...alignCenter, justifyContent: "center", zIndex: "100" }}
          >
            <TextCard
              title="Users"
              paragraph="Enabling next-generation collaborations between merchants and creators, we believe we can transorm how users travel through the internet and create experiences beyond our current imagination"
              gradient={{ from: "#B298DC", to: "#B8D0EB" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 4, end: 4.7 }}
            speed={1}
            style={{ ...alignCenter, justifyContent: "center", zIndex: "100" }}
          >
            <TextCard
              title="Unleash the worlds creativity"
              paragraph="We strive to become the go-to partner for merchants, creators, and any party in the internet that want to directly interact and collaborate, breaking free from the rigid, unpredictable, and centralized platforms web2 has created"
              gradient={{ from: "#B8D0EB", to: "#B9FAF8" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 5, end: 6 }}
            speed={1}
            style={{ ...alignCenter, justifyContent: "center", zIndex: "100" }}
          >
            <VStack>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Button width={"100%"} size={"lg"} variant="gradient-outline">
                join waitlist
              </Button>
              <Spacer />
              <br></br>
              <Button width={"100%"} size={"lg"} variant="purple-outline">
                meet the team
              </Button>
              <Spacer />
              <br></br>
              <Link
                target={"_blank"}
                href="https://google.de"
                mt={"800px"}
                color={"grey"}
              >
                Imprint and privacy
              </Link>
            </VStack>
          </ParallaxLayer>
        </Parallax>
      </Box>
    </ChakraProvider>
  );
};
