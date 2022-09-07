import { FC } from 'react';

import { PrimaryButton } from '@components/ui';
import { UserAvatar, UserMenu } from '@components/user';
import { UserBarWrapper } from '@components/wrappers';

type UserBarProps = {};

export const UserBar: FC<UserBarProps> = () => (
  <UserBarWrapper>
    <PrimaryButton icon='notifications' />
    <UserMenu />
  </UserBarWrapper>
);
