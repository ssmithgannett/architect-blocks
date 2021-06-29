const { RichText, PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { PanelBody, PanelRow } = wp.components;


// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('subscribe/main', {
  title: 'Architect Subscribe',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    subText: {
      type: 'string',
      source: 'text',
      selector: '.sub_text'
    },
    subLink: {
      type: 'string',
      source: 'text',
      selector: '.sub_link'
    },
    subPub: {
      type: 'string',
      source: 'text',
      selector: '.sub_pub'
    }
  },
  edit({ attributes, className, setAttributes }) {

    return ([
      <InspectorControls>
        <PanelBody title={ ( 'High Contrast', 'Subscription Block Content' ) } >
          <PanelRow className="sub_info">
            <p>Subscription Copy</p>
            <PlainText
              onChange={ content => setAttributes({ subText: content }) }
              value={ attributes.subText }
              placeholder="Copy"
              isSelected={ attributes.isSelected }
              className="sub_text_edit"
            />
          </PanelRow>
          <PanelRow className="sub_info">
            <p>Subscription Link</p>
            <p>Always use full URLs, including https://, even when linking to another page on this Architect site. (i.e., https://statesman.com, https://gatehousenews.com/architect2/home/site/dispatch.com)</p>
            <PlainText
              onChange={ content => setAttributes({ subLink: content }) }
              value={ attributes.subLink }
              placeholder="URL"
              isSelected={ attributes.isSelected }
              className="sub_link_edit"
            />
          </PanelRow>
          <PanelRow className="sub_info">
            <p>Publication Name</p>
            <PlainText
              onChange={ content => setAttributes({ subPub: content }) }
              value={ attributes.subPub }
              placeholder="Publication"
              isSelected={ attributes.isSelected }
              className="sub_pub_edit"
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,
      <div className="sub_edit">
        <hr />
        <div className="sub_text_block">{ attributes.subText }</div>
        <div className="sub_interact_block"><span className="sub_button">Subscribe</span> to <span className="sub_pub_block"></span>{ attributes.subPub }.</div>
        <hr />
      </div>
    ]);

  },

  save({ attributes }) {
    let link = attributes.subLink;


    return (
      <div className="sub_block">
      <hr />
      <div className="sub_text">{attributes.subText}</div>
      <p className="arch_sub"><a target="_blank" rel="noopener noreferrer" href={link}>Subscribe</a> to  <span className="sub_pub">{ attributes.subPub }</span>.</p>
      <div className="sub_link" style="display:none;">{attributes.subLink}</div>
      <hr />
      </div>

    );
  }
});
