/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
// const TooltipEntity = window.draftail.TooltipEntity;
import { FootnoteEntity } from '../blocks/FootnoteEntity';

const Footnote = (props) => {
  // const { entityKey, contentState } = props;

  return <FootnoteEntity {...props} />;
};

Footnote.propTypes = {
  entityKey: PropTypes.string.isRequired,
  contentState: PropTypes.object.isRequired,
};

export default Footnote;
