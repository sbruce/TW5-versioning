/*\
title: $:/plugins/sbruce/versioning/versioning.js
type: application/javascript
module-type: widget

\*/

(function () {
  "use_strict";

  var Widget = require("$:/core/modules/widgets/widget.js").widget;
  var NewVersion = function(parseTreeNode,options) {
      this.initialise(parseTreeNode, options);
  };
  // Inherit from Widget
  NewVersion.prototype = new Widget();

  NewVersion.prototype.render = function(parent,nextSibling) {
    var self = this;
    this.parentDomNode = parent;
    this.computeAttributes();
    this.execute();
    // Create DOM element
    var domNode = this.document.createElement("button");
    domNode.className = this["class"];
    if(this.title) {
        domNode.setAttribute("title", this.title);
    }
    if(this["aria-label"]) {
        domNode.setAttribute("aria-label", this["aria-label"]);
    }
    // Add event listener
    domNode.addEventListener(
        "click",
        function(event) {
        self.handleClick(event);
        },
        false
    );
    // Insert element
    parent.insertBefore(domNode, nextSibling); this.renderChildren(domNode, null);
    this.domNodes.push(domNode);
  };

  NewVersion.prototype.handleClick = function(event) {
    var currentTiddler = this.getVariable("currentTiddler");
    console.log('Current Tiddler: ' + currentTiddler);
  };

  exports.newversion = NewVersion;

})();
