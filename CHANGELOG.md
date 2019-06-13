# Changelog
All notable changes to this project will be documented in this file.

## [1.8.0] - 2019-06-13

### Added
- ajax util

## [1.7.0] - 2019-03-20

### Added
- often used polyfills

## [1.6.1] - 2019-03-06

### Fixed
- `eventUtil::addDynamicEventListener()` now check that `matches` function exist in object

## [1.6.0] - 2019-03-05

### Fixed
- `eventUtil::addDynamicEventListener()` argument `scope` added (default: `document`) and moved `disableBubbling` to 5th argument
- `eventUtil::addDynamicEventListener()` now works with window eventListeners like `load` or `resize`

## [1.5.5] - 2019-02-08

### Fixed
- `domUtil::getAllParentNodes()`

## [1.5.4] - 2019-01-23

### Fixed
- export `UtilsBundle` name to `utilsBundle`

## [1.5.3] - 2019-01-23

### Fixed
- export `UtilsBundle` name

### Changed
- updated readme

## [1.5.2] - 2019-01-23

### Fixed
- readme respecting new scope

## [1.5.1] - 2019-01-23

### Fixed
- readme respecting new scope

## [1.5.0] - 2019-01-23

### Added
- npm scope @hundh

## [1.4.0] - 2019-01-23

### Changed
- refactored util classes in own files

## [1.3.1] - 2019-01-22

### Fixed
- `DomUtil.scrollTo` now compatible with IE

## [1.3.0] - 2019-01-08

### Changed
- all util param names are now singular


## [1.2.1] - 2018-12-19

### Added
- EventUtil::addDynamicEventListener()

## [1.2.0] - 2018-12-19

### Added
- refactoring

## [1.1.0] - 2018-12-14

### Added
- dom.scrollTo
- dom.elementInViewport

## [1.0.5] - 2018-10-29

### Removed
- `scroll-toggle` plugin again

## [1.0.4] - 2018-10-29

### Added
- `scroll-toggle` plugin added

## [1.0.3] - 2018-04-24

### Fixed
- dom.js getTextWithoutChildren function

## [1.0.2] - 2018-04-23

### Added
- dom.js getTextWithoutChildren function

## [1.0.1] - 2018-04-01

### Added
- Initial tag
