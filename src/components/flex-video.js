import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames } from '../utils';

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const FlexVideo = props => {
  const className = createClassName(
    props.className || 'flex-video',
    {
      widescreen: props.isWidescreen,
      vimeo: props.isVimeo
    },
    generalClassNames(props)
  );

  return (
    <div {...props} className={className} />
  );
};

FlexVideo.propTypes = {
  isWidescreen: PropTypes.bool,
  isVimeo: PropTypes.bool,
  ...GeneralPropTypes
};
