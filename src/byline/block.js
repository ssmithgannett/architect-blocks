const { PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { PanelBody, PanelRow } = wp.components;


// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('byline/main', {
  title: 'Architect Byline',
  icon: 'format-aside',
  category: 'architect-blocks',
  attributes: {
    author1: {
      type: 'array',
      source: 'children',
      selector: '.byline_author1'
    },
    publication1: {
      type: 'array',
      source: 'children',
      selector: '.byline_pub1'
    },
    link1: {
      type: 'string',
      source: 'text',
      selector: '.byline_email1'
    },
    author2: {
      type: 'array',
      source: 'children',
      selector: '.byline_author2'
    },
    publication2: {
      type: 'array',
      source: 'children',
      selector: '.byline_pub2'
    },
    link2: {
      type: 'string',
      source: 'text',
      selector: '.byline_email2'
    },
    author3: {
      type: 'array',
      source: 'children',
      selector: '.byline_author3'
    },
    publication3: {
      type: 'array',
      source: 'children',
      selector: '.byline_pub3'
    },
    link3: {
      type: 'array',
      source: 'children',
      selector: '.byline_email3'
    }
  },
  edit({ attributes, className, setAttributes }) {

    return ([
      <InspectorControls>
        <PanelBody
          title={ ( 'High Contrast', 'Author 1 Information' ) }
          initialOpen={ true }
          >
          <PanelRow className="byline_info">
            <p className="inspector-title">Name</p>
            <PlainText
              onChange={ content => setAttributes({ author1: content }) }
              value={ attributes.author1 }
              placeholder="Author Name"
              isSelected={ attributes.isSelected }
              className="byline_author_edit"
            />
            <p className="inspector-title">Publication</p>
            <PlainText
              onChange={ content => setAttributes({ publication1: content }) }
              value={ attributes.publication1 }
              placeholder="Publication Name"
              className="byline_pub_edit"
              isSelected={ attributes.isSelected }
            />
            <p className="inspector-title">URL</p>
            <PlainText
              onChange={ content => setAttributes({ link1: content }) }
              value={ attributes.link1 }
              placeholder="Byline URL"
              className="byline_email_edit"
              isSelected={ attributes.isSelected }
            />
            <p className="inspector-doc">For emails, use 'mailto:' ahead of address. (i.e., mailto:name@email.com)</p>

            <p>For all other links, include https:// (i.e., https://twitter.com/username)</p>
          </PanelRow>
        </PanelBody>
        <PanelBody
          title={ ( 'High Contrast', 'Author 2 Information' ) }
          initialOpen={ false }
          >
          <PanelRow className="byline_info">
            <p className="inspector-title">Name</p>
            <PlainText
              onChange={ content => setAttributes({ author2: content }) }
              value={ attributes.author2 }
              placeholder="Author Name"
              isSelected={ attributes.isSelected }
              className="byline_author_edit"
            />
            <p className="inspector-title">Publication</p>
            <PlainText
              onChange={ content => setAttributes({ publication2: content }) }
              value={ attributes.publication2 }
              placeholder="Publication name"
              className="byline_pub_edit"
              isSelected={ attributes.isSelected }
            />
            <p className="inspector-title">URL</p>
            <PlainText
              onChange={ content => setAttributes({ link2: content }) }
              value={ attributes.link2 }
              placeholder="Byline URL"
              className="byline_email_edit"
              isSelected={ attributes.isSelected }
            />
            <p className="inspector-doc">For emails, use 'mailto:' ahead of address. (i.e., mailto:name@email.com)</p>

            <p>For all other links, include https:// (i.e., https://twitter.com/username)</p>
          </PanelRow>
        </PanelBody>
        <PanelBody
          title={ ( 'High Contrast', 'Author 3 Information' ) }
          initialOpen={ false }
          >
          <PanelRow className="byline_info">
            <p className="inspector-title">Name</p>
            <PlainText
              onChange={ content => setAttributes({ author3: content }) }
              value={ attributes.author3 }
              placeholder="Author Name"
              isSelected={ attributes.isSelected }
              className="byline_author_edit"
            />
            <p className="inspector-title">Publication</p>
            <PlainText
              onChange={ content => setAttributes({ publication3: content }) }
              value={ attributes.publication3 }
              placeholder="Publication name"
              className="byline_pub_edit"
              isSelected={ attributes.isSelected }
            />
            <p className="inspector-title">URL</p>
            <PlainText
              onChange={ content => setAttributes({ link3: content }) }
              value={ attributes.link3 }
              placeholder="Byline URL"
              className="byline_email_edit"
              isSelected={ attributes.isSelected }
            />
            <p className="inspector-doc">For emails, use 'mailto:' ahead of address. (i.e., mailto:name@email.com)</p>

            <p>For all other links, include https:// (i.e., https://twitter.com/username)</p>
          </PanelRow>
        </PanelBody>
      </InspectorControls>,
      <div className="byline_edit">
        <div>
          <div className="byline_author_block1">{ attributes.author1 }</div>
          <div className="byline_pub_block1">{ attributes.publication1 }</div>
        </div>
        <div>
          <div className="byline_author_block2">{ attributes.author2 }</div>
          <div className="byline_pub_block2">{ attributes.publication2 }</div>
        </div>
        <div>
          <div className="byline_author_block3">{ attributes.author3 }</div>
          <div className="byline_pub_block3">{ attributes.publication3 }</div>
        </div>
      </div>
    ]);

  },

  save({ attributes }) {
    let link1 = attributes.link1;
    let link2 = attributes.link2;
    let link3 = attributes.link3;

    return (
      <div>
        <p className="byline firstAuthor">
          <a href={link1}><span className="byline_author1">{ attributes.author1 }</span></a> <span className="byline_pub1">{ attributes.publication1 }</span>
        </p>
        <div className="byline_email1" style="display:none;">{attributes.link1}</div>
        <p className="byline secondAuthor">
          <a href={link2}><span className="byline_author2">{ attributes.author2 }</span></a> <span className="byline_pub2">{ attributes.publication2 }</span>
        </p>
        <div className="byline_email2" style="display:none;">{attributes.link2}</div>
        <p className="byline thirdAuthor">
          <a href={link3}><span className="byline_author3">{ attributes.author3 }</span></a> <span className="byline_pub3">{ attributes.publication3 }</span>
        </p>
        <div className="byline_email3" style="display:none;">{attributes.link3}</div>

      </div>

    );
  }
});
