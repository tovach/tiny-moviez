import { FC } from 'react';
import ContentLoader from 'react-content-loader';

type SkeletonProps = {
  height: number;
  width: number;
  variant: 'primary' | 'secondary';
};

export const Skeleton: FC<SkeletonProps> = ({ height, width, variant }) => (
  <div className='animate-pulse'>
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      backgroundColor={variant === 'primary' ? '#21242d' : '#16181e'}
      foregroundColor={variant === 'primary' ? '#16181e' : '#21242d'}
    >
      <rect x='0' y='0' rx='10' ry='10' width='100%' height='100%' />
    </ContentLoader>
  </div>
);
