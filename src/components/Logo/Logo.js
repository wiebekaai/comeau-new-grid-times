import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';

const Logo = ( props) => {
  return (
    <Wrapper {...props}>
      <Link href="/">
        New Grid Times
      </Link>
      <TodaysDate>
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --font-size: 3rem;
  text-align: center;
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: var(--font-size);
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;
`;

export default Logo;
