# 0.5: SPA Diagram

This diagram depicts the situation where the user goes to the single-page app version of the notes app at <https://studies.cs.helsinki.fi/exampleapp/spa>.

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant S as Server

    U->>B: Types URL https://studies.cs.helsinki.fi/exampleapp/spa
    B->>S: GET /exampleapp/spa
    S->>B: HTML document

    Note over B: Browser starts parsing HTML

    B->>S: GET /exampleapp/main.css
    S->>B: CSS file

    B->>S: GET /exampleapp/spa.js
    S->>B: JavaScript file (SPA logic)

    Note over B: JavaScript file executes
    Note over B: SPA application initializes

    B->>S: GET /exampleapp/data.json
    S->>B: JSON data with all notes

    Note over B: JavaScript renders notes on the page
    Note over B: SPA is fully loaded and interactive
    Note over U,B: User sees the notes list in a single-page application
```
