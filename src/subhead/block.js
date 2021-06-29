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

registerBlockType('subhead/main', {
  title: 'Architect Subhead',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    title: {
      source: 'text',
      selector: '.arch_subhead'
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



      <div className="arch_subhead_edit">

        <PlainText
          onChange={ content => setAttributes({ title: content }) }
          value={ attributes.title }
          placeholder="Subhead"
          className="arch_subhead"
        />

      </div>

    );
  },

  save(props) {
    const {attributes, className } = props;
    const { checked } = props.attributes;
    const { headlinePos } = props.attributes;






    return (
      <div className="subhead">
        <h4 className="arch_subhead">{ attributes.title }</h4>
      </div>
    );
  }
});
