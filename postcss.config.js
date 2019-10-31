const path = require('path');

module.exports = () => ({
  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  plugins: [
    // Transfer @global-import rule by inlining content with :global CSS Modules scope
    // e.g. @global-import 'draft-js/dist/Draft.css'
    // [https://github.com/scherebedov/postcss-global-import]
    require('postcss-global-import')(),

    // Allos for at rules such as @each, @for, @if, @else, etc
    // [https://github.com/GitScrum/postcss-at-rules-variables]
    require('postcss-at-rules-variables'),

    // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
    // [https://github.com/postcss/postcss-import]
    require('postcss-import')({
      resolve: (id, basedir) => {
        let src = path.resolve('./', basedir, id);

        // Define @import aliases
        if (/^~src/.test(id)) src = path.resolve('./src', id.substring(5));
        else if (/^~node_modules/.test(id)) src = path.resolve('./', id.substring(1));

        return src;
      }
    }),

    // Allows you to store a set of properties in a named custom property, then reference them in other style rules.
    // [https://github.com/pascalduez/postcss-apply]
    require('postcss-apply')(),

    // Custom properties aims to provide a future-proof way of using a limited to :root selector.
    // [https://github.com/postcss/postcss-custom-properties]
    require('postcss-custom-properties')(),

    // Allows you to use safely calc with custom properties by optimizing previously parsed var() references.
    // [https://github.com/postcss/postcss-calc]
    require('postcss-calc')(),

    // A nice way to have semantic media queries.
    // [https://github.com/postcss/postcss-custom-media]
    require('postcss-custom-media')(),

    // Allows you to create your own selectors.
    // [https://github.com/postcss/postcss-custom-selectors]
    require('postcss-custom-selectors')(),

    // A color function to modify colors (transpiled to: rgba()).
    // [https://github.com/postcss/postcss-color-function]
    require('postcss-color-function')(),

    // Allow you to use initial value for any value. This value represents the value specified as the property’s initial value.
    // It does not mean browser default.
    // [https://github.com/maximkoretskiy/postcss-initial]
    require('postcss-initial')(),

    // rem fallback to px (if your browser scope cover old browsers, eg: IE8).
    // [https://github.com/robwierzbowski/node-pixrem]
    require('pixrem')(),

    // Allows you to use :not() level 4 (which allows multiples selector).
    // Transformed to :not() level 3 (which allow only one selector).
    // [https://github.com/postcss/postcss-selector-NOT]
    require('postcss-selector-not')(),

    // Adjust :: to : (if your browser scope cover old browsers, eg: IE8).
    // [https://github.com/axa-ch/postcss-pseudoelements]
    require('postcss-pseudoelements')(),

    // PostCSS plugin to unwrap nested rules like how Sass does it.
    // [https://github.com/postcss/postcss-nested]
    require('postcss-nested')(),

    // Postcss flexbox bug fixer.
    // [https://github.com/luisrudge/postcss-flexbugs-fixes]
    require('postcss-flexbugs-fixes')(),

    // Adding sass like mixins and variables.
    // [https://github.com/jonathantneal/precss]
    require('precss'),

    // Allows to define postcss function-sass like
    require('postcss-define-function'),

    // Vendor prefixes are automatically added.
    // [https://github.com/postcss/autoprefixer]
    require('autoprefixer')({ browsers: ['last 3 versions'] })
  ],
});
