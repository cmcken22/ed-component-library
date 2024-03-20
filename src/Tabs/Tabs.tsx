import { Box, Tabs as MuiTabs, Tab, useTheme } from "@mui/material";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Typography } from "..";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const initialState: any = {
  data: [],
  setExternalFilter: () => {},
  clearExternalFilters: () => {},
  toggleFilterDrawer: () => {},
  externalFiltersDefinition: [],
  filters: {},
  preventSave: false,
  activefilterCount: 0,
};

const TabContext = createContext(initialState);

const Panel = ({ label, children }: any) => {
  const { tabMap, tabValue } = useContext(TabContext);

  return (
    <TabPanel value={tabValue} index={tabMap?.[label]}>
      {children}
    </TabPanel>
  );
};
Panel.displayName = "TabPanel";

const Tabs = ({
  tabs,
  tabMap,
  defaultTabValue,
  onTabValueChange,
  children,
  sx,
}: any) => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(defaultTabValue);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent | undefined, newValue: number) => {
      if (onTabValueChange) onTabValueChange(newValue);
      setTabValue(newValue);
    },
    [setTabValue, onTabValueChange]
  );

  console.log("tabMap", tabMap);
  console.log("tabValue", tabValue);

  return (
    <TabContext.Provider
      value={{
        tabMap,
        tabValue,
      }}
    >
      <Box
        sx={{
          flex: "0 1 auto",
          // [theme.breakpoints.up('lg')]: {
          //   top: `${APP_BAR_DESKTOP}px`,
          // },
          ...sx,
        }}
      >
        <Box
          sx={{
            // height: "49px",
            width: "100%",
            borderBottom: "1px solid",
            borderColor: theme.palette.charcoal[10],
            // paddingLeft: "10px",
            // background: "rgb(249, 250, 251)",/\
          }}
          className="tab-wrapper"
        >
          <MuiTabs
            className="__TEST__1"
            value={tabValue}
            onChange={handleChangeTab}
            sx={{
              pl: "16px",
            }}
          >
            {tabs?.map((tab: any, idx: number) => (
              <Tab
                className="__TEST__2"
                key={tab?.label}
                {...a11yProps(idx)}
                label={
                  <Box
                    className="Tab__label"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // height: "100%",
                    }}
                  >
                    <Typography
                      variant="bodyXS"
                      // @ts-ignore
                      fontWeight={tabValue === idx ? "bold" : "normal"}
                    >
                      {tab?.label}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </MuiTabs>
        </Box>
        {/* <Box className="tab-content-wrapper" sx={{ padding: "24px" }}> */}
        {children}
        {/* </Box> */}
      </Box>
    </TabContext.Provider>
  );
};

const TabController = ({ children, persistTabs, sx }: any) => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [tabMap, setTabMap] = useState<any>({});
  const [tabValue, setTabValue] = useState<number | null>(0);

  useEffect(() => {
    if (children) {
      if (Array.isArray(children)) {
        const panels = children?.filter(
          (child: any) => child?.type?.displayName === "TabPanel"
        );
        const tabs: any[] = [];
        const tabMap: any = {};
        panels?.forEach((panel: any, idx: number) => {
          tabMap[panel?.props?.label] = idx;
          tabs.push({
            label: panel?.props?.label,
            toolTip: panel?.props?.toolTip,
            index: idx,
          });
        });
        setTabs(tabs);
        setTabMap(tabMap);
        setTabValue(0);
        return;
      }
    }
  }, [children, setTabs, setTabValue, persistTabs]);

  // const handleChangeTab = useCallback(
  //   (value: number) => {
  //     if (!persistTabs) return;
  //     const params = new URLSearchParams();
  //     params.set("tab", Object.keys(tabMap)[value]);
  //     setSearchParams(params);
  //   },
  //   [tabMap, setSearchParams, persistTabs]
  // );

  // if (tabValue === null) return null;

  return (
    <Tabs
      tabs={tabs}
      tabMap={tabMap}
      defaultTabValue={tabValue}
      // onTabValueChange={handleChangeTab}
      sx={sx}
    >
      {children}
    </Tabs>
  );
};

TabController.Panel = Panel;

export default TabController;
