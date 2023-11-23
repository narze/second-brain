---
title: "Adding Tailscale to Rails App"
---
  - `tailscale cert [hostname].[alias].ts.net` 
    - e.g. `tailscale cert noom-do.risk-in.ts.net`
  - `bin/rails s -b 'ssl://0.0.0.0:3000?key=path/to/file].key&cert=path/to/file.crt'`
  - Add `config.hosts << "noom-do.risk-in.ts.net"` to ruenvironment.rb
  - #rails encode uri with `ERB::Util.url_encode` (Better than `URI.escape` for spaces)