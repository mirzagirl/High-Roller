const getLightTheme = (primaryColor, secondaryColor) => {
  return {
    palette: {
      primary: {
        main: "#7b62da",
        color: "#fff",
        live: "",
      },
      secondry: {
        main: "#5C6BC0",
      },
      action: {},
      background: {
        default: "#E6E6E6",
        default2: "#E6E6E6",
        sidebar: "#F3F1EA",
        tablebackground: "#F3F1EA",
        tablerow: " rgba(188, 188, 199, 0.12)",
        buttonbackground:
          "radial-gradient(201.67% 201.67% at 50% -31.67%, #AAA8FF 0%, #B477F1 100%)",
        btnbackground:
          "radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%)",
        btntextBackground:
          "radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24))",
        chatbtncolor:
          "radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%)",
        providers: "#EEEEEE",
        tabel: "#BCBCC71F",
        buttonWallet: "#E6E6E6",
        profileModal: "#E6E6E6",
        footer: "#C1BAAE1F",
        promotionIcon: "#E6E6E6",
        footerCurrencyChip: "#E3E3E3",
        sidebarList: "#E6E6E6",
        seeAll: "#434548",
        colorbutton: "#A8B1FF",
        highlightSocialApp:
          "radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24))",
        signUp:
          "radial-gradient(201.67% 201.67% at 50% -31.67%, #AAA8FF 0%, #B477F1 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))",
        sidebarHighlight:
          "radial-gradient(201.67% 201.67% at 50% -31.67%, #AAA8FF 0%, #B477F1 100%)",
        sidebarHighlightBorder: " 1.4px solid rgba(106, 113, 199, 0.84)",
        toggleBorder: "1.4px solid rgba(255, 255, 255, 0.12)",
        toggleBackground:
          " radial-gradient(201.67% 201.67% at 50% -31.67%, #AAA8FF 0%, #B477F1 100%)",
        toggleShadow: "0px 4px 12px 2px rgba(193, 182, 255, 0.44)",
        divider: "#DEDEDE",
        socialIconBorder: "1.4px solid rgba(255, 255, 255, 0.24)",
        cryprosectionBorder: "2px solid #D4D4D4",
        withdrawBtn:
          "radial-gradient(118.18% 118.18% at 50% 0%, #90F1C2 0%, #5ED99E 100%)",
        balanceBg:
          "radial-gradient(201.67% 201.67% at 50% -31.67%, #AAA8FF 0%, #B477F1 100%)",
        balanceBgShadow: "0px 4px 12px 2px rgba(193, 182, 255, 0.44)",
        balanceBOrder: "1.4px solid rgba(255, 255, 255, 0.12)",

        iframeBg: "#F3F1EA",
        iframeBorder: "2px solid rgba(255, 255, 255, 0.24)",
        iframeShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",

        iframeIconBg:
          "radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%);",
        iframeIconShadow: " inset 0px 2px 12px rgba(255, 255, 255, 0.02)",

        barBg: "rgba(193, 186, 174, 0.12)",

        barBgProcessBg:
          " radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #F3D37E 0.01%, #FEF6C0 100%)",
        barBgProcessShadow: "0px 4px 12px 2px rgba(253, 244, 190, 0.44)",

        chatMessageBg: "rgba(250, 250, 250, 0.44)",
        chatMessageShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",

        chatTagBg: "#BCBCC7",
        chatTagBorder: "1px solid #BCBCC7",
        chatTagShadow: "inset 0px 4px 4px rgba(255, 255, 255, 0.04)",

        qrCodeBg: " #E6E6E6",
        qrCodeBorder: "2px solid rgba(255, 255, 255, 0.04)",
        qrCodeShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",

        doneBtnBg:
          "radial-gradient(201.67% 201.67% at 50% -31.67%, #AAA8FF 0%, #B477F1 100%)",

        referralBg: "#EEEEEE",
        referralShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
        referralSocialBg:
          "radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%)",
        referralSocialBorder: "1.4px solid rgba(255, 255, 255, 0.24)",
        referralSocialShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
        referralInput: "inset 0px 2px 8px rgba(156, 149, 138, 0.12)",

        mobiTableBg: "#F3F1EA",
        mobiTableShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
        mobiTableOddBg: "rgba(188, 188, 199, 0.12)",

        inputBorder: "1.4px solid #F3F1EA",

        gameTopBorder: "2px solid rgba(255,  255,  255,  0.44)",

        hoverBg: "rgba(238, 238, 238, 0.44)",

        userImgBorder: "rgba(255, 255, 255, 0.12)",
        tablegrediant:
          "linear-gradient(rgba(26, 29, 41, 0) 0%, rgb(230, 230, 230) 75%)",
        bannerIcon:
          "radial-gradient(136.54% 136.54% at 50.00% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%)",
        proColor: "#959ADF",

        innerBar:
          "radial-gradient(136.54% 136.54% at 50.00% -36.54%, #FFFDDC 0%, #F3D37E 0.01%, #FEF6C0 100%)",

        overlapBg:
          "linear-gradient(270deg, #F3F1EA 0%, rgba(23, 13, 28, 0.00) 100%)",

        filterbg: "#fff",
      },
      text: {
        default: "#202228",
        color: "#7B808F",
        iconColor: "#7B808F",
        sidebar: "#7B808F;",
        fliterbtnhover:
          "radial-gradient(136.54% 136.54% at 50% -36.54%, #FFFDDC 0%, #FEF6C0 0.01%, #F3D37E 100%);",
        sideBarListColor: "#7B808F",
        placeholder: "#434548",
        textcolor: "#757786",
        txtcolor: "#202228",
        btntextcolor: "#434548",
        buttoncolor: "#434548",
        filterbtn: "#94979F",
        referralText: "#ffffff",

        mobiTableText_1: "#7B808F",
        mobiTableText_2: "#202228",

        languageBg: "#fff",
        languageSelect: "#f5f3fc",
      },
      image: {
        opacity: 0.5,
      },
      table: {},
    },
    overrides: {
      MuiCssBaseline: {},
      MuiList: {},
      MuiTab: {},
      MuiContainer: {},
      MuiTableCell: {},
    },
    typography: {
      fontFamily: "Jost !important",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 991,
        lg: 1200,
        xl: 1536,
      },
    },
  };
};

export default getLightTheme;
