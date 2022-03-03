import * as vscode from "vscode";
import { EXTENSION_NS } from "./constants";

// const extensionContext = {} as PbkitExtensionContext;

const URICHK_MOD: vscode.DocumentSelector = {scheme: 'file', language: 'urichk'}

class UrichkDocumentFormatter implements vscode.DocumentFormattingEditProvider {
  public provideDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
    throw new Error("Implement here!");
  }
}

export async function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(URICHK_MOD, new UrichkDocumentFormatter()))  

  // extensionContext.clientOptions = {
  //   documentSelector: [
  //     { scheme: "file", language: "proto" },
  //   ],
  //   diagnosticCollectionName: "pbkit",
  // };

  // const registerCommand = createRegisterCommand(context);
  // registerCommand("restart", commands.startLanguageServer);

  // await commands.startLanguageServer(context, extensionContext)();
}

// export function deactivate() {
//   const client = extensionContext.client;
//   extensionContext.client = undefined;
//   vscode.commands.executeCommand("setContext", ENABLEMENT_FLAG, false);
//   return client?.stop();
// }

// function createRegisterCommand(
//   context: vscode.ExtensionContext,
// ): (name: string, factory: commands.Factory) => void {
//   return function registerCommand(
//     name: string,
//     factory: (
//       context: vscode.ExtensionContext,
//       extensionContext: PbkitExtensionContext,
//     ) => commands.Callback,
//   ): void {
//     const fullName = `${EXTENSION_NS}.${name}`;
//     const command = factory(context, extensionContext);
//     context.subscriptions.push(
//       vscode.commands.registerCommand(fullName, command),
//     );
//   };
// }
