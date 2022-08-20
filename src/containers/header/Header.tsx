import { FC, ReactElement, useMemo } from 'react';

import { HeaderWrapper } from '@components/layout';
import { Categories } from '@components/menus/horizontal/Categories';

type HeaderProps = {};

export const Header: FC<HeaderProps> = (): ReactElement => {
  const categoriesLinks = {
    main: useMemo(
      () => [
        {
          id: 1125,
          title: 'Movies',
          path: '/'
        },
        {
          id: 2215,
          title: 'TV Shows',
          path: '/'
        },
        {
          id: 1253,
          title: 'Anime',
          path: '/'
        }
      ],
      []
    )
  };

  return (
    <HeaderWrapper>
      <Categories items={categoriesLinks.main} />
    </HeaderWrapper>
  );
};
