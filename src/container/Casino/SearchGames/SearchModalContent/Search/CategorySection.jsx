import React, { useEffect, useRef } from "react";

import { AccordionDetails, Chip, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { formatCategoryName } from "../../../../../utils/helper";
import useStyles from "./Sections.styles";
import {
  getSearchedGamesStart,
  getSubCategoryStart,
} from "../../../../../redux-saga/redux/casino/lobby";

const CategorySection = ({
  offset,
  searchInput,
  selectedCategory,
  selectedProvider,
  removeSelectedItem,
  setCategory,
}) => {
  const classes = useStyles();
  const { subCategory } = useSelector((state) => state.casinoLobby);
  const dispatch = useDispatch();
  const rendered = useRef(0);
  const handleCategory = (id, name) => {
    offset.current = 1;
    if (selectedCategory[id]) {
      removeSelectedItem(`category,${id}`);
      return;
    }
    setCategory(id, name);
    let filters = {
      page: 1,
      limit: 12,
      search: searchInput?.length ? searchInput : null,
    };
    filters.subCategoryId = JSON.stringify([
      ...Object.keys(selectedCategory),
      `${id}`,
    ]);
    let providers = Object.keys(selectedProvider);
    if (providers?.length > 0) {
      filters.providerId = JSON.stringify(providers);
    }
    dispatch(
      getSearchedGamesStart({
        ...filters,
      })
    );
  };

  useEffect(() => {
    if (subCategory?.length === 0 && !rendered.current) {
      dispatch(getSubCategoryStart());
      rendered.current = 1;
    }
  }, [subCategory, dispatch]);
  return (
    <>
      <AccordionDetails className={classes.accordiondetails}>
        <Grid className={classes.chipcontainer}>
          {subCategory?.length > 0
            ? subCategory.map((item) => (
                <Chip
                  color={
                    selectedCategory[item.masterGameSubCategoryId]
                      ? "primary"
                      : "default"
                  }
                  label={formatCategoryName(item.name)}
                  key={`${item.masterGameSubCategoryId}-${item.providerId}`}
                  clickable
                  onClick={() =>
                    handleCategory(
                      item.masterGameSubCategoryId,
                      formatCategoryName(item.name)
                    )
                  }
                />
              ))
            : null}
        </Grid>
      </AccordionDetails>
    </>
  );
};

export default CategorySection;
