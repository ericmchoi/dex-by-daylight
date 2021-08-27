import visit from 'unist-util-visit';
import type { Node } from 'unist';

const dbdDirectives = (): ((tree: Node) => void) => {
  function ondirective(node) {
    // eslint-disable-next-line no-param-reassign
    const data = node.data || (node.data = {});
    const { class: className = [], ...properties } = node.attributes;

    data.hName = `dbd-${node.name}`;
    data.hProperties = { ...properties, className };
  }

  function transform(tree: Node) {
    visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], ondirective);
  }

  return transform;
};

export default dbdDirectives;
