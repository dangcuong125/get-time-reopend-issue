# Get Time Issue Reopened

> Supports get time issue reopened.

[![Test Status](https://github.com/satak/webrequest-action/workflows/Test/badge.svg)](https://github.com/dangcuong125/get-time-reopend-issue/actions)

## Usage

### `GET` request

```yaml
uses: dangcuong125/get-time-reopend-issue@main
with:
  url: https://my-json-server.typicode.com/typicode/demo/posts
  headers: '{"Authorization": "token ****"}'
```

## Inputs

| Parameter | Required | Info                               |
| --------- | -------- | ---------------------------------- |
| `url`     | `true`   | Web request URL endpoint           |
| `headers` | `false`  | Web request headers in JSON format |

## Outputs

Output format: `JSON`

```json
{
  "output": "<str url>"
}
```

### Example output usage

```yaml
run: |
  $output = '${{ steps.get-request.outputs.output }}'
```

## License

[MIT](LICENSE)
