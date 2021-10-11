import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchWrapper>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <StyledButton as={UnstyledButton}>
          <Icon id="shopping-bag" strokeWidth={1} />
        </StyledButton>
      </SearchWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: center;
  padding: 8px 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  overflow: hidden;
`;

const SearchWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 27px;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  align-self: center;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  align-self: center;
`;

export default SuperHeader;
