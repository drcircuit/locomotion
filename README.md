# Locomotion
This is a simple plugin manager / service locator for NodeJS. It is just posted as a reference implementation, it does not do dependency injection, plugin configuration, service builders and all that good stuff. It just shows the basic functionality of how to setup the boilerplate for a plugin architecture.

# To use it you need:
- Add locomotion to your project
- create a plugins.json file following this schema:
  ```json
  {
    "path": "./plugins",
    "plugins": [
        { "module":"palindrome", "dir":"locomotion-plugin-example","source":"https://github.com/drcircuit/locomotion-plugin-example.git"}
    ] 
  }
- create your plugins, they will have to have a git repo and use module.exports to work.
- use the .locate(service) function to grab a service instance.
