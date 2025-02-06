"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7732],{1349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/custom-extensions","title":"Building Custom Extensions","description":"Create your own custom MCP Server to use as a Goose extension","source":"@site/docs/tutorials/custom-extensions.md","sourceDirName":"tutorials","slug":"/tutorials/custom-extensions","permalink":"/goose/pr-preview/pr-1127/docs/tutorials/custom-extensions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Building Custom Extensions","sidebar_position":1,"description":"Create your own custom MCP Server to use as a Goose extension"},"sidebar":"tutorialSidebar","previous":{"title":"Tutorials","permalink":"/goose/pr-preview/pr-1127/docs/category/tutorials"},"next":{"title":"Developer Extension","permalink":"/goose/pr-preview/pr-1127/docs/tutorials/developer-mcp"}}');var s=t(4848),o=t(8453);const r={title:"Building Custom Extensions",sidebar_position:1,description:"Create your own custom MCP Server to use as a Goose extension"},a="Building Custom Extensions with Goose",c={},l=[{value:"Step 1: Initialize Your Project",id:"step-1-initialize-your-project",level:2},{value:"Step 2: Write Your MCP Server Code",id:"step-2-write-your-mcp-server-code",level:2},{value:"<code>server.py</code>",id:"serverpy",level:3},{value:"<code>__init__.py</code>",id:"__init__py",level:3},{value:"<code>__main__.py</code>",id:"__main__py",level:3},{value:"Step 3: Define Project Configuration",id:"step-3-define-project-configuration",level:2},{value:"Step 4: Test Your MCP Server",id:"step-4-test-your-mcp-server",level:2},{value:"Using MCP Inspector",id:"using-mcp-inspector",level:3},{value:"Testing the CLI",id:"testing-the-cli",level:3},{value:"Step 5: Integrate with Goose",id:"step-5-integrate-with-goose",level:2},{value:"Step 6: Use Your Extension in Goose",id:"step-6-use-your-extension-in-goose",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"building-custom-extensions-with-goose",children:"Building Custom Extensions with Goose"})}),"\n",(0,s.jsxs)(n.p,{children:["Goose allows you to extend its functionality by creating your own custom extensions, which are built as MCP servers. These extensions are compatible with Goose because it adheres to the ",(0,s.jsx)(n.a,{href:"https://modelcontextprotocol.io/",children:"Model Context Protocol (MCP)"}),". MCP is an open protocol that standardizes how applications provide context to LLMs. It enables a consistent way to connect LLMs to various data sources and tools, making it ideal for extending functionality in a structured and interoperable way.\xa0"]}),"\n",(0,s.jsxs)(n.p,{children:["In this guide, we build an MCP server using the ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/python-sdk",children:"Python SDK for MCP"}),". We\u2019ll demonstrate how to create an MCP server that reads Wikipedia articles and converts them to Markdown, integrate it as an extension in Goose. You can follow a similar process to develop your own custom extensions for Goose."]}),"\n",(0,s.jsxs)(n.p,{children:["You can checkout other examples in this ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers",children:"MCP servers repository"}),". MCP SDKs are also available in ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/typescript-sdk",children:"Typescript"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/kotlin-sdk",children:"Kotlin"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Goose currently supports Tools and Resources for ",(0,s.jsx)(n.a,{href:"https://spec.modelcontextprotocol.io/specification/2024-11-05/server/",children:"MCP Server features"}),".\nWe will be adding support for MCP Prompts soon."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-1-initialize-your-project",children:"Step 1: Initialize Your Project"}),"\n",(0,s.jsxs)(n.p,{children:["The first step is to create a new project using ",(0,s.jsx)(n.a,{href:"https://docs.astral.sh/uv/getting-started/",children:"uv"}),". We will name our project ",(0,s.jsx)(n.code,{children:"mcp-wiki"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Run the following commands in your terminal to set up a basic structure for your MCP server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"uv init mcp-wiki\n\ncd mcp-wiki\nrm hello.py\n\nmkdir -p src/mcp_wiki\ntouch src/mcp_wiki/server.py  # Your MCP server code (tool, resources, prompts)\ntouch src/mcp_wiki/__init__.py  # Primary CLI entry point\ntouch src/mcp_wiki/__main__.py # To enable running as a Python module\n"})}),"\n",(0,s.jsx)(n.p,{children:"Your project directory structure should look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 pyproject.toml\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 mcp_wiki\n\u2502       \u251c\u2500\u2500 __init__.py\n\u2502       \u251c\u2500\u2500 __main__.py\n\u2502       \u2514\u2500\u2500 server.py\n\u2514\u2500\u2500 uv.lock\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-2-write-your-mcp-server-code",children:"Step 2: Write Your MCP Server Code"}),"\n",(0,s.jsx)(n.p,{children:"In this step, we\u2019ll implement the core functionality of the MCP server. Here is a breakdown of the key components:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"server.py"})}),": This file holds the main MCP server code. In this example, we define a single tool to read Wikipedia articles. You can add your own custom tools, resources, and prompts here."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"__init__.py"})}),": This is the primary CLI entry point for your MCP server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"__main__.py"})}),": This file allows your MCP server to be executed as a Python module."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Below is the example implementation for the Wikipedia MCP server:"}),"\n",(0,s.jsx)(n.h3,{id:"serverpy",children:(0,s.jsx)(n.code,{children:"server.py"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\nfrom requests.exceptions import RequestException\nfrom bs4 import BeautifulSoup\nfrom html2text import html2text\n\nfrom mcp.server.fastmcp import FastMCP\nfrom mcp.shared.exceptions import McpError\nfrom mcp.types import ErrorData, INTERNAL_ERROR, INVALID_PARAMS\n\nmcp = FastMCP("wiki")\n\n@mcp.tool()\ndef read_wikipedia_article(url: str) -> str:\n    """\n    Fetch a Wikipedia article at the provided URL, parse its main content,\n    convert it to Markdown, and return the resulting text.\n\n    Usage:\n        read_wikipedia_article("https://en.wikipedia.org/wiki/Python_(programming_language)")\n    """\n    try:\n        # Validate input\n        if not url.startswith("http"):\n            raise ValueError("URL must start with http or https.")\n\n        response = requests.get(url, timeout=10)\n        if response.status_code != 200:\n            raise McpError(\n                ErrorData(\n                    INTERNAL_ERROR,\n                    f"Failed to retrieve the article. HTTP status code: {response.status_code}"\n                )\n            )\n\n        soup = BeautifulSoup(response.text, "html.parser")\n        content_div = soup.find("div", {"id": "mw-content-text"})\n        if not content_div:\n            raise McpError(\n                ErrorData(\n                    INVALID_PARAMS,\n                    "Could not find the main content on the provided Wikipedia URL."\n                )\n            )\n\n        # Convert to Markdown\n        markdown_text = html2text(str(content_div))\n        return markdown_text\n\n    except ValueError as e:\n        raise McpError(ErrorData(INVALID_PARAMS, str(e))) from e\n    except RequestException as e:\n        raise McpError(ErrorData(INTERNAL_ERROR, f"Request error: {str(e)}")) from e\n    except Exception as e:\n        raise McpError(ErrorData(INTERNAL_ERROR, f"Unexpected error: {str(e)}")) from e\n'})}),"\n",(0,s.jsx)(n.h3,{id:"__init__py",children:(0,s.jsx)(n.code,{children:"__init__.py"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import argparse\nfrom .server import mcp\n\ndef main():\n    """MCP Wiki: Read Wikipedia articles and convert them to Markdown."""\n    parser = argparse.ArgumentParser(\n        description="Gives you the ability to read Wikipedia articles and convert them to Markdown."\n    )\n    parser.parse_args()\n    mcp.run()\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"__main__py",children:(0,s.jsx)(n.code,{children:"__main__.py"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from mcp_wiki import main\n\nmain()\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-3-define-project-configuration",children:"Step 3: Define Project Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Configure your project using ",(0,s.jsx)(n.code,{children:"pyproject.toml"}),".\xa0This configuration defines the CLI script so that the mcp-wiki command is available as a binary. Below is an example configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[project]\nname = "mcp-wiki"\nversion = "0.1.0"\ndescription = "MCP Server for Wikipedia"\nreadme = "README.md"\nrequires-python = ">=3.13"\ndependencies = [\n    "beautifulsoup4>=4.12.3",\n    "html2text>=2024.2.26",\n    "mcp[cli]>=1.2.0",\n    "requests>=2.32.3",\n]\n\n[project.scripts]\nmcp-wiki = "mcp_wiki:main"\n\n[build-system]\nrequires = ["hatchling"]\nbuild-backend = "hatchling.build"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-4-test-your-mcp-server",children:"Step 4: Test Your MCP Server"}),"\n",(0,s.jsx)(n.h3,{id:"using-mcp-inspector",children:"Using MCP Inspector"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Setup the project environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"uv sync\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Activate your virtual environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source .venv/bin/activate\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run your server in development mode:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mcp dev src/mcp_wiki/server.py\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.code,{children:"http://localhost:5173"})," in your browser to open the MCP Inspector UI."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['In the UI, you can click "Connect" to initialize your MCP server. Then click on "Tools" tab > "List Tools" and you should see the ',(0,s.jsx)(n.code,{children:"read_wikipedia_article"})," tool.\nThen you can try to call the ",(0,s.jsx)(n.code,{children:"read_wikipedia_article"}),' tool with URL set to "',(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Bangladesh",children:"https://en.wikipedia.org/wiki/Bangladesh"}),'" and click "Run Tool".']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"MCP Inspector UI",src:t(8359).A+"",width:"1413",height:"820"})}),"\n",(0,s.jsx)(n.h3,{id:"testing-the-cli",children:"Testing the CLI"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install your project locally:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"uv pip install .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the executable in your virtual environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls .venv/bin/  # Verify your CLI is available\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test the CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mcp-wiki --help\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see output similar to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"\u276f mcp-wiki --help\nusage: mcp-wiki [-h]\n\nGives you the ability to read Wikipedia articles and convert them to Markdown.\n\noptions:\n  -h, --help  show this help message and exit\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-5-integrate-with-goose",children:"Step 5: Integrate with Goose"}),"\n",(0,s.jsx)(n.p,{children:"To add your MCP server as an extension in Goose:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.code,{children:"Settings > Extensions > Add"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Set the ",(0,s.jsx)(n.code,{children:"Type"})," to ",(0,s.jsx)(n.code,{children:"StandardIO"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Provide the ID, name, and description for your extension."}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Command"})," field, provide the absolute path to your executable. For example:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"uv run /full/path/to/mcp-wiki/.venv/bin/mcp-wiki\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Alternatively in Step 3, you can also publish your package to pypi.\xa0Once published, the server can be run directly using uvx. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"uvx mcp-wiki\n"})}),"\n",(0,s.jsx)(n.p,{children:"For the purposes on this guide, we will show you how to run the local version.\xa0"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Goose Settings for Adding Custom Extension",src:t(2972).A+"",width:"627",height:"776"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"step-6-use-your-extension-in-goose",children:"Step 6: Use Your Extension in Goose"}),"\n",(0,s.jsx)(n.p,{children:"Once integrated, you can start using your extension in Goose. Open the Goose chat interface and call your tool as needed."}),"\n",(0,s.jsx)(n.p,{children:'You can verify that Goose has picked up the tools from your custom extension by asking it "what tools do you have?"'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Goose Chat - Ask about tools",src:t(5874).A+"",width:"736",height:"502"})}),"\n",(0,s.jsx)(n.p,{children:"Then, you can try asking questions that require using the extension you added."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Goose Chat - Use custom extension",src:t(321).A+"",width:"1179",height:"1106"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83c\udf89 ",(0,s.jsx)(n.strong,{children:"Congratulations!"})," You\u2019ve successfully built and integrated a custom MCP server with Goose."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},321:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/custom-extension-chat-dade20fed6d387174db32667977bdae1.png"},8359:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/custom-extension-mcp-inspector-aca22c16eb49051723a6ed413fd53fe7.png"},2972:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/custom-extension-settings-2f8639f68e9bde86c64af6518d2c0a2a.png"},5874:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/custom-extension-tools-9d440447ae99b18ae92819e652148abe.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);