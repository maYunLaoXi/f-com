const childProcess = require('child_process')
/**
 * 获取git的基本信息，依赖nodejs
 * @returns {Object}
 * branch 分支名
 * auther 作者
 * email 邮箱
 * commit 最后一次提交信息
 * hash 最后一次提交hash
 */
const gitBaseInfo = () => {
  if(!childProcess) return {}
  const gitShow = 'git show -s --format='

  const branch = childProcess.execSync('git symbolic-ref --short -q HEAD').toString().replace(/\n/, '')
  // another command see https://www.systutorials.com/docs/linux/man/1-git-log/#lbAL
  const auther = getInfo(gitShow + '%cn')
  const email = getInfo(gitShow + '%ce')
  const time = getInfo(gitShow + '%cd')
  const commit = getInfo(gitShow + '%s')
  const hash = getInfo(gitShow + '%h')
  return { branch, auther, email, time, commit, hash }

}
function getInfo(command) {
  return childProcess.execSync(command).toString().replace(/\n/, '')
}
exports.gitBaseInfo = gitBaseInfo