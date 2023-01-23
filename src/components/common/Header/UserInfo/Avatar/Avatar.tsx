import React, {FC} from 'react';

import DefaultAvatar from "./DefaultAvatar/DefaultAvatar";

interface AvatarProps {
    userName: string | undefined
    url?: string
    alt?: string
}

const Avatar: FC<AvatarProps> = (props) => {
    return <DefaultAvatar />
};

export default Avatar;