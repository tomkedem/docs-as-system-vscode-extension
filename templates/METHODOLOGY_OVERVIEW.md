# Methodology Overview

## General Introduction

This document is the official guide to the structure of the templates folder.  
It serves as the foundation for every new project created with the Docs as System methodology.

The document explains the purpose of every folder and file, the logical order between them and the way the agent and the human work together inside the system.  
Its goal is to help any agent, developer or architect understand the entire structure of the methodology and follow it with consistency, accuracy and safety throughout the life of the project.

---

## Full Folder Structure with Purpose

# Methodology Overview
```plaintext
📁 templates/
├── 📁 agent/                                   ← Defines policies, permissions and behavior rules for the AI agent
│   ├── 📄 AGENT_CONFIG_TEMPLATE.yaml           ← Configuration file the agent reads for allowed paths, branches and permissions
│   ├── 📄 AGENT_OPERATIONAL_POLICY_TEMPLATE.md ← Operational rules the agent must follow, including allowed and restricted actions
│   ├── 📄 HUMAN_OPERATIONAL_POLICY_TEMPLATE.md ← Human guidelines: how to instruct, validate and collaborate with the agent
│   ├── 📄 SECURITY_CHECKLIST_TEMPLATE.md       ← Security checklist used before and after each agent execution
│   ├── 📄 VALIDATION_REPORT_TEMPLATE.md        ← Standard report summarizing actions, checks and cycle results
│   └── 📄 README.md                            ← Folder level explanation for all policy files

├── 📁 logs/                                    ← Ensures full traceability for every change and action
│   ├── 📄 IMPLEMENTATION_LOG_TEMPLATE.md       ← Chronological activity log with timestamps, commit IDs and context
│   ├── 📄 IMPLEMENTATION_LOG_BY_CYCLE_TEMPLATE.md ← Log grouped by work cycles or date ranges
│   ├── 📄 IMPLEMENTATION_LOG_SUMMARY_TEMPLATE.md ← Summary of cycle results
│   └── 📄 README.md                            ← Guidelines for maintaining complete and validated logging

├── 📁 planning/                                ← Holds intent, requirements and project planning
│   ├── 📄 BUSINESS_REQUIREMENTS_TEMPLATE.md    ← Business goals, constraints, stakeholders and value
│   ├── 📄 PROJECT_SPEC_TEMPLATE.md             ← Functional specification with use cases and behavior definitions
│   ├── 📄 PLAN_TEMPLATE.md                     ← Execution plan, milestones and division between human and agent
│   └── 📄 README.md                            ← How to write consistent requirements and specifications

├── 📁 architecture/                            ← Engineering structure derived from planning
│   ├── 📄 ARCHITECTURE_BLUEPRINT_TEMPLATE.md   ← System layers, components, responsibilities and data flows
│   ├── 📄 ADR_TEMPLATE.md                      ← Engineering decisions with alternatives and implications
│   └── 📄 README.md                            ← Explanation of how architecture connects planning to execution

├── 📁 project/                                 ← Project level documents for governance, compliance and identity
│   ├── 📄 README_TEMPLATE.md                   ← Main project README structure
│   ├── 📄 PROJECT_OVERVIEW_TEMPLATE.md         ← High level project purpose, scope and boundaries
│   ├── 📄 COMPLIANCE_AND_GOVERNANCE_TEMPLATE.md ← Organizational rules, compliance and required approvals
│   └── 📄 README.md                            ← Folder level explanation

├── 📁 automation/                              ← Automation workflows, pipelines and agent driven processes
│   ├── 📄 WORKFLOWS_GUIDE_TEMPLATE.md          ← Workflow definitions and operational stages
│   ├── 📄 VALIDATION_PIPELINE_TEMPLATE.md      ← Validation pipeline stages and logic
│   ├── 📄 GUARDRAILS_TEMPLATE.md               ← Safety rules restricting or conditioning actions
│   ├── 📄 PROMPTS_LIBRARY_TEMPLATE.md          ← Ready prompts for consistent agent operations
│   └── 📄 README.md                            ← Automation layer overview

├── 📁 starter-project/                         ← Basic project skeleton created after initialization
│   ├── 📁 automation/                           ← Ready to use automation scripts
│   │   └── 📁 git/                              ← Script library for Git operations
│   │       ├── 📄 CREATE_BRANCH.sh              ← Creates a new branch following the predefined naming convention
│   │       ├── 📄 STAGE_AND_COMMIT.sh           ← Stages files and creates a commit with a controlled message
│   │       ├── 📄 PUSH_BRANCH.sh                ← Pushes a branch to the remote repository according to policy
│   │       ├── 📄 OPEN_PULL_REQUEST.sh          ← Opens a pull request with an auto generated title and description
│   │       ├── 📄 MERGE_AFTER_APPROVAL.sh       ← Merges only after explicit human approval
│   │       └── 📄 README.md                     ← Explains each script and how to use it safely
│   │
│   ├── 📁 docs/                                 ← Documentation folder populated from templates
│   ├── 📁 src/                                  ← Source code folder
│   └── 📄 README.md                             ← Main project documentation file

├── 📄 CHANGELOG_TEMPLATE.md                    ← Template for documenting project version changes
├── 📄 METHODOLOGY_OVERVIEW.md                  ← This document: full methodology and folder structure explanation
└── 📄 README.md                                ← Root level explanation of how all layers interact
```


## Folder Purpose Summary  

| Folder | Purpose |
|:--------|:--------|
| 📁 **agent** | Defines the agent configuration, policy and its relationship with the human. |
| 📁 **logs** | Provides full traceability for every change and process. |
| 📁 **planning** | Describes the intent, requirements and steps before execution. |
| 📁 **architecture** | Maps the requirements into a clear and implementable engineering structure. |
| 📁 **project** | Collects the outer documentation such as licensing and contribution. |
| 📁 **automation** | Executes automation processes and controls the agent. |
| 📄 **README.md (root)** | Explains how all folders work together and when to use each one. |

---

## 📁 logs — systematic documentation of every change for audit and reconstruction  

This folder serves as the operational memory of the system.  
Every action whether it is an agent operation, an architectural decision or a change in the code is recorded here.  
The logs ensure that everything happening in the system is documented, verified and can be reconstructed later.  
This layer is the heart of the Docs as System process. It connects planning, execution and validation and creates a continuous timeline of everything that was done.

---

### 📄 IMPLEMENTATION_LOG_TEMPLATE.md  
This is the main activity log of every project.  
Each entry records a single event: date, time, executor (agent or human), the file or component that changed, a short description of the action and its result.  
In addition it stores the relevant commit or version identifiers, links to specification documents and validation files and sometimes also a human approval signature.  
The purpose is not only documentation for control it is also a daily work tool that supports progress tracking, issue analysis and automatic status reporting.  
The structure of the log is consistent which allows agents and analysis tools to read it easily and detect patterns.  
In any real project this file becomes a living archive that shows exactly how the system evolved over time.

---

### 📄 IMPLEMENTATION_LOG_BY_CYCLE_TEMPLATE.md  
This file is used as a focused log by work cycle, time period or a predefined date range.  
Its purpose is to organize in chronological order all actions, decisions and changes performed within a specific cycle whether by the agent or by a human.  
Each entry includes date, time, action, executor, result and relevant notes.  
The file makes it possible to follow the sequence of events, measure execution times and analyze trends in real time.  
It serves as an intermediate layer between the main activity log which records everything and the managerial summary and provides a detailed but time bounded view that simplifies audit, reporting and accurate reconstruction of a specific process.

---

### 📄 IMPLEMENTATION_LOG_SUMMARY_TEMPLATE.md   
These files serve as a general summary for the entire project rather than a specific cycle.  
They are written and updated throughout the project and consolidate overall trends, key achievements, lessons learned and critical points that influenced the direction of development.  
The document provides a broad historical view of the project. It highlights what changed over time, which architectural or business decisions had significant impact and which recurring patterns appear in performance or behavior.  
This is a strategic document intended for senior management, investors or anyone who needs to understand the larger picture without diving into the details of each individual cycle.  
The main difference from the SUMMARY_BY_CYCLE file is focus. This file covers long term and macro level insights while the cycle based summary covers micro level insights inside one isolated cycle.  
The file is updated at major milestones in the project such as the end of a phase, release of a large version or a strategic shift in direction.

---

### 📄 IMPLEMENTATION_LOG_SUMMARY_BY_CYCLE_TEMPLATE.md   
This file is used as a management summary for each work cycle (BY_CYCLE).  
It is written at the end of every work cycle such as a sprint, release or any defined time period and consolidates the main findings from the detailed logs of that cycle.  
The document provides a strategic overview: what was successfully completed, what remains open, the status of validations and checks and the overall risk level.  
It does not include technical details of the actions performed but rather a concise analysis of the results, intended for management and stakeholders.  
The file is linked to the technical logs for data verification and enables accurate managerial decisions for each work cycle independently.

---

### 📄 README.md  
מסמך זה מתפקד כמדריך עבודה לשכבת התיעוד כולה.  
הוא מסביר את ההבדל בין לוג מפורט לתקציר, באיזה שלב בכל תהליך נדרש עדכון, מי אחראי לכתיבה, ומתי נדרשת חתימה אנושית.  
בנוסף הוא מתאר איך הסוכן מעדכן אוטומטית את היומן, ואיך בני אדם יכולים להוסיף הערות או אימותים ידניים.  
המסמך גם כולל דוגמאות לפורמט שורה תקין ולמבנה אחיד של Commit ID, כדי להבטיח שכל פרויקט יפיק לוגים באותו מבנה בדיוק.  
מטרתו היא למנוע פיזור מידע בין קבצים שונים ולהבטיח שכל השינויים במערכת ניתנים למעקב ולשחזור מלאים, בלי תלות בכלי ניהול קוד חיצוני.


---
## 📁 planning — strategic planning and intent definition  

This folder is the starting point of every project.  
It is where the business need is translated into a clear and functional specification.  
It defines why the system exists, what it is expected to do, who it serves and how success will be measured.  
Without this folder the system may be built without a clear direction, without understanding the business context and without proper success criteria.  
The files here act as the single source of truth for every technical, architectural or procedural decision that follows.

---

### 📄 BUSINESS_REQUIREMENTS_TEMPLATE.md  
This document is the starting point of every project.  
It defines the business need and the justification for the system its purpose, the pain it solves, the users or customers involved and the results that will be considered true success.  
It also lists constraints such as regulatory, technological or budget limitations, expected risks and dependencies between teams or existing systems.  
The goal is to translate business language into technical and measurable terms so both the agent and the developer understand the context instead of only the task itself.  
This document sets the strategic direction of the entire development effort and every other file in this folder is based directly on it.  
When written correctly it prevents scope creep and ensures that every technical decision is evaluated against clear business value.

---

### 📄 PROJECT_SPEC_TEMPLATE.md  
This is the document where business needs become functional design.  
Here the questions are answered: what will the system actually do, which scenarios it will support and how the data will flow between components.  
The document includes detailed use cases, functional and non functional requirements, required interfaces and the expected system behavior under various conditions.  
It is the direct connection between the business concept and the future code. It is used by the architect during the blueprint stage and by the agent to understand its responsibility boundaries.  
The document is written in semi technical language so both product people and developers can understand it.  
It also becomes the basis for testing since every future test is measured against the requirements written here.

---

### 📄 PLAN_TEMPLATE.md  
This is the execution plan of the project.  
It is the document where all requirements become a real timeline with stages, milestones, areas of responsibility and dependencies.  
The document specifies who is responsible for each task whether human, agent or a joint effort and it defines a clear order of priorities.  
It also includes control metrics such as target dates, completion criteria and conditions for quality reviews.  
The goal is to create a unified language between all participants so each side knows when to intervene and when to allow the agent to operate independently.  
This document is also the source from which the automated pipeline is built. Every stage in the pipeline corresponds to a stage defined here.  
When it is maintained properly it enables precise process management and full transparency between planning and execution.

---

### 📄 README.md  
This file serves as a short guide for the entire folder but its role is especially important.  
It explains the logic connecting the three documents, how business requirements become functional specification and how the specification becomes an execution plan.  
It also describes the recommended work order: define requirements first, then define the solution and only then create the plan.  
The document clarifies who is allowed to update each file such as product manager, architect or tech lead and how to maintain consistency between them.  
Its purpose is to ensure that the folder remains the single source of truth for the project purpose and does not split into conflicting versions.  
This file guarantees that anyone joining the project understands the intended direction before touching the code.

---

## 📁 architecture — translating requirements into a practical engineering structure  

This folder serves as the bridge between the functional planning stage and the actual technical implementation.  
It defines the engineering structure of the system, its layers and components and the key architectural decisions made along the way.  
The folder allows developers, agents and architects to understand how the requirements are translated into real code and what considerations guided each technical choice.  
Every decision is documented so that in the future it is possible to revisit it, understand its logic and modify it in a well informed manner.

---

### 📄 ARCHITECTURE_BLUEPRINT_TEMPLATE.md  
This is the primary engineering document in the architecture folder.  
It is created from the official template:

```
MethodologyTemplates/architecture/ARCHITECTURE_BLUEPRINT_TEMPLATE.md
```

The blueprint translates the functional specification into a clear, structured engineering model.  
It describes the system’s layers, core components, responsibilities, and the data flows between them, including communication interfaces such as APIs, events and queues.

The document also specifies the main technical decisions that shape the system:  
the database and runtime environment, the frameworks being used, integration points with external systems, and the planned deployment approach.

It defines control points such as where permissions are validated, how logs are recorded, and when components communicate during the system lifecycle.

The blueprint serves as the architectural source of truth from which ADRs are derived.  
While the blueprint explains *what* the architecture is, ADRs document the key decisions that *led to it* and any changes made over time.

Its purpose is to ensure that developers, architects and product managers share the same mental model of the system,  
and that every implementation step — human or agent — remains aligned with the original architectural intent.


---
### 📄 ADR_INDEX_TEMPLATE.md  
This file is the official template for creating the Architectural Decision Record Index (ADR Index) in a project.  
The index is stored in:

```
docs/architecture/decisions/ADR_INDEX.md
```

The index gathers all ADRs in the system and provides:

• A quick understanding of the system’s decision map  
• Prevention of duplicate or conflicting decisions  
• Clear context for the agent  
• Easy navigation between decisions  

Each line in the index refers to exactly one ADR.

The template used to generate the index is located at:

```
MethodologyTemplates/architecture/ADR_INDEX_TEMPLATE.md
```

---

### 📁 ADR File Name Format

Every ADR must follow this naming convention:

```
ADR-YYYY-NN_<topic>.md
```

For example:

```
ADR-2025-09_Monolith_vs_Microservices.md
```

The sequential NN number ensures proper ordering and long-term traceability.

---

### 📑 Example of a Valid Index Entry

Each entry must follow this format:

```
- [ADR-YYYY-NN Decision Title](ADR-YYYY-NN_<topic>.md)
```

Example:

```
- [ADR-2025-09 Choosing a Modular Monolith over Microservices](ADR-2025-09_Monolith_vs_Microservices.md)
```

---

### 📝 Update Guidelines

• Every new ADR must be added to the index  
• The entries should be ordered by their sequential number (NN)  
• ADRs that were replaced or deprecated must remain in the index for historical clarity  
• The agent may update this file automatically, but a human may update it as well  

The ADR Index serves as the official “decision map” of the system,  
allowing both humans and the agent to work with a shared and consistent architectural context.

---
### 📄 ADR_TEMPLATE.md  
This file documents **Architecture Decision Records** using the official Docs-as-System structure.  
ADRs are stored in:

```
docs/architecture/decisions/
```

Each ADR is a standalone file with a sequential identifier:

```
ADR-YYYY-NN_<topic>.md
```

For example:

```
ADR-2025-09_Monolith_vs_Microservices.md
```

Every ADR must be listed in:

```
docs/architecture/decisions/ADR_INDEX.md
```

The index provides a full map of architectural decisions that both humans and the agent rely on.

The template used for creating new ADRs is:

```
MethodologyTemplates/architecture/ADR_TEMPLATE.md
```

Each ADR includes:

• The context  
• Alternatives considered  
• The final decision  
• Rationale  
• Expected consequences  
• Success metrics  
• Links to related documents  

This structure ensures long-term clarity, prevents conflicting decisions,  
and provides the agent with full architectural intent.

---

### 📄 README.md  
This document serves as a brief guide for the entire folder.  
It explains the relationship between the blueprint and the ADR files and the order in which they are used. First the overall structure is defined in the blueprint and then specific decisions are documented in the ADRs.  
It also clarifies who is permitted to update these files usually an architect or a tech lead and how to keep architecture aligned with planning.  
The document also explains that the agent can read these files in order to understand the system structure but is not allowed to change them without explicit human approval.  
This file ensures that the folder remains up to date, consistent and connected to both the planning and execution documents.

---
## 📁 project — wrapper documents, licensing, contribution and citation  

This folder ensures that every project maintains transparency, responsibility and public recognition of the work done by the team and the agents.  
It defines the formal rules of the project: licensing, contributions, credits and citation requirements.  
In addition it creates consistency between different projects and ensures that every code repository follows the same standards of documentation, responsibility and governance.

---

### 📄 README_TEMPLATE.md  
This is the official landing page of the project.  
It is written in a clear and consistent style so anyone developer, tester, manager or external user can immediately understand the purpose of the project, how it is structured and how to begin working with it.  
The document includes a short summary of the business objective, links to the planning documents and the architectural blueprint, installation and execution instructions and basic workflow guidelines.  
It also contains information about the folder structure, version policy and links to the LICENSE and CONTRIBUTING files.  
When a real project is created from this template the agent uses the information in this file to automatically generate the main repository README whether on GitHub or in an internal documentation system.

---

### 📄 PROJECT_OVERVIEW_TEMPLATE.md  
This document provides a complete and comprehensive picture of the identity of the project its goals, boundaries and main objectives.  
It is designed to give clear context to anyone joining the project whether a new developer, an AI agent or an external stakeholder.  
The document includes the project vision, the mission it is meant to accomplish, the target audience, the areas of responsibility and boundaries and measurable goals for both short and long term.  
In addition it lists the guiding values of the project for example code quality, accessibility, performance and security so that every technical or architectural decision is based on the same principles.  
The document also serves as a reference point for strategic review. It helps identify whether development still aligns with the original goals or if the project is drifting away from its intended direction.  
It is a living document that is updated whenever a significant shift occurs in the project and it forms the basis for clear communication between all collaborators.

---

### 📄 COMPLIANCE_AND_GOVERNANCE_TEMPLATE.md  
This document defines the compliance, governance and control policies of the project both for internal organizational requirements and external standards such as GDPR, SOC2 or ISO.  
It details which procedures must be followed in development, testing and deployment, how code reviews are conducted, what approval processes are required for critical changes and how full traceability is maintained for sensitive actions.  
In addition it provides guidelines for privacy, information security, permission and access management and documentation of legal or regulatory decisions that affect the system.  
The document also defines the oversight responsibilities: who is allowed to approve changes to sensitive documents, who supervises the agent and who is responsible for periodic audit reports.  
Its purpose is to ensure that the project meets all legal, technical and organizational standards and to prevent exposure to legal or operational risks.  
This is a critical document for enterprise, governmental or regulated projects where non compliance may lead to sanctions or systemic failure.

---

### 📄 README.md  
This file summarizes the purpose of the folder and explains the relationship between the three content areas inside it management, licensing and citation.  
It describes which files are required in a private or public project and which can be optional.  
It also includes guidelines for maintaining consistency between licensing and citation versions and clarifies the approval process that is required before modifying legal documents.  
The document also highlights the role of the agent in this folder. The agent is not allowed to modify LICENSE or CITATION files without explicit approval but it is responsible for ensuring that these files exist and are up to date.  
In this way the folder maintains the balance between technical flexibility and legal and documentation responsibility.

---

## 📁 automation — automation processes and controlled script execution  

This folder contains all the instructions, workflows and commands that enable the agent to operate and manage automated work cycles.  
Its purpose is to create a consistent operational infrastructure for every project so that each stage from running tests to merging code is executed with the same structure and the same rules.  
The automation here is not just technical code but part of the methodology itself. Every action is documented, verified and controlled according to clear policy.

---

### 📄 WORKFLOWS_GUIDE_TEMPLATE.md  
This is the master guide that explains how to build and manage consistent automation workflows in the project.  
The document describes the lifecycle of every process from the trigger such as opening a pull request through the execution stages such as testing, building and deployment and up to reporting into the logs folder.  
In addition it defines success metrics such as response times, error rates or the percentage of passing tests.  
It also includes instructions for synchronizing automated processes with the agent to ensure that every pipeline action is documented correctly.  
Its purpose is to prevent multiple conflicting workflow versions and to create a unified language for automation across teams and agents.  
In practice it is the first document any developer or agent reads before creating a new pipeline.

---

### 📄 VALIDATION_PIPELINE_TEMPLATE.md  
This document defines the stages of the validation pipeline a structured and continuous process that ensures every piece of code, document or change meets the required criteria before it continues through the system.  
The pipeline includes stages such as unit tests, integration tests, security scanning, compliance checks, document validation and consistency checks between code and documentation.  
Each stage returns a clear result: pass, fail or requires human review. In the case of a failure the process stops and a notification is sent to the logs and to the supervising human.  
The document also details the script hooks where Git scripts, security checks or deployment processes are executed.  
In addition it defines stop conditions situations where the pipeline must halt automatically such as detection of an exposed secret, a security failure or an unauthorized change in a critical file.  
The purpose of the document is to ensure that every change in the system goes through a fully controlled, transparent and automated validation process and that no agent can bypass validation stages without explicit approval.

---

### 📄 GUARDRAILS_TEMPLATE.md  
This is the file that defines the safety boundaries of automation.  
It lists all the rules designed to prevent mistakes or uncontrolled executions for example who is allowed to merge into the main branch, which stages require human approval, what conditions require stopping a process and how to revert to a previous version in case of failure.  
The document ensures that every automated system operates within predefined boundaries and does not violate established policy.  
It also records procedures for handling failures in real time such as sending alerts, generating an incident report and instructing the agent to stop execution.  
This is the file that prevents automation accidents and ensures human responsibility at every stage.  
In practice it defines the balance between what the agent may do autonomously and what requires human oversight.

---

### 📄 PROMPTS_LIBRARY_TEMPLATE.md  
A structured library of ready prompts for the agent organized by process type or context.  
It includes prompts for running tests, generating reports, creating documents, summarizing work cycles or correcting code.  
Each prompt is documented together with the context in which it may be used, an example of the expected output and whether approval is required before executing it.  
The purpose is to create consistency in the language used between human and agent so that every instruction is interpreted the same way in every project.  
This library also enables control over the quality of instructions. New versions can be added, approved or deprecated if they no longer align with project policy.  
Ultimately it transforms the work with the agent from an art of wording into a documented and repeatable method.

---

### 📁 git — closed script library for Git commands  

This folder contains a set of predefined scripts that perform Git operations for the agent in a controlled manner, preventing mistakes or direct access to the terminal.  
Each script performs one action only and returns a documented result to the logs.  
The purpose is to allow the agent to manage versions without risking sensitive data or acting outside organizational policy.

---

#### 📄 CREATE_BRANCH.sh  
A script that allows the agent or a human to open a new branch according to a fixed naming convention such as feature, bugfix or experiment.  
It ensures that the branch is created from the correct base branch, records the action in the log and returns an identifier for later use.  
This prevents the creation of undocumented or duplicate branches.

---

#### 📄 STAGE_AND_COMMIT.sh  
A script that performs staging and commit operations for all modified files according to a documented commit message that is generated automatically based on the changed file and its context.  
It verifies that the commit message follows the internal standard, updates the log and ensures that every change is linked to an existing work cycle.  
This maintains full trace alignment between the code and its documentation.

---

#### 📄 PUSH_BRANCH.sh  
Pushes the branch to the remote repository after verifying that the latest commit has been approved.  
The script documents the result of the action, detects errors and sends an alert if the push operation fails.  
It prevents uncontrolled pushes or pushes to the wrong branch.

---

#### 📄 OPEN_PULL_REQUEST.sh  
Opens a new pull request with a title and description generated automatically based on the changed files and the cycle logs.  
It tags the type of request such as feature, fix or refactor and includes a reference to the validation report.  
Every pull request creation is recorded in the appropriate cycle log.

---

#### 📄 MERGE_AFTER_APPROVAL.sh  
A script that performs a merge only after the request has been approved by a human reviewer or a CI system.  
It ensures that there are no conflicts, performs the merge, records it in the log and updates the cycle summary.  
If something fails it returns a failure message and performs an automatic rollback according to policy.

---

#### 📄 README.md  
A document that explains the purpose of each script, the inputs it accepts and the outputs it produces.  
In addition it includes guidelines for safe script execution and warns against running commands manually from the terminal.  
The purpose is to ensure that every Git action is documented, reproducible and controlled according to policy.

---

### 📄 README.md  
This file serves as the main guide for the automation layer.  
It explains the principles that guide all automated processes in the project how to define a continuous pipeline, how the safety boundaries operate and how full traceability is maintained between executions, logs and validation reports.  
The document makes it clear that the agent does not run raw commands and only uses approved scripts stored in this folder.  
It also defines the success metrics of the automation layer that every execution must be reproducible, every process must support safe stopping and every result must be linked clearly to a cycle, task or version.  
This is the central documentation file that holds the operational logic of the entire automation layer of the project.

---
## 📄 README.md (root of templates) — the main guide for the entire structure  

This is the main README file of the templates folder and it serves as the central entry point for understanding the entire methodology.  
This file explains the philosophy behind Docs as System, the structure of the layers and folders and the way all parts integrate with one another.  
It describes the life cycle of a project from the initial planning stage to the final deployment and shows how each folder contributes to the overall process.  
In addition the document explains the integration with the AI agent how the agent reads the documents, executes actions, reports to the logs and generates validation reports.  
It also defines success criteria for a Docs as System based project such as recoverability, transparency, human oversight and documentation consistency.  
This file is the first place new developers, project managers or agents visit when they begin working with the methodology and it serves as a roadmap for understanding everything.

---

# 📄 METHODOLOGY_OVERVIEW.md — this document  

This document the one you are reading right now is an extended and detailed expansion of the main README.  
It is designed to provide an in depth description of every folder, every file and every role within the methodology.  
While the main README gives a high level picture and logical flow this document dives into the technical and operational details of each component.  
It serves as a complete knowledge source for anyone who wants to understand the methodology deeply, adapt it to specific needs or teach it to additional teams.

---
# General Summary of the Structure  

## Purpose of the Library  

**templates** is the official template library of the **Docs as System** methodology.  
It defines the complete lifecycle of an AI assisted software project.  
The goal is to create a unified, consistent and transparent structure for every new project from the initial planning stage through automation while maintaining living documentation and continuous human oversight.  

The library provides a complete starting point for any team or agent that wants to work according to the methodology with ready templates for every operational layer in the system.  

---

## Layer Structure  

| Layer | Purpose |
|:------|:--------|
| **📁 agent** | Defines the agent, its working environment and the policies that govern it. |
| **📁 logs** | Maintains accurate documentation of every action, change and control performed in the project. |
| **📁 planning** | Documents the initial intent, the business requirements and the functional specification. |
| **📁 architecture** | Maps the planning into a clear technical structure with documented architectural decisions. |
| **📁 project** | Collects the formal project documents such as licensing, contribution and citation. |
| **📁 automation** | Executes automated processes such as pipelines, tests and scripts with full control and safety. |

---
  
## Project life cycle according to Docs as System  

1. **Planning**  
   Begin with understanding the reason behind the project.  
   Define business requirements, specifications and the stages of execution.

2. **Architecture**  
   Define the way the system will be built.  
   System structure, components, contracts and data flows.

3. **Agent**  
   Define the rules, permissions and security controls that guide the agent.

4. **Logs**  
   Document every change, action or decision in real time to create full traceability.

5. **Automation**  
   Run automated processes that execute each stage in a consistent, safe and documented way.

6. **Project**  
   Manage project licensing, contributions and citations while preserving external transparency.

All layers are connected to each other through explicit links between files and documentation.  
The method is based on one simple principle: **every action must be explained, documented and controlled**.

---

## Integration with the AI agent  

The agent operates based on this structure:  
- It reads the planning and policy documents.  
- It performs actions such as creating branches, writing code or updating documentation.  
- It reports every action to the logs folder.  
- It generates validation reports at the end of each work cycle.  
- It runs only controlled automation processes.  

The human maintains oversight through permission control and operational policy.  
This creates a clear separation between **precise automated execution** and **human responsibility for the outcome**.

---

## Success criteria  

A Docs as System project is considered healthy when the following conditions are met:  
- Every action can be reconstructed at any time.  
- Every process can be stopped safely at any point.  
- Every change has documentation, context and human approval.  
- Every agent operates strictly within its allowed configuration.  
- Every architectural, business or operational decision is documented in its proper location.  

---

## 📄 README.md (root of templates) — the main guide for the entire structure  

This is the main README file of the templates folder and it serves as the central entry point for understanding the entire methodology.  
This file explains the philosophy behind Docs as System, the structure of the layers and folders and the way all parts integrate with one another.  
It describes the life cycle of a project from the initial planning stage to the final deployment and shows how each folder contributes to the overall process.  
In addition the document explains the integration with the AI agent, how the agent reads the documents, performs actions, reports to the logs and generates validation reports.  
It also defines success criteria for a Docs as System based project such as recoverability, transparency, human oversight and documentation consistency.  
This file is the first place that new developers, project managers or agents visit when beginning to work with the methodology and it serves as a roadmap for understanding everything.

---

## 📄 METHODOLOGY_OVERVIEW.md — this document  

This document, the one you are reading now, is a detailed expansion of the main README.  
It provides an in depth description of every folder, every file and every role within the methodology.  
While the main README gives a general picture and a logical flow, this document dives into the technical and operational details of each component.  
It serves as a complete knowledge source for anyone who wants to understand the method deeply, adapt it to specific needs or guide additional teams.

---

## Summary  

The **templates** library is not only a collection of files, it is the implementation of a complete methodology.  
It turns the project into a living documentation system where every component, document or action becomes part of a single, controlled and documented information flow.  
The agent executes, the human approves and the system explains itself along the entire way.

---

© 2025 Tomer Kedem. Part of the official template collection of **Docs as System**.
