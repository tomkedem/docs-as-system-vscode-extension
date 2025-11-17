import * as vscode from "vscode";
import { exec, ExecException } from "child_process";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "docsAsSystemEn.initProject",
    async () => {

      const projectName = await vscode.window.showInputBox({
        placeHolder: "Enter a name for the new project folder",
        prompt: "This will be the name of the folder to be created",
        ignoreFocusOut: true
      });

      if (!projectName || !projectName.trim()) {
        vscode.window.showWarningMessage("No project name was entered.");
        return;
      }

      const nodePath = process.execPath;
      const initScript = require.resolve('../src/init.cjs');
      const command = `"${nodePath}" "${initScript}" init "${projectName}"`;

      vscode.window.showInformationMessage(
        "Creating a new Docs-as-System project..."
      );

      exec(command, { cwd: vscode.workspace.rootPath }, (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          vscode.window.showErrorMessage(`Error: ${error.message}`);
          return;
        }

        if (stderr && !stderr.includes("npm WARN")) {
          vscode.window.showWarningMessage(`Warning: ${stderr}`);
        }

        vscode.window.showInformationMessage(
          `Project successfully created in folder: ${projectName}`
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
