// https://webpack.js.org/guides/dependency-management/#requirecontext
const files = require.context('./modules', false, /\.js$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(files)
