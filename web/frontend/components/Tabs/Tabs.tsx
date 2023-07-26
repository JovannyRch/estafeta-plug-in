import React, { useState, useEffect } from "react";
import { ActiveLine, Container, TabContainer } from "./styled-components";

interface Props {
  tabs: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
}

const Tabs = ({ tabs, onChange }: Props) => {
  const [activeTab, setActiveTab] = useState(() =>
    tabs.length > 0 ? tabs[0].value : ""
  );

  useEffect(() => {
    onChange?.(activeTab);
  }, [activeTab]);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <Container>
      {tabs.map((tab) => (
        <TabContainer
          onClick={() => setActiveTab(tab.value)}
          key={tab.value}
          className={tab.value === activeTab ? "active" : ""}
        >
          <span>{tab.label}</span>
          {tab.value === activeTab && <ActiveLine />}
        </TabContainer>
      ))}
    </Container>
  );
};

export default Tabs;
