const { InspectorControls, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { PanelBody, PanelRow } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('section-anchor/main', {
  title: 'Architect Section Anchor',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    anchor: {
      source: 'attribute',
      selector: '.section-anchor',
      type: 'string',
      attribute: 'id'
    },
  },
  edit({ attributes, className, setAttributes }) {

    return ([
      <InspectorControls>
        <PanelBody title={ ( 'High Contrast', 'Section Anchor Settings' ) } >
          <PanelRow className="caption-settings">
            <p className="inspector-doc">Enter an anchor value here to link to on the page. (Must not contain spaces, special characters other than hyphens or start with a numeral).
            <br />
            (This text will only show in the editor)
            </p>
            <PlainText
              onChange={ content => setAttributes({ anchor: content }) }
              value={ attributes.anchor }
              placeholder="Section name (one word)"
              className="photog_edit"
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,

      <div className="section-anchor">
        <div>
          { attributes.anchor }
        </div>
      </div>
    ]);
  },

  save({ attributes }) {

    return (
      <div className="section-anchor" id={ attributes.anchor }></div>
    );
  }
});
