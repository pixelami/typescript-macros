// tslint:disable: missing-jsdoc

import * as ts from 'typescript';

/**
 *
 * @param node ImportDeclaration node
 * @returns is it a macro import declaration
 */
export function isMacroImportDeclaration(node: ts.ImportDeclaration) {
  return /\.(ts)?macro(\"|\')$/.test(node.moduleSpecifier.getText());
}
