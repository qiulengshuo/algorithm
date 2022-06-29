/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0
  // 递归遍历 所有岛屿
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        // = "1" 计算一个岛屿
        dfs(i, j)
        count++
      }
    }
  }
  function dfs (i, j) {
    // 边界条件
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== "1") return
    grid[i][j] = "0"
    dfs(i + 1, j)
    dfs(i, j + 1)
    dfs(i - 1, j)
    dfs(i, j - 1)
  }
  return count
}