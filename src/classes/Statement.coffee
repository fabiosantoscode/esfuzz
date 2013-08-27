EmptyStatement = require '../nodes/EmptyStatement'
{oneOf} = require '../combinators'

statements = [EmptyStatement]
module.exports = (depth, args...) ->
  return EmptyStatement 0, args... unless depth > 0
  (oneOf statements) depth, args...

statements.push require '../nodes/BlockStatement'
statements.push require '../nodes/DebuggerStatement'
statements.push require '../nodes/DoWhileStatement'
statements.push require '../nodes/ExpressionStatement'
statements.push require '../nodes/ForInStatement'
statements.push require '../nodes/ForStatement'
statements.push require '../nodes/FunctionDeclaration'
statements.push require '../nodes/IfStatement'
statements.push require '../nodes/SwitchStatement'
statements.push require '../nodes/ThrowStatement'
statements.push require '../nodes/TryStatement'
statements.push require '../nodes/VariableDeclaration'
statements.push require '../nodes/WhileStatement'
statements.push require '../nodes/WithStatement'
