import React, { useCallback, useRef, useState } from "react";

import {
  Accordion,
  AccordionSummary,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import useStyles from "./Search.styles";
import ProviderSection from "./ProviderSection";
import CategorySection from "./CategorySection";
import SearchField from "./SearchField";
import GamesSection from "./GamesSection";
import {
  getSearchedGamesStart,
  resetSearchGames,
} from "../../../../../redux-saga/redux/casino/lobby";

const Search = ({ handleSearchBox }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const offset = useRef(1);

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const makeProviderCategoryFilter = useCallback(() => {
    let filters = {};
    let providers = Object.keys(selectedProvider);
    let categories = Object.keys(selectedCategory);

    if (providers && providers?.length) {
      filters.providerId = JSON.stringify(providers);
    }
    if (categories && categories?.length) {
      filters.subCategoryId = JSON.stringify(categories);
    }
    return filters;
  }, [selectedProvider, selectedCategory]);

  const setProvider = useCallback((id, name) => {
    setSelectedProvider((current) => ({
      ...current,
      [id]: `provider,${id},${name}`,
    }));
  }, []);

  const setCategory = useCallback((id, name) => {
    setSelectedCategory((current) => ({
      ...current,
      [id]: `category,${id},${name}`,
    }));
  }, []);

  const setSearch = useCallback((searchValue) => {
    setSearchInput(searchValue);
  }, []);

  const removeSelectedItem = useCallback(
    (selectedItem) => {
      offset.current = 1;
      const [type, id] = selectedItem.split(",");
      let filters = {
        page: 1,
        limit: 12,
        search: searchInput?.length ? searchInput : null,
      };
      let providers = selectedProvider;
      let categories = selectedCategory;

      if (type === "provider") {
        delete providers[id];
        setSelectedProvider(() => ({
          ...providers,
        }));
      }
      if (type === "category") {
        delete categories[id];
        setSelectedCategory(() => ({
          ...categories,
        }));
      }

      providers = Object.keys(providers);

      categories = Object.keys(categories);

      if (!providers?.length && !categories?.length && !searchInput?.length) {
        dispatch(resetSearchGames());
        return;
      }
      if (providers && providers?.length) {
        filters.providerId = JSON.stringify(providers);
      }
      if (categories && categories?.length) {
        filters.subCategoryId = JSON.stringify(categories);
      }

      dispatch(
        getSearchedGamesStart({
          ...filters,
        })
      );
    },
    [dispatch, searchInput, selectedCategory, selectedProvider]
  );

  const getSelectedItems = () => {
    return Object.values({ ...selectedProvider, ...selectedCategory }).map(
      (selectedItem) => (
        <Grid key={`${selectedItem}`} item>
          <Chip
            className={classes.selectemItemBtn}
            onDelete={() => removeSelectedItem(selectedItem)}
            size="medium"
            variant="outlined"
            label={selectedItem.split(",")[2]}
          />
        </Grid>
      )
    );
  };

  return (
    <div className={classes.searchContainer}>
      <Grid container>
        <Grid item xs={12} lg={3} className={classes.category}>
          <Accordion
            expanded={expanded === "providers"}
            onChange={handleChange("providers")}
            className={classes.accordian}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={expanded}
            >
              <Typography>Providers</Typography>
            </AccordionSummary>
            <ProviderSection
              offset={offset}
              searchInput={searchInput}
              selectedCategory={selectedCategory}
              selectedProvider={selectedProvider}
              removeSelectedItem={removeSelectedItem}
              setProvider={setProvider}
            />
          </Accordion>
          <Accordion
            expanded={expanded === "categories"}
            onChange={handleChange("categories")}
            className={classes.accordian}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={expanded}
            >
              <Typography>Categories</Typography>
            </AccordionSummary>
            <CategorySection
              offset={offset}
              searchInput={searchInput}
              selectedCategory={selectedCategory}
              selectedProvider={selectedProvider}
              removeSelectedItem={removeSelectedItem}
              setCategory={setCategory}
            />
          </Accordion>
        </Grid>
        <Grid item xs={12} lg={9} className={classes.search}>
          <SearchField
            searchInput={searchInput}
            offset={offset}
            setSearch={setSearch}
            makeProviderCategoryFilter={makeProviderCategoryFilter}
          />
          {!!(
            Object.keys(selectedCategory).length ||
            Object.keys(selectedProvider).length
          ) && (
            <Grid spacing={2} container>
              {getSelectedItems()}
            </Grid>
          )}
          <GamesSection
            selectedCategory={selectedCategory}
            selectedProvider={selectedProvider}
            searchInput={searchInput}
            offset={offset}
            makeProviderCategoryFilter={makeProviderCategoryFilter}
            handleSearchBox={handleSearchBox}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
