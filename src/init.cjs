const fs = require("fs");
const path = require("path");
const https = require("https");

// Update here if the username or repo are different
const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/tomkedem/docs-as-system-starterkit/main/templates";

// All template files and their destination in the new project
const TEMPLATE_FILES = [
  // agent
  {
    src: "agent/AGENT_CONFIG_TEMPLATE.yaml",
    dest: "docs/agent/AGENT_CONFIG.yaml"
  },
  {
    src: "agent/AGENT_OPERATIONAL_POLICY_TEMPLATE.md",
    dest: "docs/agent/AGENT_OPERATIONAL_POLICY.md"
  },
  {
    src: "agent/HUMAN_OPERATIONAL_POLICY_TEMPLATE.md",
    dest: "docs/agent/HUMAN_OPERATIONAL_POLICY.md"
  },
  {
    src: "agent/SECURITY_CHECKLIST_TEMPLATE.md",
    dest: "docs/agent/SECURITY_CHECKLIST.md"
  },
  {
    src: "agent/VALIDATION_REPORT_TEMPLATE.md",
    dest: "docs/agent/VALIDATION_REPORT.md"
  },

  // architecture
  {
    src: "architecture/ADR_TEMPLATE.md",
    dest: "docs/architecture/ADR.md"
  },
  {
    src: "architecture/ARCHITECTURE_BLUEPRINT_TEMPLATE.md",
    dest: "docs/architecture/ARCHITECTURE_BLUEPRINT.md"
  },

  // automation
  {
    src: "automation/VALIDATION_PIPELINE_TEMPLATE.md",
    dest: "docs/automation/VALIDATION_PIPELINE.md"
  },
  {
    src: "automation/WORKFLOWS_GUIDE_TEMPLATE.md",
    dest: "docs/automation/WORKFLOWS_GUIDE.md"
  },
  {
    src: "automation/GUARDRAILS_TEMPLATE.md",
    dest: "docs/automation/GUARDRAILS.md"
  },
  {
    src: "automation/PROMPTS_LIBRARY_TEMPLATE.md",
    dest: "docs/automation/PROMPTS_LIBRARY.md"
  },

  // logs
  {
    src: "logs/IMPLEMENTATION_LOG_TEMPLATE.md",
    dest: "docs/logs/IMPLEMENTATION_LOG.md"
  },
  {
    src: "logs/IMPLEMENTATION_LOG_BY_CYCLE_TEMPLATE.md",
    dest: "docs/logs/IMPLEMENTATION_LOG_BY_CYCLE.md"
  },
  {
    src: "logs/IMPLEMENTATION_LOG_SUMMARY_TEMPLATE.md",
    dest: "docs/logs/IMPLEMENTATION_LOG_SUMMARY.md"
  },
  {
    src: "logs/IMPLEMENTATION_LOG_SUMMARY_TEMPLATE.en.md",
    dest: "docs/logs/IMPLEMENTATION_LOG_SUMMARY.en.md"
  },

  // planning
  {
    src: "planning/BUSINESS_REQUIREMENTS_TEMPLATE.md",
    dest: "docs/planning/BUSINESS_REQUIREMENTS.md"
  },
  {
    src: "planning/PLAN_TEMPLATE.md",
    dest: "docs/planning/PLAN.md"
  },
  {
    src: "planning/PROJECT_SPEC_TEMPLATE.md",
    dest: "docs/planning/PROJECT_SPEC.md"
  },

  // project
  {
    src: "project/COMPLIANCE_AND_GOVERNANCE_TEMPLATE.md",
    dest: "docs/project/COMPLIANCE_AND_GOVERNANCE.md"
  },
  {
    src: "project/PROJECT_OVERVIEW_TEMPLATE.md",
    dest: "docs/project/PROJECT_OVERVIEW.md"
  },
  {
    src: "project/README_TEMPLATE.md",
    dest: "docs/project/README.md"
  },
  // root changelog
  {
    src: "CHANGELOG_TEMPLATE.md",
    dest: "CHANGELOG.md"
  },
  {
    src: "PROJECT_IMPLEMENTATION_GUIDE.md",
    dest: "PROJECT_IMPLEMENTATION_GUIDE.md"
  },
  {
    src: "METHODOLOGY_OVERVIEW.md",
    dest: "docs/METHODOLOGY_OVERVIEW.md"
  }
];

// Download a single file
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(destPath);
    fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(destPath);

    https
      .get(url, res => {
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(destPath, () => {});
          return reject(
            new Error(`Failed to download ${url} (status ${res.statusCode})`)
          );
        }

        res.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", err => {
        file.close();
        fs.unlink(destPath, () => {});
        reject(err);
      });
  });
}

// Copy starter-project skeleton (empty src, docs, README, etc.)
async function copyDir(source, target) {
  await fs.promises.mkdir(target, { recursive: true });
  const entries = await fs.promises.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

// Download all templates from GitHub into the project's docs folder
async function downloadTemplatesIntoProject(targetDir) {
  console.log("[Docs-as-System Extension] Downloading templates from GitHub into project structure ...");

  for (const tpl of TEMPLATE_FILES) {
    const url = `${GITHUB_RAW_BASE}/${tpl.src}`;
    const dest = path.join(targetDir, tpl.dest);

    console.log(`  → ${tpl.src}  →  ${tpl.dest}`);
    await downloadFile(url, dest);
  }

  console.log("[Docs-as-System Extension] All templates downloaded.\n");
}

async function run() {
  const args = process.argv.slice(2);
  const command = args[0];
  const targetName = args[1];

  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command !== "init") {
    console.error("[Docs-as-System Extension] Unknown command:", command);
    printHelp();
    process.exit(1);
  }

  if (!targetName) {
    console.error("[Docs-as-System Extension] Missing project name.");
    console.log("Usage: node init.cjs init <project-name>");
    process.exit(1);
  }

  const cwd = process.cwd();
  const targetDir = path.join(cwd, targetName);
  const starterProjectDir = path.join(__dirname, "..", "starter-project");

  if (!fs.existsSync(starterProjectDir)) {
    throw new Error("starter-project directory not found inside the package");
  }

  if (fs.existsSync(targetDir)) {
    throw new Error(`Target directory already exists: ${targetDir}`);
  }

  console.log("[Docs-as-System Extension] Creating new Docs-as-System project at:");
  console.log("        " + targetDir);
  console.log();

    // Step 1: Basic skeleton from Starter Project
  await copyDir(starterProjectDir, targetDir);
  await fs.promises.mkdir(path.join(targetDir, "src"), { recursive: true });

    // Step 2: Download templates into docs
  await downloadTemplatesIntoProject(targetDir);

  console.log("[Docs-as-System Extension] Done.\n");
  console.log("Next steps:");
  console.log(`  cd ${targetName}`);
  console.log("  Open docs/agent/AGENT_CONFIG.yaml and configure the agent behavior.");
  console.log("  Review the documentation templates under docs/");
  console.log("  Start coding inside src/");
}

function printHelp() {
  console.log("Docs-as-System VS Code Extension - Project Generator");
  console.log();
  console.log("Usage:");
  console.log("  node init.cjs init <project-name>   Create a new Docs-as-System project");
  console.log("  node init.cjs help                  Show this help message");
  console.log();
}

module.exports = { run };

if (require.main === module) {
  run().catch(err => {
    console.error("[Docs-as-System Extension] Unhandled error:", err);
    process.exit(1);
  });
}