const depthFirstSearch = (rootNode, vertices, edges) => {
  let stack = []
  let visited = []
  stack.push(rootNode)
  
  while (stack.length > 0) {
    const current = stack.pop()
    
    markDiscovered(current)
    const adjacentNodes = getAdjacentNodes(current.name, vertices, edges)

    if (adjacentNodes.length > 0) {
      adjacentNodes.forEach(node => {
        stack.push(node)
      })
    }

    visited.push(current)
  }

  console.log(visited)
  return visited
}

const markDiscovered = (node) => {
  node.discovered = true
}

const findNode = (name, vertices) => {
  let target
  vertices.forEach(node => {
    if (node.name === name && node.discovered !== true) {
      target = node
    }
  })
  return target  
}

const getAdjacentNodes = (rootNode, vertices, edges) => {
  let adjacent = []

  edges.forEach(pair => {
    if (pair[0] === rootNode) {
      const node = findNode(pair[1], vertices)
      if (node) {
        adjacent.push(node)
      }
    }

    if (pair[1] === rootNode) {
      const node = findNode(pair[0], vertices)
      if (node) {
        adjacent.push(node)
      }
    }
  })

  return adjacent.reverse()
}