import {
  VStack,
  Box,
  Link,
  Spinner,
  Heading,
  Spacer,
  HStack,
  Text,
  Badge,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import axios from "axios";
// core styles shared by all of react-notion-x (required)
import "./styles.css";
import defaultRecordMap from "./record-map.json";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";
import { Link as ReachLink, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

type AppProps = {
  blog_id: string;
};

export const Blog = ({ blog_id }: AppProps) => {
  const [blogPost, setBlogPost] = useState<ExtendedRecordMap>(defaultRecordMap);
  const [isLoading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const page_api = "https://notion-api.splitbee.io/v1/page/";
  const recordMap = defaultRecordMap as unknown as ExtendedRecordMap;
  const location = useLocation();

  useEffect(() => {
    setTags(location.state?.Tags);
    setLoading(true);
    axios
      .get(page_api + blog_id)
      .then(function (response) {
        blogPost.block = response.data;
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box w={100} ml={5}>
        <Link as={ReachLink} to="/blog" onClick={() => setBlogPost(recordMap)}>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <HStack>
              <ChevronLeftIcon fontSize={45} />{" "}
            </HStack>
          </motion.div>
        </Link>
      </Box>
      <VStack>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
        >
          Blogpost
        </Heading>
        <HStack>
          {tags?.map((tag) => {
            return <Badge key={tag}>{tag}</Badge>;
          })}
          <Spacer />
          <Text fontWeight={200}>
            {location.state?.Author}
            {!tags ? (
              <Badge mt={3} fontSize={15}>
                P R E V I E W
              </Badge>
            ) : (
              "•"
            )}
            {location.state?.Date}
          </Text>
        </HStack>

        <Spacer p={2} />
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
          <Box zIndex={100} w={{ base: "340px", md: "600px", lg: "800px" }}>
            {blogPost ? (
              <NotionRenderer
                fullPage={true}
                darkMode={true}
                recordMap={blogPost}
                components={{
                  Code,
                  Collection,
                  Equation,
                  Modal,
                  Pdf,
                }}
                disableHeader={true}
              />
            ) : (
              ""
            )}
          </Box>
        )}
      </VStack>
    </>
  );
};
