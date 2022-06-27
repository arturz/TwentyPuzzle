import {Node} from '../types/Node';

export const extractPathToGoal = (node: Node) => {
  let path = [node.value];
  while ((node = node.parent)) {
    path = [node.value, ...path];
  }
  return path;
};
