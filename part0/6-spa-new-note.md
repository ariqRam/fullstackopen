```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: a payload is also sent in JSON format
    server-->>browser: Status Code : 201 Created
    deactivate server
    Note right of browser : No redirect triggered
```