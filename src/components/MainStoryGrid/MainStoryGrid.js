import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryListItem key={story.id}>
              <SecondaryStory {...story} />
            </StoryListItem>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <StoryListItem key={story.id}>
              <OpinionStory {...story} />
            </StoryListItem>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px 32px;
  margin-bottom: 48px;

  --border: 1px solid var(--color-gray-300);
  --spacing: 16px;

  @media ${QUERIES.tabletAndUp} {
    gap: 48px 0;
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
      'main-story secondary-stories'
      'opinion-stories opinion-stories'
      'advertisement advertisement'
    ;

    > *:first-of-type {
      border-right: var(--border);
      padding-right: var(--spacing);
      margin-right: var(--spacing);
    }
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement'
    ;
    gap: 0;

    > *:nth-of-type(2) {
      border-right: var(--border);
      padding-right: var(--spacing);
    }

    > *:nth-of-type(3) {
      padding-left: var(--spacing);
    }

    > *:last-of-type {
      border-top: var(--border);
      padding-top: var(--spacing);
      margin-top: var(--spacing);
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoryListItem = styled.div`
--spacing: 16px;

&:not(:last-of-type) {
  border-bottom: 1px solid var(--color-gray-300);
  padding-bottom: var(--spacing);
}

&:not(:first-of-type) {
  padding-top: var(--spacing);
}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
