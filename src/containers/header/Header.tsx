import { FC, ReactElement, useMemo } from 'react';

import { Categories } from '@components/menus/horizontal/Categories';
import { IconButton, SearchForm, TextInput } from '@components/ui';
import { HeaderWrapper } from '@components/wrappers';

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
      <SearchForm>
        <IconButton type='submit'>search</IconButton>
        <TextInput placeholder='Search' />
        <IconButton type='button'>filter_alt</IconButton>
      </SearchForm>
    </HeaderWrapper>
  );
};
