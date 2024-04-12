import { Box, styled } from "@mui/material";
import { Children, cloneElement, useCallback } from "react";
import Tabs, { TabContextProvider, TabPanel } from "src/Components/Tabs";
import Drawer from "../Drawer";
import { TabDrawerProps } from "./TabDrawer.types";

const TabsWrapper = styled(Box)(() => ({
  flexShrink: 0,
}));

const TabPanelWrapper = styled(Box)(() => ({
  padding: "16px",
  height: "100%",
  width: "100%",
  flexGrow: 1,
  overflow: "auto",
}));

const TabDrawer = ({ children, sx, ...rest }: TabDrawerProps) => {
  const getChildByDisplayName = useCallback((children, displayName) => {
    const child = Children.map(children, (child: any) => {
      if (child.type.displayName === displayName) {
        return child;
      }
      return null;
    });
    return child;
  }, []);

  const renderChildren = useCallback(() => {
    const [tabContextProvider] = getChildByDisplayName(
      children,
      TabContextProvider.displayName
    );
    const tabs = getChildByDisplayName(
      tabContextProvider?.props?.children,
      Tabs.displayName
    );
    const tabPanels = getChildByDisplayName(
      tabContextProvider?.props?.children,
      TabPanel.displayName
    );
    if (tabContextProvider) {
      return cloneElement(tabContextProvider, {
        ...tabContextProvider?.props,
        children: (
          <>
            <TabsWrapper className="TabDrawer__tabs-wrapper">
              {tabs}
            </TabsWrapper>
            <TabPanelWrapper className="TabDrawer__tab-panel-wrapper">
              {tabPanels}
            </TabPanelWrapper>
          </>
        ),
      });
    }
    return children;
  }, [getChildByDisplayName]);

  return (
    <Drawer
      {...rest}
      sx={{
        ...sx,
        ".Drawer__body": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
        },
      }}
    >
      {renderChildren()}
    </Drawer>
  );
};

TabDrawer.defaultProps = {
  ...Drawer.defaultProps,
} as Partial<TabDrawerProps>;

export default TabDrawer;
