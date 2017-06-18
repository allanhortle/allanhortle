import React, { Component } from "react";
import PropTypes from "prop-types";


let stylesStr;
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`);
    } catch (e) {
        console.log(e);
    }
}


class Html extends Component {
    render() {
        let css
        if (process.env.NODE_ENV === `production`) {
            css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
        }

        return <html op="news" lang="en">
            <head>
                {this.props.headComponents}
                <meta name="referrer" content="origin" />
                <meta charSet="utf-8" />
                <meta name="description" content="Gatsby example site demoing postcss-sass plugin" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Allan Hortle</title>
                {css}
            </head>
            <body>
                <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                {this.props.postBodyComponents}
            </body>
        </html>;
    }
}

Html.propTypes = {
    headComponents: PropTypes.node.isRequired,
    body: PropTypes.node.isRequired,
    postBodyComponents: PropTypes.node.isRequired,
};

module.exports = Html
