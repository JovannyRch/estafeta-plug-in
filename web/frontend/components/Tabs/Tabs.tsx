import React, { useState, useEffect } from "react";
import { ActiveLine, Container, TabContainer } from "./styled-components";

interface Props {
  tabs: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
  activeTab?: string;
}

const Tabs = ({ tabs, onChange, activeTab }: Props) => {
  if (tabs.length === 0) {
    return null;
  }

  return (
    <Container>
      {tabs.map((tab) => (
        <TabContainer
          onClick={() => onChange?.(tab.value)}
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
