import * as React from 'react';

import { IMedia } from '@App/types/media';

const MediaItem: React.FC<IMedia> = ({ title, children, content, image }) => {
  return (
    <li className="media mb-4">
      <img width="64" height="64" src={image} className="mr-3" alt={title} />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{title}</h5>
        {children || content}
      </div>
    </li>
  );
};

interface IOwnProps {
  children?: React.ReactNode;
}

type TMedia = React.FC<IOwnProps> & {
  Item: typeof MediaItem;
};

const Media: TMedia = ({ children }: IOwnProps) => {
  return <ul className="list-unstyled">{children}</ul>;
};

Media.Item = MediaItem;

export default Media;
