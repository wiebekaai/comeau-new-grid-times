import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, WEIGHTS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <SuperHeaderLogo />
          <SubscribeContainer>
            <Button>
              Subscribe
            </Button>
            <Link href="/">Already a subscriber?</Link>
          </SubscribeContainer>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: none;
    color: var(--color-gray-900);
    margin-bottom: 48px;
  }
`;

const SuperHeaderLogo = styled(Logo)`
  display: none;
  color: var(--color-offblack);
  --font-size: ${64/16}rem;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const SubscribeContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items:center;
  gap: 8px;
  justify-content: center;
  align-self: flex-end;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const Link = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16}rem;
  line-height: 1.5;
  font-style: italic;
  text-decoration: underline;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  &:last-of-type {
    @media ${QUERIES.laptopAndUp} {
      display: none;
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

export default Header;
