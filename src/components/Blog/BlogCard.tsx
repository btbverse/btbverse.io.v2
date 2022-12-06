import { Link as ReachLink } from "react-router-dom";
import {
  Image as IMG,
  Card,
  Text,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NDBFields } from "./NotionDatabaseFields";
import Peter from "../Team/peter.svg";
import Flo from "../Team/flo.svg";
import Kai from "../Team/kai.svg";

export const BlogCard = ({
  id,
  Name,
  Description,
  Status,
  Tags,
  Image,
  Author,
  Date,
}: NDBFields) => {
  return (
    <motion.div
      style={{ zIndex: 100 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card
        variant="filled"
        background={"#171923"}
        maxW="sm"
        borderRadius={15}
        as={ReachLink}
        state={{ Name, Tags, Author, Date }}
        to={`/blog/${id}`}
        h="380px"
        zIndex={100}
      >
        <IMG
          borderRadius="15px 15px 0 0"
          maxH={"100px"}
          objectFit="cover"
          src={Image[0].url}
        />

        <CardBody>
          <Stack>
            <Heading fontWeight={300} size="md">
              {Name}
            </Heading>
            <HStack>
              {Tags
                ? Tags.map((tag) => {
                    return <Badge key={tag}>{tag}</Badge>;
                  })
                : ""}
            </HStack>
          </Stack>
          <Stack pt={2}>
            <Text fontSize={"xs"}>{truncateString(Description, 100)}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <HStack>
            <IMG w={10} src={catchImage(Author)}></IMG>
            <Text pt={5} fontWeight={150} fontSize={"1xs"}>
              {Author} • {Date}
            </Text>
          </HStack>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
function catchImage(name: string | undefined) {
  return name === "Peter"
    ? Peter
    : name === "Flo"
    ? Flo
    : name === "Kai"
    ? Kai
    : "";
}
