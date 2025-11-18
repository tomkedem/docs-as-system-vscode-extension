# Templates Folder

This folder contains the templates used by the Docs as System StarterKit to create new projects.

The CLI copies files from this folder into the target project when you run the init command.  
Each template is designed to be readable by both humans and AI agents that work inside the IDE.

## Purpose

The templates define the initial structure of a project:

- Documentation files under the docs folder  
- Agent configuration and policies  
- Planning and architecture documents  
- Logs and automation related files  

They provide a consistent starting point so that every new project begins with the same structure and conventions.

## How the CLI Uses These Templates

When you run the CLI, it:

1. Reads the template folders from this directory  
2. Copies the relevant files into the new project  
3. Renames or adjusts some files if needed, for example adding IMPLEMENTATION_GUIDE or CHANGELOG to the root of the project  

You can customize or extend the templates here and publish your own version of the StarterKit if you want to change the default behavior.

## Customizing Templates

If you change files inside this folder:

- New projects created with the CLI will use your updated templates  
- Existing projects are not changed automatically  
- It is recommended to keep template names stable so that any documentation or guides that refer to them stay correct  

For significant changes, update the CHANGELOG and README of the StarterKit so that other users understand what has changed.

© 2025 Tomer Kedem. Part of the official Docs as System template suite.
