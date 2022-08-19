import React, { FC } from 'react';
import { Navigation } from '@components/menus';
import {Container} from "@components/layout";

type LeftProps = {};

export const Left: FC<LeftProps> = (): JSX.Element => {
  const links = [
    {
      id: 1,
      icon: 'home',
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      icon: 'explore',
      title: 'Discover',
      path: '/'
    },
    {
      id: 3,
      icon: 'emoji_events',
      title: 'Awards',
      path: '/'
    },
    {
      id: 4,
      icon: 'verified',
      title: 'Celebrities',
      path: '/'
    }
  ];
  return (
    <Container>
      <Navigation heading='Menu' items={links} />
      <Navigation heading='Menu' items={links} />
    </Container>
  );
};
