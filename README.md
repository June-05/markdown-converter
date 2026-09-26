# AI USE DISCLAIMER
### The following contents/code are AI assisted/generated
- Regex patterns for matching
- README.md
- Logic for aligning tabs
  
# Live Markdown Converter & Dynamic Editor

A lightweight, zero-dependency, browser-based tool that instantly translates raw Markdown into HTML code and renders a live visual preview. 

Beyond text parsing, this project features an advanced, math-free CSS layout engine that seamlessly orchestrates tabs, expanding panels, and dynamic grids—all adapting in real-time to your workflow.

## 🚀 Core Features

### 1. Real-Time Markdown Engine
A custom regex-based parsing engine translates syntax into valid HTML tags on the fly. The conversion logic strictly respects the order of execution (e.g., parsing `###` before `#`, and images before links via negative lookbehinds) to prevent HTML tag collisions.
*   **Headings:** H1 to H3 (`#`, `##`, `###`)
*   **Text Formatting:** Bold (`**` or `__`) and Italic (`*` or `_`)
*   **Blockquotes:** (`> quote`)
*   **Links & Images:** Standard embeds (`[text](url)` and `![alt](url)`)

### 2. Advanced CSS Layout System
The UI utilizes a highly responsive, combined CSS Grid and Flexbox architecture that solves complex geometric alignment challenges natively, without relying on JavaScript math.
*   **The 12-Column Smart Grid:** The navigation tabs sit on a 12-column CSS Grid. Using modern CSS Native Nesting and the `:has()` pseudo-class, the grid actively counts how many panels are visible and recalculates column spans dynamically.
*   **Perfect Alignment Logic:** When exactly two panels are active (sharing the screen 50/50), the CSS uses a clever `~` sibling combinator trick to force the first active tab to `span 6`. This ensures the second tab always starts perfectly at the 50% mark, flawlessly anchoring the tabs to the Flexbox content columns below them.
*   **Intelligent Ordering:** Tabs reorganize visually using CSS `order` and `.active`/`.maximized` state classes while retaining their DOM structure.

### 3. Adaptive Workspace
*   **Maximize & Minimize Panels:** Expand individual containers (Input, HTML, or Preview) to take over the viewport for a distraction-free workflow. The master wrapper ensures tabs always follow the content context.
*   **Auto-Resizing Editor:** Text areas utilize `min-width: 0` and modern auto-sizing techniques to expand and contract smoothly without breaking their flex containers.
*   **Built-in Markdown Cheat Sheet:** The editor features integrated placeholders to guide users through syntax formatting immediately upon loading.
*   **Scalable UI Elements:** Icons are perfectly centered using inline-flex and sized dynamically with `em` units, ensuring they scale naturally with your font settings.
