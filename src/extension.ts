import * as vscode from "vscode";
import { parse } from 'urichk/core/parser/urichk';
import format from 'urichk/core/stringifier/formatter';

const URICHK_MOD: vscode.DocumentSelector = {scheme: 'file', language: 'urichk'}

class UrichkDocumentFormatter implements vscode.DocumentFormattingEditProvider {
  public provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
    const urichk = parse(document.getText());
    if(!urichk.ast) return null;
    return [new vscode.TextEdit(new vscode.Range(0, 0, document.lineCount, 0), format(urichk.ast))];
  }
}

export async function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(URICHK_MOD, new UrichkDocumentFormatter()))  
} 
