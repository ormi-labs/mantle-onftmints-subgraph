
# Deploy

```shell
cp package.json.example package.json
```

To deploy this subgraph, go through `package.json` file first and substitute all the placeholders with valid arguments.

| placeholder | argument                                                                                                                        |
| ------ |---------------------------------------------------------------------------------------------------------------------------------|
| `<HTTP://GRAPH_NODE_HOST:PORT>` | A valid host where [Graph Node](https://github.com/graphprotocol/graph-node) is running. Server2 ex.: http://65.109.19.223:8020 |
| `<HTTP://IPFS_HOST:PORT>` | A valid host where [IPFS](https://ipfs.tech/) is running. Server2 ex.: http://65.109.19.223:5001                                |
| `<API_KEY>` | An API key available at https://app.0xgraph.xyz/dashboard/api                                                                   |
| `<CLI_EXACT_VERSION>` | A [0xgraph-cli](https://github.com/ormi-labs/0xgraph-cli) published version. Ex.: "0.0.5"                                             |

Subgraph name also can be adjusted per existing naming policy or for simpler tracking.

```shell
pnpm install

pnpm 0xcodegen
pnpm 0xbuild
pnpm 0xcreate
pnpm 0xdeploy
```

```graphql
query {
  onftmints(subgraphError: deny, first: 100) {
    minter
    referrer
    mintId
    referralEarnings
    protocolEarnings
  }
}
```
