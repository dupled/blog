import * as React from 'react';
import moment from 'moment';
import _isEmpty from 'lodash/isEmpty';

interface IOwnProps {
  title?: string;
  image?: string;
  content?: string;
  date?: Date;
}

const Card: React.FC<IOwnProps> = ({ title, image, content, date }) => (
  <div className="card">
    <img src={image} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
    </div>
    {_isEmpty(date) === false && (
      <div className="card-footer text-muted">
        {moment(date).format('l LT')}
      </div>
    )}
  </div>
);

export default Card;
