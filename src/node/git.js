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
  let branch, auther, email, time, commit, hash, packTime = new Date()

  try {
    branch = childProcess.execSync('git symbolic-ref --short -q HEAD').toString().replace(/\n/, '')
    // another command see https://www.systutorials.com/docs/linux/man/1-git-log/#lbAL
    auther = getInfo(gitShow + '%cn')
    email = getInfo(gitShow + '%ce')
    time = getInfo(gitShow + '%cd')
    commit = getInfo(gitShow + '%s')
    hash = getInfo(gitShow + '%h')
  } catch(err) {
    branch = 'no git env'
    auther = ''
    email = 'see https://github.com/maYunLaoXi/f-com'
    time = new Date()
    commit = ''
    hash = ''
  }
  return { branch, auther, email, time, commit, hash, packTime }

}
function getInfo(command) {
  return childProcess.execSync(command).toString().replace(/\n/, '')
}
exports.gitBaseInfo = gitBaseInfo