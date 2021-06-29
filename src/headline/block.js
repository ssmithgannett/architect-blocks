const {
  RichText,
  InspectorControls,
  MediaUpload,
  PlainText,
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

registerBlockType('headline/main', {
  title: 'Architect Headline',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    title: {
      source: 'text',
      selector: '.headline_title'
    },
    intro: {
      type: 'array',
      source: 'children',
      selector: '.headline_body'
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

      <div className="headline_edit">

        <PlainText
          onChange={ content => setAttributes({ title: content }) }
          value={ attributes.title }
          placeholder="headline"
          className="headline2_enter"
        />
        <PlainText
          onChange={ content => setAttributes({ intro: content }) }
          value={ attributes.intro }
          placeholder="intro text"
          className="intro2_enter"
        />
      </div>

    );
  },

  save(props) {
    const {attributes, className } = props;
    const { checked } = props.attributes;
    const { headlinePos } = props.attributes;

    return (
      <div className="headline">
        <h3 className="headline_title">{ attributes.title }</h3>
        <p className="headline_body">{ attributes. intro }</p>
      </div>
    );
  }
});
