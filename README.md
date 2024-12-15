
# test-release
> A test shot for semantic-release.

## info

The module first verifies the branch and conditions, then analyzes commit messages to determine the version bump (major, minor, or patch). It generates release notes, updates the changelog, and bumps the version in package.json and package-lock.json. After running any custom scripts, it commits the changes and creates a new GitHub release with the updated notes. This ensures an automated, consistent release process.

## installation

Download the wheel file and install with pip:
```
npm login --registry=https://npm.pkg.github.com
npm install @zhongkairen/test-release
```
- [GitHub authentication](doc/github-auth.md)
- [GitHub action](doc/github-actions.md)


