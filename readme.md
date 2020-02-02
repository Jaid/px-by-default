# px-by-default


<a href="https://raw.githubusercontent.com/jaid/px-by-default/master/license.txt"><img src="https://img.shields.io/github/license/jaid/px-by-default?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor px-by-default"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/px-by-default/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fpx-by-default%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/px-by-default/commits"><img src="https://img.shields.io/github/commits-since/jaid/px-by-default/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/jaid/px-by-default/commits"><img src="https://img.shields.io/github/last-commit/jaid/px-by-default?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/px-by-default/issues"><img src="https://img.shields.io/github/issues/jaid/px-by-default?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/px-by-default"><img src="https://img.shields.io/npm/v/px-by-default?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/px-by-default/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/px-by-default?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/px-by-default"><img src="https://img.shields.io/npm/dm/px-by-default?style=flat-square&logo=npm" alt="Downloads"/></a>

**If given CSS size value has no unit, px will be appended.**





## Installation

<a href="https://npmjs.com/package/px-by-default"><img src="https://img.shields.io/badge/npm-px--by--default-C23039?style=flat-square&logo=npm" alt="px-by-default on npm"/></a>

```bash
npm install --save px-by-default@^1.0.0
```

<a href="https://yarnpkg.com/package/px-by-default"><img src="https://img.shields.io/badge/Yarn-px--by--default-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="px-by-default on Yarn"/></a>

```bash
yarn add px-by-default@^1.0.0
```

<a href="https://github.com/jaid/px-by-default/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/px--by--default-24282e?style=flat-square&logo=github" alt="@jaid/px-by-default on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/px-by-default@^1.0.0
```



## Example

```javascript
import pxByDefault from "epoch-Seconds"

const result = pxByDefault(30)
```

Variable `result` will now be:

```javascript
"30px"
```













## Development



Setting up:
```bash
git clone git@github.com:jaid/px-by-default.git
cd px-by-default
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
