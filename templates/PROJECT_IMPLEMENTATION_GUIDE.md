# Full Implementation Guide  
Docs as System

## Introduction

This document is a detailed implementation guide for anyone starting a new project using the Docs as System extension for VS Code.  
Its purpose is to walk you step by step from the moment the project is created to the point where the agent and human work together in a clear, documented workflow.  
The guide is written in a direct and practical style so you can start using the methodology without confusion or unnecessary friction.

The guide is structured as a clear path.  
Each stage builds on the previous one.  
By the end, your project will be documented, organized and stable.

## Starting a New Project

You reached this document after creating a new project through the Docs as System VS Code extension.  
At this stage the project is ready and includes all template structures, folders and required files.

## A new project is created and ready to begin

The project includes:

• Basic source code skeleton  
• A full docs folder populated with templates  
• Agent configuration files  
• Git workflow scripts for controlled operations  
• Initial README file  

To begin properly:

Enter the new project folder  
Open the docs folder  
Follow the steps in the order described below  

---

# Part Two  
## Initial Planning

This is the critical stage where the foundation of the entire project is laid.  
If this part is not done correctly, the rest of the methodology will feel unstable.

Enter the planning folder and work through the documents in a fixed order.  
The order matters because each file depends on the one before it.

---

## Stage One  
### Business Requirements

This document defines everything you need to know before discussing design or code.  
It contains four core elements:

• What the system must achieve  
• Who the primary users are  
• The system’s context inside the organization  
• The real business value the system provides  

Here you also specify constraints such as regulatory rules, budget limitations or dependencies on other systems.

It is recommended to write this document with the help of an external conversational model.  
It helps clarify your thoughts in a clean and structured way without wasting time.

---

## Stage Two  
### Project Spec

In this document you translate the business requirements into a functional description.  
It defines what the system actually does.

This document describes:

• Use cases  
• System behavior  
• Functional requirements  
• Interaction points with other systems  
• Non functional requirements such as performance or security  

This document is also recommended to be written with the help of an external conversational model.  
The translation from business language to technical language becomes much more accurate this way.

## Stage Three  
### Architecture Blueprint

At this point you already know what needs to be built.  
Now you can move to system thinking and outline the technical structure.

The document includes:

• System layers  
• List of components  
• Responsibility boundaries for each component  
• Data flow mapping between parts of the system  
• Integration points  
• Major design decisions  

This document serves as the bridge between the functional specification and the execution plan.  
It is highly recommended to create it with the help of an external conversational model.  
It supports accurate discussion and helps refine the system structure until it is clear and coherent.

---

## Step Four  
### Architecture Decision Records (ADR)

This stage documents the architectural decisions that shape the system.  
A decision that is not documented does not exist for the agent and is not considered part of the official architecture.

Work according to a clear and consistent structure:

---

### 📁 Where ADRs Are Stored

Each decision is a separate file located in:

```
docs/architecture/decisions/
```

---

### 🧩 Required File Name Format

To preserve ordering, discoverability, and consistency, each file must follow:

```
ADR-YYYY-NN_<topic>.md
```

For example:

```
ADR-2025-09_Monolith_vs_Microservices.md
```

- YYYY — the year the decision was written  
- NN — a sequential number for that year  

This numbering format is essential for clarity and automated processing.

---

### 📚 The ADR Index

Every ADR must also be listed in the central index file:

```
docs/architecture/decisions/ADR_INDEX.md
```

The index provides:

- A clear map of all architectural decisions  
- Prevention of duplication  
- Context the agent can rely on  
- Fast navigation for developers  

This file is generated and maintained according to:

```
MethodologyTemplates/architecture/ADR_INDEX_TEMPLATE.md
```

---

### 📝 How to Write an ADR

Use the official template:

```
MethodologyTemplates/architecture/ADR_TEMPLATE.md
```

Each ADR includes:

• What was decided  
• Why it was decided  
• Alternatives that were considered  
• Expected impact  
• Success metrics  
• References to related documents  

Taking the time to write a proper ADR prevents future contradictions  
and enables the agent to operate with full architectural context.

---

### 🤖 Should You Use a Chat Model?

Yes.  
It helps refine reasoning, compare alternatives, and produce a clear and consistent document.  
However, it is critical to follow the template structure exactly.

---

### 🎯 Why This Stage Matters

- Creates a durable “architectural memory”  
- Prevents conflicting decisions  
- Gives the agent a reliable map of system intent  
- Ensures development aligns with the planned architecture  

This is one of the most important steps in the Docs-as-System workflow.

---

## Stage Five  
### Plan

Here you create the practical execution plan.  
The plan is based on the three previous documents.

The plan includes:

• Execution stages  
• Priorities  
• Division of tasks between agent and human  
• Effort estimates  
• Dependencies between parts  
• Key milestones  

This is another document where using an external conversational model is especially helpful.  
It allows you to create a timeline and operational logic based on all the previous documents.

---

# Part Three  
## Agent Definition

After completing the planning phase you can move to defining the agent’s behavior.  
The agent does not guess how to operate. It is fully dependent on the configuration files inside the agent folder.  
Therefore it is important to follow the correct order.

---

## AGENT_CONFIG

This is the central configuration file that every agent must read before performing any action.

In this file you define:

• Allowed work branches  
• Access permissions  
• Logging rules  
• Log rotation rules  
• Allowed paths for modification  
• Commit message template  
• File and folder paths the agent works with  

If this file is not configured properly, the agent will operate without context and will cause errors.

It is recommended to review the file with an external model and adapt it to your organization.

---

## AGENT_OPERATIONAL_POLICY

This document is written by a human responsible for the project’s workflow.  
Usually it is an architect, project manager or technical lead.  
Its purpose is to establish a clear ruleset for the agent that acts as a binding work contract.

### Who writes it  
A senior person who understands the workflow, the organizational guidelines and the agent’s responsibility boundaries.  
The agent does not write or modify this document.

### How it is written  
The rules should be written clearly and directly.  
It is recommended to use an external conversational model to maintain consistent wording and avoid ambiguity.

### What it includes  
• Actions allowed for the agent without human approval  
• Actions allowed only with explicit human approval  
• Stop conditions in case of violation or failure  
• Expectations regarding error handling  
• Logging and real time reporting rules  
• Rules for restricting access to sensitive files, folders or resources  
• Guidelines for policy updates over time  

### When it is written  
After completing the planning and architecture layers, and before the agent starts performing real actions in the project.

### How the agent uses it  
The agent reads the document at the start of any workflow and before every sensitive action.  
If an action violates the policy, the agent must stop and request explicit approval.

---

## HUMAN_OPERATIONAL_POLICY

This document is meant for the human working with the agent.  
It prevents misunderstandings and ensures that all instructions to the agent are clear and consistent.

### Who writes it  
A person who knows how the agent operates and understands the workflow.  
Often it is the same person who writes the agent’s policy, but not necessarily.

### How it is written  
The guidelines should be short, clear and practical.  
It is recommended to use an external conversational model to keep the text structured and easy to follow.

### What it includes  
• How to phrase requests in a way the agent understands  
• How to provide the correct context before each action  
• What must not be requested from the agent  
• How to review the agent’s output  
• When to stop an agent run  
• How to document human decisions  
• How to maintain a consistent workflow  

### When it is written  
After defining the agent’s operational policy.  
It complements the AGENT_OPERATIONAL_POLICY from the human side.

### How the agent uses it  
The agent does not read this document.  
It is intended solely for humans to maintain clarity and consistency in instructions.

---

## SECURITY_CHECKLIST

A critical document that protects the system.

It includes:

• Access checks  
• Permission checks  
• Secret handling checks  
• Sensitive file write checks  
• Network access checks  

These checks are performed before and after execution.  
The human marks which checks passed and which failed.

---

## VALIDATION_REPORT

This file summarizes one full agent execution cycle.

The report includes:

• Actions performed  
• Results  
• Passed checks  
• Open issues  
• Recommendations for the next cycle  

The agent generates this report automatically at the end of the cycle.  
The human adds notes and final approval.

# Part Four  
## Real Time Documentation  
### The logs folder

The methodology relies on consistent documentation.  
The logs folder is the heart of the system.  
Every change must appear as a line in the log.

---

## IMPLEMENTATION_LOG

This is the main activity log of the project.

Each entry records:

• Date and time  
• Executor  
• File that changed  
• Result  
• Commit ID  
• Context or reason  

The document allows you to reconstruct every change without guessing.

---

## IMPLEMENTATION_LOG_BY_CYCLE

A cycle based log that groups actions by work cycle or date range.  
It provides a clear chronological order that is essential during reviews, audits or debugging.

---

## IMPLEMENTATION_LOG_SUMMARY

A management level summary created at the end of each cycle.

It includes:

• What was completed  
• What remains open  
• Test status  
• Risk level  

This file allows stakeholders to understand the state of the project without reading the full logs.

---

# Part Five  
## The Automation Layer  
### The automation folder

The automation layer ensures that every process throughout the project is executed in a consistent and safe way.  
It guarantees that any technical action performed by the agent or the human is documented, controlled and aligned with policy.

Inside the automation folder you will find documents that define the process flow, as well as scripts that perform actual operations.

---

## WORKFLOWS_GUIDE

A guide that explains how to build consistent processes.  
It includes:

• Life stages of a workflow  
• Triggers for execution  
• Actions executed by the agent  
• Stop conditions  
• Logging and reporting requirements  

This document helps you understand how automation should behave in a Docs as System managed project.

---

## VALIDATION_PIPELINE

A description of the validation pipeline.

The document defines:

• Which validations occur at each stage  
• How results are recorded  
• How the agent reports failures  
• Conditions required to continue the process  

The pipeline is not tied to any specific CI platform.  
It defines logic only, so any project can implement it in any CI environment.

---

## GUARDRAILS

The document that protects the system from mistakes.

It includes:

• Rules that restrict sensitive actions  
• Conditions required to execute an action  
• Requirements for human approval  
• Recovery instructions in case of failure  
• Safe stop procedures  

The guardrails ensure that all automation operates within clearly defined boundaries.

---

## The git folder

This folder contains scripts that execute Git operations in a controlled and safe manner.  
The agent never runs raw Git commands from the terminal.  
It uses only the scripts inside this folder.

The scripts allow:

• Creating branches  
• Staging changes  
• Creating commits  
• Pushing branches  
• Opening pull requests  
• Merging after human approval  

Each script is documented and returns a structured result for the logs.

---

### CREATE_BRANCH.sh  
A script that opens a new branch following a predefined naming convention (feature, fix, experiment).  
It ensures the branch is created from the correct base, logs the action and returns an identifier for tracking.

---

### STAGE_AND_COMMIT.sh  
A script that performs staging and commit operations for all changed files.  
The commit message is created according to policy and includes the relevant context.  
The action is logged and linked to an active work cycle.

---

### PUSH_BRANCH.sh  
Pushes the branch to the remote repository after verifying that the latest commit is approved.  
The script logs the result, detects errors and raises alerts when needed.

---

### OPEN_PULL_REQUEST.sh  
Opens a new pull request with a title and description generated automatically based on the changed files and cycle logs.  
It tags the request by type (feature, fix, refactor) and links the matching validation report.  
Every PR creation is logged.

---

### MERGE_AFTER_APPROVAL.sh  
Merges a pull request only after it has been approved by a human or CI system.  
It checks for conflicts, performs the merge, logs the action and updates the cycle summary.  
On failure, it returns an error message and performs rollback according to policy.

---

### README.md (git folder)  
A document that explains the purpose of each script, the expected inputs and outputs, and safe usage guidelines.  
It ensures every Git operation is documented, reproducible and aligned with policy.

# Part Six  
## Full Work Cycle  
## Working in a consistent and safe workflow

The Docs as System methodology operates in cycles.  
Each cycle includes planning, execution, documentation and verification.

Below is the recommended structure:

---

## Starting a New Cycle

A new cycle is opened by editing the BY_CYCLE file.  
In this file you define:

• Cycle dates  
• Objectives  
• Tasks  
• Control points  

This document gives a clear direction for the upcoming period.

---

## Working with the Agent

During the cycle, the agent performs tasks according to the operational policy and updates the logs automatically.

The human:

• Provides instructions  
• Reviews the agent’s output  
• Approves changes  
• Stops execution when necessary  

This division ensures safety, clarity and consistent control.

---

## Documenting Every Action

Every action performed during the cycle must appear in the IMPLEMENTATION_LOG.  
This log serves as the source of truth throughout the project’s life.

It ensures traceability, accountability and accurate reconstruction of all events.

---

## Generating the Validation Report

At the end of each cycle the agent produces a VALIDATION_REPORT.

The report includes:

• All actions performed  
• The results  
• Validations that passed  
• Outstanding issues  
• Quality assessment  
• Recommendations for the next cycle  

The human reviews the report, adds notes and gives final approval.

---

## Creating the Summary

At the end of every cycle a short managerial summary is written.  
It provides a high level view of the project’s state.

The summary includes:

• What was completed  
• What remains unfinished  
• Test status  
• Risk level  
• Managerial notes  

This document allows stakeholders to understand progress without reading the detailed logs.

---

## Updating the Plan for the Next Cycle

The plan is updated according to what was accomplished in the current cycle.  
Once updated, the next cycle begins.

This maintains continuity and ensures alignment between planning and execution.

---

# Part Seven  
## How to Know the Methodology Is Applied Correctly

A project is considered aligned with the Docs as System methodology when the following conditions are met:

• No code change exists without a corresponding log entry  
• The agent does not touch paths that were not explicitly allowed  
• Planning and architecture documents match the actual code  
• No gaps exist between docs and src  
• Every work cycle ends with a summary  
• Every significant decision is documented and recoverable  
• The agent reports consistently  
• The human approves every significant step  

When all of these conditions are met, the project is stable, documented and transparent.

---

# Part Eight  
## Recommendation: Use a Conversational Model for Writing Documents

Planning and architectural documents should ideally be written with the help of an external conversational model.

The advantages:

• Clear and precise wording  
• Smooth workflow  
• Ability to create multiple versions quickly  
• Consistency across the entire documentation  
• Reduced errors  
• Fast editing and refinement  

The agent inside the IDE is not meant for planning.  
It is designed for execution and documentation.

---

# Summary

This guide provides a complete, stable and practical process for implementing the methodology.  
It is built in a way that allows developers, architects and managers to work correctly from day one.

When the methodology is followed, the system becomes a living documented system that evolves clearly alongside the agent.

---

© 2025 Tomer Kedem. Official implementation guide of Docs as System.
