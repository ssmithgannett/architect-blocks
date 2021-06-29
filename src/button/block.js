const { RichText, PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { PanelBody, PanelRow } = wp.components;


// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('button/main', {
  title: 'Architect Button',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    buttonText: {
      type: 'string',
      source: 'text',
      selector: '.button_text'
    },
    buttonLink: {
      type: 'string',
      source: 'text',
      selector: '.button_link'
    }
  },
  edit({ attributes, className, setAttributes }) {

    return ([
      <InspectorControls>
        <PanelBody title={ ( 'High Contrast', 'Button Info' ) } >
          <PanelRow className="button_info">
            <p>Button text:</p>
            <PlainText
              onChange={ content => setAttributes({ buttonText: content }) }
              value={ attributes.buttonText }
              placeholder="Button Text"
              isSelected={ attributes.isSelected }
              className="button_link_edit"
            />
            <p>Button link:</p>
            <PlainText
              onChange={ content => setAttributes({ buttonLink: content }) }
              value={ attributes.buttonLink }
              placeholder="URL"
              isSelected={ attributes.isSelected }
              className="button_text_edit"
            />
            <p>Always use full URLs, including https://, even when linking to another page on this Architect site. (i.e., https://statesman.com, https://gatehousenews.com/architect2/home/site/dispatch.com)</p>

          </PanelRow>
        </PanelBody>
      </InspectorControls>,
      <div className="button_edit">
        <div className="button_text_block">{ attributes.buttonText }</div>
      </div>
    ]);

  },

  save({ attributes }) {
    let link = attributes.buttonLink;


    return (
      <div>
      <p className="arch_button"><a target="_blank" rel="noopener noreferrer" href={link}><span className="button_text">{ attributes.buttonText }</span>
      </a></p>
      <div className="button_link" style="display:none;">{attributes.buttonLink}</div>
      </div>

    );
  }
});
