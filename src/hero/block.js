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
  RadioControl,
  FormToggle
} = wp.components

import {
  withState
} from '@wordpress/compose';

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('hero/main', {
  title: 'Architect Hero',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    title: {
      source: 'text',
      selector: '.hero_title'
    },
    intro: {
      type: 'array',
      source: 'children',
      selector: '.hero_body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.hero_image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.hero_image'
    },
    imageCaption: {
      type: 'text',
      selector: '.hero_caption'
    },
    heroPub: {
      type: 'text',
      selector: '.hero_pub'
    },
    heroPhotog: {
      type: 'text',
      selector: 'hero_photog'
    },
    radio_attr: {
      type: 'string',
      default: '#000'
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
  edit(props) {
    const {
      attributes,
      className,
      setAttributes,
      focus
    } = props;


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

  //Inspector (sidebar) controls for hero block
      <InspectorControls>
        <PanelBody title={ ( 'High Contrast', 'Hero Image Caption' ) } >
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
          <PanelRow className="hero_photog_control">

            <PlainText
              onChange={ content => setAttributes({ heroPhotog: content }) }
              value={ attributes.heroPhotog }
              placeholder="Photographer Name"
              className="photog_edit"
              isSelected={ attributes.isSelected }
            />
            <PlainText
              onChange={ content => setAttributes({ heroPub: content }) }
              value={ attributes.heroPub }
              placeholder="Publication Name"
              className="pub_edit"
              isSelected={ attributes.isSelected }
            />
          </PanelRow>
          <PanelRow className="caption-settings">
            <p className="inspector-title">Headline and Intro Text Color</p>
            <RadioControl
              label="Hero Text Color"
              className="headline_color_edit"
              options={ [{label:'Black', value: '#000'},{label:'White', value:'#FFF'},] }
              onChange={ (value) => {props.setAttributes({radio_attr: value})} }
              selected={props.attributes.radio_attr}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,

      <div className="hero_edit" >
        <MediaUpload
          onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url, imageCaption: media.caption }); } }
          type="image"
          value={ attributes.imageID }
          render={ ({ open }) => getImageButton(open) }
          className="headline_image"
        />
          <div style={toggle_caption} className="hero_caption_preview">{attributes.imageCaption} <span className="image-credit" style={toggle_credit}><span className="hero_caption_photo">{attributes.heroPhotog}</span> | <span className="hero_caption_pub">{attributes.heroPub}</span></span></div>
        <PlainText
          onChange={ content => setAttributes({ title: content }) }
          value={ attributes.title }
          placeholder="headline"
          className="headline_enter"
          style={{color: attributes.radio_attr}}
        />
        <PlainText
          onChange={ content => setAttributes({ intro: content }) }
          value={ attributes.intro }
          placeholder="intro text"
          className="intro_enter"
          style={{color: attributes.radio_attr}}
        />
      </div>

    ]);
  },

  save(props) {
    const {attributes, className } = props;
    const { checked } = props.attributes;
    const { headlinePos } = props.attributes;

    var toggle_caption = {
      display: attributes.toggle_caption
    }
    var toggle_credit = {
      display: attributes.toggle_credit
    }

    const heroImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img
            className="hero_image"
            src={ src }
            alt={ alt }
          />
        );
      }

      // No alt set, so let's hide it from screen readers
      return (
        <img
          className="hero_image"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      );
    };

    return (
      <div>
        <div className="hero">
          <script>
            console.log('background');
            jQuery('.hero').css('background-image', 'url({attributes.imageUrl})')
          </script>

          <div className="hero_content">
            <h3 className="hero_title" style={{color: attributes.radio_attr}}>{ attributes.title }</h3>
            <p className="hero_body" style={{color: attributes.radio_attr}}>{ attributes. intro }</p>
          </div>

        </div>

        <div className="hero_caption" style={toggle_caption}>{attributes.imageCaption} <span className="image-caption" style={toggle_credit}><span className="hero_photo">{attributes.heroPhotog}</span> | <span className="hero_pub">{attributes.heroPub}</span></span>
        </div>
      </div>

    );
  }
});
