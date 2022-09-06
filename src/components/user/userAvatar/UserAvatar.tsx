import {FC} from 'react';

type UserAvatarProps = {
    image: string;
}

export const UserAvatar: FC<UserAvatarProps> = ({image}) => (
    <div>
        <img src={image} alt=""/>
    </div>
);
