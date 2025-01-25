# UUID GitHub Action

GitHub Action to create generate [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier).

## Inputs

None.

## Outputs

### `uuid`

The generated UUID.

## Example usage

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    name: Test UUID action
    steps:
      - name: Set UUID
        id: generate-uuid
        uses: danysk/uuid-action@1.0.1
      # use the output from the `generate-uuid` step
      - name: Get the UUID
        run: echo "UUID is ${{ steps.generate-uuid.outputs.uuid }}"
```
