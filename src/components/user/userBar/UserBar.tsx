import {FC} from 'react';
import {UserBarWrapper} from "@components/wrappers";
import {PrimaryButton} from "@components/ui";
import {UserAvatar, UserMenu} from "@components/user";

type UserBarProps = {}

export const UserBar: FC<UserBarProps> = () => (
        <UserBarWrapper>
            <PrimaryButton icon='notifications'/>
            <UserMenu/>
        </UserBarWrapper>
);
