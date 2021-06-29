
const { RichText, MediaUpload, PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, PanelRow, PanelBody, FormToggle } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('single-image/main', {
  title: 'Architect Single Image',
  icon: 'camera',
  category: 'architect-blocks',
  attributes: {
    image1Alt: {
      attribute: 'alt',
      selector: '.singleImage1'
    },
    image1Url: {
      attribute: 'src',
      selector: '.singleImage1'
    },
    image1Caption: {
      type: 'text',
      selector: '.singleImage_caption'
    },
    photog: {
      type: 'array',
      source: 'children',
      selector: '.singleImage_photog'
    },
    publication: {
      type: 'array',
      source: 'children',
      selector: '.singleImage_pub'
    },
    toggle_caption: {
      type: 'string',
      default: 'block'
    },
    checkedCaption: {
      type: 'boolean',
      default: true
    },
    toggle_credit: {
      type: 'string',
      default: 'none'
    },
    checkedCredit: {
      type: 'boolean',
      default: false
    }
  },
  edit({ attributes, className, setAttributes }) {

    const getImageButton1 = (openEvent) => {
      if(attributes.image1Url) {
        return (
          <img
            src={ attributes.image1Url }
            onClick={ openEvent }
            className="image1"
          />
        );
      } else {
        return (
          <div className="button-container">
            <Button
              onClick={ openEvent }
              className="button button-large"
            >
              Pick an image
            </Button>
          </div>
        );
      }
    };

    var checkedCaption = attributes.checkedCaption;
    function toggleCaption() {
      if (checkedCaption == false) {
        setAttributes(
          {
            checkedCaption: true,
            toggle_caption: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCaption: false,
            toggle_caption: 'none'
          }
        )
      }
    }

    var toggle_caption = {
      display: attributes.toggle_caption
    }

    var checkedCredit = attributes.checkedCredit;
    function toggleCredit() {
      if (checkedCredit == false) {
        setAttributes(
          {
            checkedCredit: true,
            toggle_credit: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCredit: false,
            toggle_credit: 'none'
          }
        )
      }
    }

    var toggle_credit = {
      display: attributes.toggle_credit
    }


    return ([
      <InspectorControls>
      <PanelBody title={('High Contrast', 'Caption Settings')}>
          <PanelRow className="caption-settings">
            <p className="inspector-title">Toggle Entire Caption</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCaption }
                onChange={ toggleCaption }
            />
            <p className="inspector-title">Toggle Image Credit Only</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCredit }
                onChange={ toggleCredit }
            />
          </PanelRow>
          <PanelRow className="caption-settings">
            <PlainText
              onChange={ content => setAttributes({ photog: content }) }
              value={ attributes.photog }
              placeholder="Photographer Name"
              isSelected={ attributes.isSelected }
              className="singleImage_photog_edit"
            />
          </PanelRow>
          <PanelRow>
            <PlainText
              onChange={ content => setAttributes({ publication: content }) }
              value={ attributes.publication }
              placeholder="Publication Name"
              className="singleImage_pub_edit"
              isSelected={ attributes.isSelected }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,
      <div className="singleImage_container">
        <div>
          <MediaUpload
            onSelect={ media1 => { setAttributes({ image1Alt: media1.alt, image1Url: media1.url, image1Caption: media1.caption }); } }
            type="image"
            value={ attributes.image1ID }
            render={ ({ open }) => getImageButton1(open) }
          />
          <div style={toggle_caption} className="editor_caption">{ attributes.image1Caption } <span style={toggle_credit} className="singleImage_credit"><span className="photog_edit">{ attributes.photog}</span> | <span className="pub_edit">{ attributes.publication }</span></span></div>
        </div>
      </div>
    ]);

  },

  save({ attributes }) {


    var toggle_caption = {
      display: attributes.toggle_caption
    }
    var toggle_credit = {
      display: attributes.toggle_credit
    }

    const singleImageImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img
            className="singleImage"
            src={ src }
            alt={ alt }
          />
        );
      }

      // No alt set, so let's hide it from screen readers
      return (
        <img
          className="singleImage"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      );
    };

    return (
      <div className="singleImage_wrap">
        <div className="image1">
          { singleImageImage(attributes.image1Url, attributes.image1Alt) }
          <p style={toggle_caption} className="singleImage_caption">{ attributes.image1Caption } <span className="singleImage_credit" style={toggle_credit}><span className="singleImage_photog">{ attributes.photog }</span> | <span className="singleImage_pub">{ attributes.publication }</span></span></p>
        </div>
      </div>
    );
  }
});
