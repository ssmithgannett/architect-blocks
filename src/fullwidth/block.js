const { RichText, MediaUpload, PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, PanelRow, PanelBody, FormToggle } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('full-width-image/main', {
  title: 'Architect Full-width Image',
  icon: 'camera',
  category: 'architect-blocks',
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    },
    imageCaption: {
      type: 'text',
      selector: '.caption'
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
    toggle_credit: {
      type: 'string',
      default: 'none'
    },
    checkedCredit: {
      type: 'boolean',
      default: false
    },
    checkedCaption: {
      type: 'boolean',
      default: true
    },
    toggle_caption: {
      type: 'string',
      default: 'block'
    }
  },
  edit({ attributes, className, setAttributes }) {

    const getImageButton = (openEvent) => {
      if(attributes.imageUrl) {
        return (
          <img
            src={ attributes.imageUrl }
            onClick={ openEvent }
            className="image"
          />
        );
      }
      else {
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
        </PanelBody>
        <PanelBody title={ ( 'Photo', 'Photographer Information' ) } >
          <PanelRow>
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
      <div className="container">
        <MediaUpload
          onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url, imageCaption: media.caption }); } }
          type="image"
          value={ attributes.imageID }
          render={ ({ open }) => getImageButton(open) }
        />
        <div style={toggle_caption} className="editor_caption">{ attributes.imageCaption } <span style={toggle_credit} className="singleImage_credit"><span className="photog_edit">{ attributes.photog}</span> | <span className="pub_edit">{ attributes.publication }</span></span></div>
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

    const cardImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img
            className="card__image"
            src={ src }
            alt={ alt }
          />
        );
      }

      // No alt set, so let's hide it from screen readers
      return (
        <img
          className="card__image"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      );
    };

    return (
      <div className="fullwidth_image">
        <div>
        { cardImage(attributes.imageUrl, attributes.imageAlt) }
        </div>
        <p style={toggle_caption} className="fullwidth_caption">{ attributes.imageCaption } <span className="singleImage_credit" style={toggle_credit}><span className="singleImage_photog">{ attributes.photog }</span> | <span className="singleImage_pub">{ attributes.publication }</span></span></p>
      </div>
    );
  }
});
