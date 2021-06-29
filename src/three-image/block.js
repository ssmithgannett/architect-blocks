
const { RichText, MediaUpload, PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, PanelBody, PanelRow, FormToggle } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('three-image/main', {
  title: 'Architect Three-image collage',
  icon: 'camera',
  category: 'architect-blocks',
  attributes: {
    image1Alt: {
      attribute: 'alt',
      selector: '.collage1'
    },
    image1Url: {
      attribute: 'src',
      selector: '.collage1'
    },
    image1Caption: {
      type: 'text',
      selector: '.collage1'
    },
    image2Alt: {
      attribute: 'alt',
      selector: '.collage2'
    },
    image2Url: {
      attribute: 'src',
      selector: '.collage2'
    },
    image2Caption: {
      type: 'text',
      selector: '.collage2'
    },
    image3Alt: {
      attribute: 'alt',
      selector: '.collage3'
    },
    image3Url: {
      attribute: 'src',
      selector: '.collage3'
    },
    image3Caption: {
      type: 'text',
      selector: '.collage3'
    },
    image1Photog: {
      type: 'array',
      source: 'children',
      selector: '.image1_photog'
    },
    image1Pub: {
      type: 'array',
      source: 'children',
      selector: '.image1_pub'
    },
    image2Photog: {
      type: 'array',
      source: 'children',
      selector: '.image2_photog'
    },
    image2Pub: {
      type: 'array',
      source: 'children',
      selector: '.image2_pub'
    },
    image3Photog: {
      type: 'array',
      source: 'children',
      selector: '.image3_photog'
    },
    image3Pub: {
      type: 'array',
      source: 'children',
      selector: '.image3_pub'
    },
    toggle_caption1: {
      type: 'string',
      default: 'block'
    },
    checkedCaption1: {
      type: 'boolean',
      default: true
    },
    toggle_credit1: {
      type: 'string',
      default: 'none'
    },
    checkedCredit1: {
      type: 'boolean',
      default: false
    },
    toggle_caption2: {
      type: 'string',
      default: 'block'
    },
    checkedCaption2: {
      type: 'boolean',
      default: true
    },
    toggle_credit2: {
      type: 'string',
      default: 'none'
    },
    checkedCredit2: {
      type: 'boolean',
      default: false
    },
    toggle_caption3: {
      type: 'string',
      default: 'block'
    },
    checkedCaption3: {
      type: 'boolean',
      default: true
    },
    toggle_credit3: {
      type: 'string',
      default: 'none'
    },
    checkedCredit3: {
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

    const getImageButton2 = (openEvent) => {
    if (attributes.image2Url) {
        return (
          <img
            src={ attributes.image2Url }
            onClick={ openEvent }
            className="image2"
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

    const getImageButton3 = (openEvent) => {
    if (attributes.image3Url) {
        return (
          <img
            src={ attributes.image3Url }
            onClick={ openEvent }
            className="image3"
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

    var checkedCaption1 = attributes.checkedCaption1;
    function toggleCaption1() {
      if (checkedCaption1 == false) {
        setAttributes(
          {
            checkedCaption1: true,
            toggle_caption1: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCaption1: false,
            toggle_caption1: 'none'
          }
        )
      }
    }

    var toggle_caption1 = {
      display: attributes.toggle_caption1
    }

    var checkedCredit1 = attributes.checkedCredit1;
    function toggleCredit1() {
      if (checkedCredit1 == false) {
        setAttributes(
          {
            checkedCredit1: true,
            toggle_credit1: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCredit1: false,
            toggle_credit1: 'none'
          }
        )
      }
    }

    var toggle_credit1 = {
      display: attributes.toggle_credit1
    }

    var checkedCaption2 = attributes.checkedCaption2;
    function toggleCaption2() {
      if (checkedCaption2 == false) {
        setAttributes(
          {
            checkedCaption2: true,
            toggle_caption2: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCaption2: false,
            toggle_caption2: 'none'
          }
        )
      }
    }

    var toggle_caption2 = {
      display: attributes.toggle_caption2
    }

    var checkedCredit2 = attributes.checkedCredit2;
    function toggleCredit2() {
      if (checkedCredit2 == false) {
        setAttributes(
          {
            checkedCredit2: true,
            toggle_credit2: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCredit2: false,
            toggle_credit2: 'none'
          }
        )
      }
    }

    var toggle_credit2 = {
      display: attributes.toggle_credit2
    }

    var checkedCaption3 = attributes.checkedCaption3;
    function toggleCaption3() {
      if (checkedCaption3 == false) {
        setAttributes(
          {
            checkedCaption3: true,
            toggle_caption3: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCaption3: false,
            toggle_caption3: 'none'
          }
        )
      }
    }

    var toggle_caption3 = {
      display: attributes.toggle_caption3
    }

    var checkedCredit3 = attributes.checkedCredit3;
    function toggleCredit3() {
      if (checkedCredit3 == false) {
        setAttributes(
          {
            checkedCredit3: true,
            toggle_credit3: 'block'
          }
        )
      }
      else {
        setAttributes(
          {
            checkedCredit3: false,
            toggle_credit3: 'none'
          }
        )
      }
    }

    var toggle_credit3 = {
      display: attributes.toggle_credit3
    }


    return ([
      <InspectorControls>
        <PanelBody title={ ( 'Photo', 'Left Image' ) } >
          <PanelRow className="caption-settings">
            <p className="inspector-title">Toggle Entire Left Image Caption</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCaption1 }
                onChange={ toggleCaption1 }
            />
            <p className="inspector-title">Toggle Left Image Credit Only</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCredit1 }
                onChange={ toggleCredit1 }
            />
          </PanelRow>
          <PanelRow>
            <PlainText
              onChange={ content => setAttributes({ image1Photog: content }) }
              value={ attributes.image1Photog }
              placeholder="Photographer Name"
              isSelected={ attributes.isSelected }
              className="image1_photog_edit"
            />
          </PanelRow>
          <PanelRow>
            <PlainText
              onChange={ content => setAttributes({ image1Pub: content }) }
              value={ attributes.image1Pub }
              placeholder="Publication Name"
              className="image1_pub_edit"
              isSelected={ attributes.isSelected }
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title={ ( 'Photo', 'Center Image' ) } >
          <PanelRow className="caption-settings">
            <p className="inspector-title">Toggle Entire Center Image Caption</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCaption2 }
                onChange={ toggleCaption2 }
            />
            <p className="inspector-title">Toggle Center Image Credit Only</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCredit2 }
                onChange={ toggleCredit2 }
            />
          </PanelRow>
          <PanelRow>
            <PlainText
              onChange={ content => setAttributes({ image2Photog: content }) }
              value={ attributes.image2Photog }
              placeholder="Photographer Name"
              isSelected={ attributes.isSelected }
              className="image2_photog_edit"
            />
          </PanelRow>
          <PanelRow>
            <PlainText
              onChange={ content => setAttributes({ image2Pub: content }) }
              value={ attributes.image2Pub }
              placeholder="Publication Name"
              className="image2_pub_edit"
              isSelected={ attributes.isSelected }
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title={ ( 'Photo', 'Right Image' ) } >
          <PanelRow className="caption-settings">
            <p className="inspector-title">Toggle Entire Right Image Caption</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCaption3 }
                onChange={ toggleCaption3 }
            />
            <p className="inspector-title">Toggle Right Image Credit Only</p>
            <FormToggle
                id="image-caption-toggle"
                label={( 'High Contrast', 'jsforwpblocks' ) }
                checked={ checkedCredit3 }
                onChange={ toggleCredit3 }
            />
          </PanelRow>
          <PanelRow>
            <PlainText
              onChange={ content => setAttributes({ image3Photog: content }) }
              value={ attributes.image3Photog }
              placeholder="Photographer Name"
              isSelected={ attributes.isSelected }
              className="image3_photog_edit"
            />
          </PanelRow>
          <PanelRow>
            <PlainText
              onChange={ content => setAttributes({ image3Pub: content }) }
              value={ attributes.image3Pub }
              placeholder="Publication Name"
              className="image3_pub_edit"
              isSelected={ attributes.isSelected }
            />
          </PanelRow>
        </PanelBody>

      </InspectorControls>,
      <div className="collage_container">

        <div>
          <MediaUpload
            onSelect={ media1 => { setAttributes({ image1Alt: media1.alt, image1Url: media1.url, image1Caption: media1.caption }); } }
            type="image"
            value={ attributes.image1ID }
            render={ ({ open }) => getImageButton1(open) }
          />
          <div style={toggle_caption1} className="editor_caption">{ attributes.image1Caption} <span className="image-credit" style={toggle_credit1}><span className="photog_edit">{ attributes.image1Photog }</span> | <span className="pub_edit">{ attributes.image1Pub }</span></span></div>
        </div>

        <div>
          <MediaUpload
            onSelect={ media2 => { setAttributes({ image2Alt: media2.alt, image2Url: media2.url, image2Caption: media2.caption }); } }
            type="image"
            value={ attributes.image2ID }
            render={ ({ open }) => getImageButton2(open) }
          />
          <div style={toggle_caption2} className="editor_caption">{ attributes.image2Caption} <span className="image-credit" style={toggle_credit2}><span className="photog_edit">{ attributes.image2Photog }</span> | <span className="pub_edit">{ attributes.image2Pub }</span></span></div>
        </div>

        <div>
          <MediaUpload
            onSelect={ media3 => { setAttributes({ image3Alt: media3.alt, image3Url: media3.url, image3Caption: media3.caption }); } }
            type="image"
            value={ attributes.image3ID }
            render={ ({ open }) => getImageButton3(open) }
          />
          <div style={toggle_caption3} className="editor_caption">{ attributes.image3Caption} <span className="image-credit" style={toggle_credit3}><span className="photog_edit">{ attributes.image3Photog }</span> | <span className="pub_edit">{ attributes.image3Pub }</span></span></div>
          </div>
      </div>
    ]);

  },

  save({ attributes }) {

    var toggle_caption1 = {
      display: attributes.toggle_caption1
    }
    var toggle_credit1 = {
      display: attributes.toggle_credit1
    }
    var toggle_caption2 = {
      display: attributes.toggle_caption2
    }
    var toggle_credit2 = {
      display: attributes.toggle_credit2
    }
    var toggle_caption3 = {
      display: attributes.toggle_caption2
    }
    var toggle_credit3 = {
      display: attributes.toggle_credit2
    }

    const collageImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img
            className="collageImage"
            src={ src }
            alt={ alt }
          />
        );
      }

      // No alt set, so let's hide it from screen readers
      return (
        <img
          className="collageImage"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      );
    };

    return (
      <div className="collage_wrap">
        <div className="collage1">
          { collageImage(attributes.image1Url, attributes.image1Alt) }
          <p style={toggle_caption1} className="collage_caption">{ attributes.image1Caption } <span className="image-caption" style={toggle_credit1}><span className="image1_photog">{ attributes.image1Photog }</span> | <span className="image1_pub">{ attributes.image1Pub }</span></span></p>
        </div>
        <div className="collage2">
          { collageImage(attributes.image2Url, attributes.image2Alt) }
          <p style={toggle_caption2} className="collage_caption">{ attributes.image2Caption } <span className="image-credit" style={toggle_credit2}><span className="image2_photog">{ attributes.image2Photog }</span> | <span className="image2_pub">{ attributes.image2Pub }</span></span></p>
        </div>
        <div className="collage3">
          { collageImage(attributes.image3Url, attributes.image3Alt) }
          <p style={toggle_caption3} className="collage_caption">{ attributes.image3Caption } <span className="image-credit" style={toggle_credit3}><span className="image3_photog">{ attributes.image3Photog }</span> | <span className="image3_pub">{ attributes.image3Pub }</span></span></p>
        </div>

      </div>//  end collage_wrap
    );
  }
});
