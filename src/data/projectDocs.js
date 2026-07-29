// Long-form docs for projects with a story beyond the README card.

export const projectDocs = {
  shipgate: `
<h2><span class="hash">##</span> What it is</h2>
<p><strong>ShipGate</strong> is a portable quality-gate orchestrator for Python projects. One policy file drives a metadata-driven catalog of checks, formatters, and structural refactors — local CI, pre-commit, and a report UI without hand-rolled glue in every repo.</p>

<h2><span class="hash">##</span> Why I built it</h2>
<p>Every team ends up with the same drift: half a dozen tool configs, slightly different scopes, and a pre-commit file that nobody wants to touch. I wanted one abstraction that survives the next tool — policy at the top, adapters at the edge, execution in the middle.</p>

<h2><span class="hash">##</span> Try it</h2>
<p><code>pip install shipgate</code> — full docs at <a href="https://inquilabee.github.io/shipgate/">inquilabee.github.io/shipgate</a>.</p>
`,

  pdschema: `
<h2><span class="hash">##</span> What it is</h2>
<p><strong>pdschema</strong> brings schema validation and contracts to Pandas DataFrames — column types, custom checks, decorators for function inputs and outputs.</p>

<h2><span class="hash">##</span> Why I built it</h2>
<p>Pandas projects rarely write the same validation twice because it's tedious, not because it's optional. A small library that makes contracts normal beats ad-hoc <code>assert</code> soup in every pipeline.</p>

<h2><span class="hash">##</span> Try it</h2>
<p><code>pip install pdschema</code></p>
`,

  streamtabs: `
<h2><span class="hash">##</span> What it is</h2>
<p><strong>streamtabs</strong> is a small framework for Streamlit multi-tab apps — session state and data dependencies without the usual spaghetti.</p>

<h2><span class="hash">##</span> Try it</h2>
<p><code>pip install streamtabs</code></p>
`,

  TableCV: `
<h2><span class="hash">##</span> What it is</h2>
<p><strong>TableCV</strong> extracts tables from images using an OpenCV pipeline — for when the data was never meant to be CSV.</p>

<h2><span class="hash">##</span> Try it</h2>
<p><code>pip install tablecv</code></p>
`,

  LinkedinPy: `
<h2><span class="hash">##</span> What it is</h2>
<p><strong>LinkedinPy</strong> automates LinkedIn flows in Python — sessions, browser reality, and flows that survive messy sites. On PyPI as <code>autolinkedin</code>.</p>

<h2><span class="hash">##</span> Try it</h2>
<p><code>pip install autolinkedin</code></p>
`,
};
