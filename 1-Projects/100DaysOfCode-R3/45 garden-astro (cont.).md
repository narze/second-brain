# Dev mode
This mode will support editing notes on Obsidian and preview on the browser without pulling notes from Github (narze/garden), while it won't affect existing notes and git history
- Use `chokidar` to watch my Obsidian vault
    - [ ] Check if saving file on Obsidian trigger the event
    - When saved, copy the file to narze/garden/src/content/local
    - Clear /local path on exit
    - 