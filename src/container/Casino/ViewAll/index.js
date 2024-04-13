import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
  debounce,
  Button,
  List,
  ListItem,
  Box,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import {
  useParams,
  useLocation,
  matchPath,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import ReactSelect from "react-select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import useStyles from "./ViewAll.styles";
import {
  getProvidersStart,
  getGamesStart,
  getSubCategoryStart,
} from "../../../redux-saga/redux/casino/lobby";
import Game from "../Game";
import { formatCategoryName } from "../../../utils/helper";
import Provider from "../../Casino/Provider";
import LiveTable from "../../../components/LiveTable";
import { sidebarListItems } from "../../../components/PageLayout/constants";

const ViewAll = () => {
  const { pathname } = useLocation();
  const isAllgame = matchPath("/all-games/*", pathname || "zlehods");
  const navigate = useNavigate();
  const classes = useStyles();
  // const initialLoad = useRef(0);
  const params = useParams();
  const dispatch = useDispatch();
  const { provider, category, name } = params;
  const [searchInput, setSearchInput] = useState("");
  const { subCategory, providers } = useSelector((state) => state.casinoLobby);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProvider, setSelectedProvider] = useState({
    value: 0,
    label: "Providers",
  });
  useEffect(() => {
    setSearchInput("");
    setSelectedCategory("");
    setSelectedProvider({
      value: 0,
      label: "Providers",
    });
  }, [pathname]);

  const { darkMode } = useSelector((state) => state.themeSettings);
  const [selectedSort, setSelectedSort] = useState(0);
  const [providerList, setProviderList] = useState([]);
  const [gameListProgress, setGameListProgress] = useState(0);
  const offset = useRef(1);
  const { games, loading, gamesCount, moreGamesLoading } = useSelector(
    (state) => state.casinoLobby
  );

  useEffect(() => {
    if (games?.length != 0 && gamesCount) {
      const progress = (games?.length / gamesCount) * 100;
      setGameListProgress(progress);
    }
  }, [games]);

  const handleChangeSearch = (event) => {
    setSearchInput(event.target.value);
    searchGames(event.target.value);
  };

  useEffect(() => {
    if (providers?.length !== 0) {
      setProviderList(
        providers?.map((s) => {
          return {
            label: s.name,
            value: s.masterCasinoProviderId,
          };
        })
      );
    }
  }, [providers]);
  const handleChangeCategory = ({ catId, name }) => {
    setSelectedCategory("");
    setSearchInput("");
    setSelectedSort(0);
    setSelectedProvider({ value: 0, label: "Providers" });
    navigate(`/view-all/false/${catId}/${name}`);
  };

  const handleChangeProvider = (value) => {
    offset.current = 1;
    setSelectedProvider(value);
    getGames({
      searchValue: searchInput,
      providerId: value?.value,
      popular: selectedSort,
    });
  };
  useEffect(() => {
    if (params?.category) setSelectedCategory(Number(category));
    if (params?.provider !== "false" && params?.provider)
      setSelectedProvider({ value: Number(provider), label: name });
  }, [params]);

  const handleChangeSort = (e) => {
    setSelectedSort(e?.target?.value);
    getGames({ searchValue: searchInput, popular: e?.target?.value });
  };

  useEffect(() => {
    dispatch(getProvidersStart());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSubCategoryStart());
    let payload = {
      providerId: provider !== "false" ? provider : null,
      subCategoryId: category !== "false" ? category : null,
      limit: 18,
      pageNumber: 1,
      popular: selectedSort,
    };
    if (isAllgame) {
      payload.allGame = true;
    }
    dispatch(getGamesStart(payload));
  }, [dispatch, provider, category]);

  const getGames = ({
    searchValue,
    popular,
    loadMoreGames,
    categoryId,
    providerId,
  }) => {
    let filters = {
      providerId: null,
      subCategoryId: null,
      limit: 18,
      pageNumber: 1,
      loadMoreGames,
      popular,
    };
    if (isAllgame) {
      filters.allGame = true;
    }
    if (searchValue !== null) {
      filters.search = searchValue || null;
      filters.providerId = selectedProvider?.value || null;
    }

    if (
      (provider !== "false" && provider) ||
      selectedProvider?.value ||
      selectedProvider?.value !== 0 ||
      providerId
    ) {
      if (!providerId) filters.providerId = selectedProvider?.value;
      else filters.providerId = providerId;
    }
    if (category !== "false" || selectedCategory || categoryId) {
      if (!categoryId) filters.subCategoryId = selectedCategory;
      else {
        filters.subCategoryId = categoryId;
      }
    }
    if (loadMoreGames) {
      filters.search = searchInput || null;
      filters.pageNumber = offset.current;
    }
    if (!loadMoreGames) {
      filters.search = searchValue || null;
    }
    dispatch(getGamesStart({ ...filters }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchGames = useCallback(
    debounce((searchValue) => {
      getGames({ searchValue, popular: selectedSort });
      offset.current = 1;
    }, 500),
    [selectedProvider, selectedSort, selectedCategory]
  );

  const resetAll = () => {
    setSelectedProvider({ value: 0, label: "Providers" });
    setSearchInput("");
    setSelectedSort(0);
    let payload = {
      providerId: provider !== "false" ? provider : null,
      subCategoryId: category !== "false" ? category : null,
      limit: 18,
      pageNumber: 1,
      popular: selectedSort,
    };
    if (isAllgame) {
      payload.allGame = true;
    }
    dispatch(getGamesStart(payload));
  };
  const handleMoreGames = () => {
    offset.current += 1;
    getGames({ loadMoreGames: true });
  };
  const LeftButton = () => {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return (
      <Button className={classes.leftArrow} onClick={() => scrollPrev()}>
        <KeyboardArrowLeftTwoToneIcon />
      </Button>
    );
  };

  const RightButton = () => {
    const { scrollNext } = React.useContext(VisibilityContext);
    return (
      <Button className={classes.rightArrow} onClick={() => scrollNext()}>
        <NavigateNextTwoToneIcon />
      </Button>
    );
  };

  return (
    <div>
      <Grid className={classes.contentWrap}>
        <Grid className={`position-relative allGameList ${classes.gameList}`}>
          <List>
            <ScrollMenu
              LeftArrow={true && LeftButton}
              RightArrow={true && RightButton}
              wrapperClassName="horizontalScrollWrapper"
            >
              <ListItem
                key={"val"}
                onClick={() => {
                  navigate("/all-games");
                }}
                className={isAllgame ? classes.active : ""}
              >
                <img
                  src={"/images/All Games.svg"}
                  alt="Casino icon"
                  style={{ width: "20px" }}
                />
                <span>All Games</span>
              </ListItem>
              {subCategory?.length > 0 &&
                subCategory.map((item, val) => {
                  const inde = (val + 2) % 7;
                  return (
                    <ListItem
                      key={val}
                      onClick={() =>
                        handleChangeCategory({
                          catId: item.tenantGameSubCategoryId,
                          name: item.name,
                        })
                      }
                      className={
                        item.tenantGameSubCategoryId === selectedCategory
                          ? classes.active
                          : ""
                      }
                    >
                      {item.iconName ? (
                        <img
                          src={item?.iconName}
                          alt="Casino icon"
                          style={{ width: "20px" }}
                        />
                      ) : (
                        <img
                          src={
                            darkMode
                              ? sidebarListItems?.[inde + 2]?.listIconDark
                              : sidebarListItems?.[inde + 2]?.listIconLight
                          }
                          alt="Casino icon"
                        />
                      )}
                      {item.id}
                      <span>{formatCategoryName(item.name)}</span>
                    </ListItem>
                  );
                })}
            </ScrollMenu>
          </List>
        </Grid>

        <Grid className={classes.innerHeading}>
          <Grid className={classes.innerHeadingLeft}>
            <Grid className={classes.filterSection}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedSort}
                className={classes.selectTab}
                variant="outlined"
                label="Sort"
                onChange={handleChangeSort}
                IconComponent={ExpandMoreIcon}
                MenuProps={{
                  className: classes.signupCountryList,
                }}
              >
                <MenuItem value={0}> All</MenuItem>
                {[{ id: 1, name: "Popular" }]?.length > 0 &&
                  [{ id: 1, name: "Popular" }].map((item) => (
                    <MenuItem
                      key={item.name}
                      value={item.id}
                      name={item.name}
                      MenuProps={{
                        className: classes.signupCountryList,
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
              <Box className={`${classes.filterText} ${classes.sortText}`}>
                <img src="/images/sort.svg" alt="sort" />
                <span>Sort by</span>
              </Box>
            </Grid>

            <Grid className={classes.filterSection}>
              <ReactSelect
                className="basic-single"
                classNamePrefix="select"
                defaultValue={{ value: 0, label: "Providers" }}
                value={selectedProvider}
                onChange={(e) => {
                  handleChangeProvider(e);
                }}
                closeMenuOnSelect={true}
                isSearchable={true}
                name="color"
                options={providerList}
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    borderRadius: "15px",
                    marginTop: "-1px",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    borderRadius: "15px", // Set the radius for the items
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: darkMode ? "#fff" : "#202228",
                  }),
                  menuList: (s) => ({
                    ...s,
                    background: !darkMode && "white",
                    borderRadius: "15px",
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: "15px",
                  colors: {
                    ...theme.colors,
                    neutral0: darkMode ? "#2B2B38" : "#f7df94",
                    primary25: "rgba(123, 98, 218, 0.16)",
                    neutral80: "#fff",
                  },
                })}
              />

              <Box className={classes.filterText}>
                <img src="/images/filter.svg" alt="filter" />
                <span>Filter by</span>
              </Box>
            </Grid>
          </Grid>

          <Grid className={classes.resetSearch}>
            <Grid className={classes.homeFilter}>
              <TextField
                autoComplete="off"
                autoCorrect="off"
                id="search"
                className={classes.searchInput}
                type="text"
                variant="outlined"
                value={searchInput}
                onChange={handleChangeSearch}
                placeholder="Search for Games"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src="/images/search.svg" alt="search" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Button className={classes.resetBtn} onClick={resetAll}>
              Reset
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className={`${classes.gamesWrapper} ${classes.ViewAllGame}`}
        >
          {loading ? (
            <Typography className={classes.circulerLoader}>
              <CircularProgress size={50} />
            </Typography>
          ) : games?.length > 0 ? (
            games.map((game, index) => (
              <Game
                key={`${game.masterCasinoGameId}${index}`}
                thumbnailUrl={game.thumbnailUrl}
                name={game.name}
                gameId={game.masterCasinoGameId}
                categoryName={game.MasterGameSubCategory?.name}
                providerName={game.MasterCasinoProvider?.name}
                isFavorite={!!game.isFavorite}
              />
            ))
          ) : (
            <h1 className={classes.noGamesMsg}>No Games Found</h1>
          )}
        </Grid>
        <Grid container textAlign="center" justifyContent="center">
          {!moreGamesLoading && !loading && gamesCount > games?.length && (
            <Grid className={classes.loadMoreBar}>
              <Grid className={classes.ShowMoreBar}>
                <Box className={classes.more}>
                  <LinearProgress
                    thickness={6}
                    value={gameListProgress}
                    variant="determinate"
                    className={classes.headerLinearBar}
                  />
                </Box>
                <p>
                  Displaying {games?.length} of {gamesCount}
                </p>
              </Grid>

              <Button
                onClick={() => handleMoreGames()}
                className={`${classes.btnPrimary} ${classes.loadMoreButton}`}
              >
                Show More
              </Button>
            </Grid>
          )}
          {moreGamesLoading && (
            <Typography>
              <CircularProgress className={classes.moreGamesLoader} size={50} />
            </Typography>
          )}
        </Grid>

        <Grid>
          <Provider />
        </Grid>

        <Grid>
          <LiveTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewAll;
