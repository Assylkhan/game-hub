import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Game } from "../entities/Game";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      {/* <VStack align={"start"} paddingY={2}> */}
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
