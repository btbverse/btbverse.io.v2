/* eslint-disable array-callback-return */
import { SearchIcon } from "@chakra-ui/icons";
import {
  VStack,
  Heading,
  Text,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spinner,
  HStack,
  Badge,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogCard } from "../components/Blog/BlogCard";
import { NDBFields } from "../components/Blog/NotionDatabaseFields";
import Header from "../components/Header/Header";
import { motion } from "framer-motion";

export default function BlogList() {
  const [blogList, setBlogList] = useState<NDBFields[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [tags] = useState<string[]>([]);
  const [activeTag, setActiveTag] = useState<string>("");
  const table_api =
    "https://notion-api.splitbee.io/v1/table/fd0f07374a844060ac307576bdeb500b";

  useEffect(() => {
    setLoading(true);
    axios
      .get(table_api, { params: { limit: 1 } })
      .then((response) => {
        const entries: NDBFields[] = response.data;
        setBlogList(entries);
        setTagslist(entries);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          type: "spring",
          duration: 0.3,
          repeat: 0,
        }}
      >
        <VStack p={5} spacing={5}>
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
          >
            Blog
          </Heading>
          {isLoading ? (
            <Spinner size="md" />
          ) : (
            <>
              {length(blogList) > 0 ? (
                <Text align={"center"} fontWeight={200} fontSize={"xl"}>
                  A collection of {length(blogList)} posts
                </Text>
              ) : (
                <Text fontWeight={400} fontSize={"2xl"}>
                  Come back later.
                </Text>
              )}

              {length(blogList) > 1 ? (
                <HStack>
                  {tags.map((tag: string) => {
                    return (
                      <Badge
                        as={motion.div}
                        onClick={() => {
                          handleTags(tag);
                        }}
                        fontSize={14}
                        key={tag}
                        colorScheme={activeTag === tag ? "pink" : "gray"}
                        variant={activeTag === tag ? "solid" : "outline"}
                        cursor={"pointer"}
                        userSelect={"none"}
                        whileHover={{ color: "white" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </HStack>
              ) : null}
            </>
          )}

          <InputGroup hidden={length(blogList) === 0} maxW={"300px"}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              onChange={(e) => setSearch(e.target.value)}
              size={"md"}
              type="search"
              placeholder="Search ..."
            />
          </InputGroup>
          {isLoading ? (
            <Spinner size="xl" />
          ) : (
            <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={10}>
              {renderContent()?.map((item) => {
                if (
                  item.Name.match(new RegExp(search, "i")) ||
                  item.Description.match(new RegExp(search, "i"))
                ) {
                  return (
                    <Box hidden={item.Status === "hidden"}>
                      <BlogCard
                        id={item.id}
                        Name={item.Name}
                        Description={item.Description}
                        Status={item.Status}
                        Tags={item.Tags}
                        Image={item.Image}
                        Author={item.Author}
                        Date={item.Date}
                      />
                    </Box>
                  );
                }
              })}
            </SimpleGrid>
          )}
          <Spacer pb={5} />
        </VStack>
      </motion.div>
    </>
  );

  function handleTags(tag: string) {
    if (tag !== activeTag) {
      setActiveTag(tag);
    } else {
      setActiveTag("");
    }
  }

  function length(bloglist: NDBFields[]) {
    return bloglist.filter((item) => item.Status === "visible").length;
  }

  function setTagslist(bloglist: NDBFields[]) {
    return bloglist.forEach((item: NDBFields) => {
      if (item.Status === "visible") {
        item.Tags?.forEach((tag: string) => {
          if (tags.indexOf(tag) === -1) {
            tags.push(tag);
          }
        });
      }
    });
  }

  function renderContent() {
    const data = blogList;
    if (activeTag) {
      return data.filter((item) => item.Tags?.includes(activeTag));
    } else if (activeTag === "") {
      return blogList;
    }
  }
}
