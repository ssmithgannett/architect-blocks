const { RichText, PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { PanelRow, PanelBody } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('blockquote/main', {
  title: 'Architect Blockquote',
  icon: 'format-quote',
  category: 'architect-blocks',
  attributes: {
    body: {
      type: 'array',
      source: 'children',
      selector: '.quote_copy'
    },
    attrTitle: {
      type: 'array',
      source: 'children',
      selector: '.quote_title'
    },
    attrName: {
      type: 'array',
      source: 'children',
      selector: '.quote_name'
    }
  },
  edit({ attributes, className, setAttributes }) {


    return ([

      <InspectorControls>
        <PanelBody title={ ( '', 'Quote Attribution' ) } >
        <p>Add your blockquote copy directly to the block in the editor. Add the quote's source attribution here in the sidebar.</p>
          <PanelRow className="quote_info">
            <p>Name:</p>
            <PlainText
              onChange={ content => setAttributes({ attrName: content }) }
              value={ attributes.attrName }
              placeholder="Quote Attribution Name"
              isSelected={ attributes.isSelected }
              className="quote_attr_name"
            />
            <p>Title:</p>
            <PlainText
              onChange={ content => setAttributes({ attrTitle: content }) }
              value={ attributes.attrTitle }
              placeholder="Quote Attribution Title"
              className="quote_attr_title"
              isSelected={ attributes.isSelected }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>,
      <div className="blockquote_edit">
        <div className="quote_graphic">
          <div className="quote_line"></div>
          <div className="quote_mark">&ldquo;</div>
          <div className="quote_line"></div>
        </div>

        <div className="quote_copy_edit">

          <RichText
            onChange={ content => setAttributes({ body: content }) }
            value={ attributes.body }
            multiline="p"
            placeholder="Quote copy"
            isSelected={ attributes.isSelected }
            className="quote_quote_edit"
          />

          <div className="quote_attr"><span className="quote_attr_name_block">{ attributes.attrName }</span><span clasName="quote_attr_title_block">{ attributes.attrTitle }</span></div>
        </div>
      </div>
    ]);

  },

  save({ attributes }) {

    return (
      <div className="custom_blockquote">
        <div className="quote_graphic">
          <div className="quote_line"></div>
          <div className="quote_mark">&ldquo;</div>
          <div className="quote_line"></div>
        </div>
        <div className="quote_quote">
          <div className="quote_copy">{ attributes.body }</div>
          <div className="quote_attr">
            <div className="quote_name">{ attributes.attrName }</div>
            <div className="quote_title">{ attributes.attrTitle }</div>
          </div>
        </div>
      </div>
    );
  }
});
