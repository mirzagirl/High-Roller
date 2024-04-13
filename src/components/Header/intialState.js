export const accountMenuInitialState = {
  openMyProfile: false,
  openTransactions: false,
  openMyBets: false,
  openChangePassword: false,
};

export const headerList = [
  {
    name: "All Games",
    to: "/all-games",
  },
  {
    name: "Refer a Friend",
    to: "/refer-friend",
  },
  {
    name: "Leaderboard",
    to: "/",
  },
];

export const intialHeaderState = [
  { isOpen: false },
  { isOpen: false },
  { isOpen: false },
  { isOpen: false },
];
