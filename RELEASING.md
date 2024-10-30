# RELEASING

Automated releases to NPM are not supported at this time to prevent exposing valid NPM token paths to the public.

## Steps

We recommend the following steps to manually release a version:

- Create a PR with your changes including a version bump in `package.json` following the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/).
- Merge the PR after reviews and approvals from the team.
- Log in to the Contentsquare NPM (request write access in the team) and publish using the commands below
  ```bash
  npm login
  npm publish --access public
  ```
- You can publish a beta version to test your PR before merging using the commands:
  ```bash
  npm login
  npm publish --tag beta
  ```
- Check the NPM registry to verify that your release was published

  ```bash
  # fetch the latest version
  npm show @contentsquare/tag-sdk version

  # fetch all versions
  npm show @contentsquare/tag-sdk versions --json
  ```
