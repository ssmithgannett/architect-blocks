const {
  RichText,
} = wp.editor;

const {
  registerBlockType
} = wp.blocks;

const {
  Button,
  Tooltip,
  PanelBody,
  PanelRow,
  FormToggle
} = wp.components

import {
  withState
} from '@wordpress/compose';

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('intro-outro/main', {
  title: 'Architect Intro/Outro',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    text: {
      type: 'string',
      source: 'html',
      selector: '.intro-outro'
    }
  },
  edit(props) {
    const {
      attributes,
      className,
      setAttributes,
      focus
    } = props;

    return (



      <div className="arch_intro-outro-edit">

        <RichText
          onChange={ content => setAttributes({ text: content }) }
          value={ attributes.text }
          tagName="p"
          placeholder="Intro/outro text"
          className="arch_intro-outro"
          multiline="p"
        />

      </div>

    );
  },

  save(props) {
    const {attributes, className } = props;







    return (
      <RichText.Content
                tagName="div"
                className="intro-outro"
                value={ attributes.text }
            />


    );
  }
});
