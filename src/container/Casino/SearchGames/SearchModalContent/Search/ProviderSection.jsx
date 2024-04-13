import React, { useEffect, useRef } from "react";

import { AccordionDetails, Chip, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./Sections.styles";
import {
  getProvidersStart,
  getSearchedGamesStart,
} from "../../../../../redux-saga/redux/casino/lobby";
const ProviderSection = ({
  offset,
  searchInput,
  selectedCategory,
  selectedProvider,
  removeSelectedItem,
  setProvider,
}) => {
  const classes = useStyles();
  const { providers } = useSelector((state) => state.casinoLobby);
  const dispatch = useDispatch();
  const rendered = useRef(0);
  const handleProvider = (id, name) => {
    offset.current = 1;
    if (selectedProvider[id]) {
      removeSelectedItem(`provider,${id}`);
      return;
    }
    setProvider(id, name);
    let filters = {
      page: 1,
      limit: 12,
      search: searchInput?.length ? searchInput : null,
    };
    filters.providerId = JSON.stringify([
      ...Object.keys(selectedProvider),
      `${id}`,
    ]);
    let categories = Object.keys(selectedCategory);
    if (categories?.length > 0) {
      filters.subCategoryId = JSON.stringify(categories);
    }
    dispatch(
      getSearchedGamesStart({
        ...filters,
      })
    );
  };
  useEffect(() => {
    if (providers?.length === 0 && !rendered.current) {
      dispatch(getProvidersStart());
      rendered.current = 1;
    }
  }, [providers, dispatch]);
  return (
    <>
      <AccordionDetails className={classes.accordiondetails}>
        <Grid className={classes.chipcontainer}>
          {providers?.length > 0
            ? providers.map((item) => {
                return (
                  <Chip
                    color={
                      selectedProvider[item.masterCasinoProviderId]
                        ? "primary"
                        : "default"
                    }
                    label={item.name}
                    key={item.providerId}
                    clickable
                    onClick={() =>
                      handleProvider(item.masterCasinoProviderId, item.name)
                    }
                  />
                );
              })
            : null}
        </Grid>
      </AccordionDetails>
    </>
  );
};

export default ProviderSection;
