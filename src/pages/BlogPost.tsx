import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../components/Blog/Blog";
import Header from "../components/Header/Header";

export default function BlogPost() {
  let { id } = useParams();

  return (
    <>
      <Header />
      {id ? (
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
          <Blog blog_id={id} />
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}
