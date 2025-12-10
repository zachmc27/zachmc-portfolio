import React from 'react';
import { Spinner, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

/**
 * Loading component displayed while lazy routes are loading
 */
const PageLoader = () => {
  return (
    <Box
      className="page-loader lazy-route-loading"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      width="100%"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Spinner
          size="xl"
          color="var(--theme-color)"
          thickness="4px"
          speed="0.65s"
          mb={4}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Text 
          fontSize="lg" 
          color="var(--skills)"
          fontWeight="500"
        >
          Loading...
        </Text>
      </motion.div>
    </Box>
  );
};

export default PageLoader;
