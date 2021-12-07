import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from 'react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Spinner = () => {
  const [loading] = useState(true);
  const [color] = useState('#ffffff');

  return (
    <div className="sweet-loading">
      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
};
