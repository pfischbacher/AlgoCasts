// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (min) {
    if (min > node.data) {
      return false;
    }
  }

  if (max) {
    if (max < node.data) {
      return false;
    }
  }

  if (node.left) {
    if (!validate(node.left, min, node.data)) {
      return false;
    }
  }

  if (node.right) {
    if(!validate(node.right, node.data, max)) {
      return false;
    }
  }

  return true;
}

module.exports = validate;
