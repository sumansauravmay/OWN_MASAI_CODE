import React from "react";
import {Button,Select,ButtonGroup} from "@chakra-ui/react";
const Pagination = ({onClick}) => {
  // TODO: Remove below const and instead import them from chakra
 

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>onClick(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>onClick(-1)}>Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">1</option>
        <option data-cy="pagination-limit-6">2</option>
        <option data-cy="pagination-limit-9">3</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>onclick(1)}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>onclick(-1)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
