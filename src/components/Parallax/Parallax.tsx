import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  VStack,
  Icon,
  Button,
  Spacer,
  Collapse,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import TextCard from "../Card/TextCard";
import { Circles } from "../Circles/Circles";
import { Team } from "../Team/Team";
import { Terms } from "../Terms";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxContent() {
  const alignCenter = { display: "flex", alignItems: "center" };
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box scale={10} height={"80vh"} zIndex="100">
      <Parallax pages={6}>
        <ParallaxLayer
          sticky={{ start: 0, end: 0.1 }}
          speed={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
            zIndex: "100",
          }}
        >
          <VStack>
            <Circles></Circles>
            <motion.div
              animate={{ y: [20, -5, 20] }}
              transition={{
                ease: "linear",
                bounce: 100,
                duration: 1,
                repeat: Infinity,
              }}
            >
              <Icon as={ChevronDownIcon} boxSize={12} color="white" />
            </motion.div>
          </VStack>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 1.7 }}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center", zIndex: "1" }}
        >
          <VStack>
            <TextCard
              title="Merchants"
              paragraph="We want to create an NFT-based loyalty and collaboration suite for merchants that want to strengthen their user base and align incentives for users with factors that increase their customer lifetime value"
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
            paragraph="We strive to establish a more direct and more platform independent way for creators to interact with their community and improve monetization"
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
            paragraph="Enabling next-generation collaborations between merchants and creators, we believe we can transform how users travel through the internet and create experiences beyond our current imagination"
            gradient={{ from: "#B298DC", to: "#B8D0EB" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4, end: 4.7 }}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center", zIndex: "100" }}
        >
          <TextCard
            title="Unleash the world's creativity"
            paragraph="We strive to become the go-to partner for merchants, creators, and any party on the internet that wants to directly interact and collaborate, breaking free from the rigid, unpredictable, and centralized platforms web2 has created"
            gradient={{ from: "#B8D0EB", to: "#B9FAF8" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 5, end: 6 }}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center", zIndex: "100" }}
        >
          <VStack mt={80}>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.gle/1qwGQJmV6vbRFHxg7"
            >
              <Button width={"200px"} size={"lg"} variant="gradient-outline">
                join waitlist
              </Button>
            </motion.a>
            <Spacer />
            <br></br>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button
                width={"200px"}
                onClick={onToggle}
                size={"lg"}
                variant="purple-outline"
              >
                meet the team
              </Button>
            </motion.div>
            <Collapse in={isOpen} animateOpacity>
              <Team isOpen={isOpen} />
            </Collapse>
            <Spacer />
            <br></br>
            <Terms></Terms>
          </VStack>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}
