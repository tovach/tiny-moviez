import React, { FC, ReactElement, useMemo } from 'react';

import { Logo } from '@components/common';
import { NavigationWrapper } from '@components/layout';
import { Navigation } from '@components/menus';

type LeftProps = {};

export const Left: FC<LeftProps> = (): ReactElement => {
  const navLinks = {
    menu: useMemo(
      () => [
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
      ],
      []
    ),
    library: useMemo(
      () => [
        {
          id: 5,
          icon: 'update',
          title: 'Recent',
          path: '/'
        },
        {
          id: 6,
          icon: 'star',
          title: 'Top Rated',
          path: '/'
        },
        {
          id: 7,
          icon: 'file_download',
          title: 'Downloaded',
          path: '/'
        },
        {
          id: 8,
          icon: 'favorite',
          title: 'Playlists',
          path: '/'
        },
        {
          id: 9,
          icon: 'library_add',
          title: 'Watchlist',
          path: '/'
        },
        {
          id: 10,
          icon: 'library_add_check',
          title: 'Completed',
          path: '/'
        }
      ],
      []
    ),
    general: useMemo(
      () => [
        {
          id: 11,
          icon: 'settings',
          title: 'Setting',
          path: '/'
        },
        {
          id: 12,
          icon: 'logout',
          title: 'Logout',
          path: '/'
        }
      ],
      []
    )
  };
  return (
    <NavigationWrapper>
      <Logo />
      <Navigation heading='Menu' items={navLinks.menu} />
      <Navigation heading='Library' items={navLinks.library} />
      <Navigation heading='General' items={navLinks.general} />
    </NavigationWrapper>
  );
};
