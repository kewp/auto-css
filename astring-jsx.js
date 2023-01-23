var astring = require('astring');

var generator = Object.assign({}, astring.GENERATOR, {

  // <div></div>
  JSXElement: function JSXElement(node, state) {

    // return;
    let close = false;
    if (!state.first)
    {
      state.write('{\n');
      // state.write('auto({\n');
      
      close = true;
    }

    this[node.openingElement.type](node.openingElement, state);

    state.first = true;

    if (node.closingElement) {
      // state.write('>');
      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        this[child.type](child, state);
      }
      // state.write('</');
      this[node.closingElement.type](node.closingElement, state);
      // state.write('>');
      // if (close) state.write('\n})');
      if (close) state.write('\n}');
    } else {
      
      // state.write(' />');
    }
  },

  JSXText: function JSXText(node, state)
  {
    let value = node.value.replace(/\s/g, ""); // remove whitespace
    if (value == '') return;
 
    if (!('count' in state)) state.count = {};
    if (!('txt' in state.count)) state.count.txt = 0;

    // how to store the name
    let tag = `txt_${state.count.txt}`;
    state.count.txt += 1;

    if (state.first) state.write(`\n`)
    state.write(`  ${tag}: document.createTextNode('${node.value}')`);

  },

  // <div>
  JSXOpeningElement: function JSXOpeningElement(node, state) {

    let name = node.name.name;

    // how to store the name
    let tag = name.substr(0,3);
    while (tag.length<3) tag += 'x';
    if (!('count' in state)) state.count = {};
    if (!(tag in state.count)) state.count[tag] = 0;
    let fullname = `${tag}_${state.count[tag]}`;

    if (state.first) state.write(',\n');
    state.write(`  ${fullname}: document.createElement(${name})`);
    state.current_element = fullname;

    state.count[tag] += 1;

    this[node.name.type](node.name, state);
    for (var i = 0; i < node.attributes.length; i++) {
      var attr = node.attributes[i];
      this[attr.type](attr, state);
    }
  },

  // </div>
  JSXClosingElement: function JSXOpeningElement(node, state) {
    this[node.name.type](node.name, state);
  },

  // div
  JSXIdentifier: function JSXOpeningElement(node, state) {
    
    // state.write(node.name);
  },

  // Member.Expression
  JSXMemberExpression: function JSXMemberExpression(node, state) {
    this[node.object.type](node.object, state);
    state.write('.');
    this[node.property.type](node.property, state);
  },

  // attr="something"
  JSXAttribute: function JSXAttribute(node, state) {
    state.write(' ');
    this[node.name.type](node.name, state);
    state.write('=');
    this[node.value.type](node.value, state);
  },

  // namespaced:attr="something"
  JSXNamespacedName: function JSXNamespacedName(node, state) {
    this[node.namespace.type](node.namespace, state);
    state.write(':');
    this[node.name.type](node.name, state);
  },

  // {expression}
  JSXExpressionContainer: function JSXExpressionContainer(node, state) {
    state.write(`,\n  exp_0: $ => $.${state.current_element}.setText(`);
    // state.write('{');
    this[node.expression.type](node.expression, state);
    // state.write('}');
    state.write(`)`);
  },
});

module.exports = generator;
