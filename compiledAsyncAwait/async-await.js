const sleep = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const asyncAwait1 = async num => {
  console.log('aa1')
  return await num * 2
}
 
const asyncAwait2 = async num => {
  console.log('aa2')
  return await num + 3
}
 
const asyncAwait3 = async num => {
  console.log('aa3')
  return await num * 4
}
 
const asyncAwait = async () => {
    const aa1 = await asyncAwait1(1)
    console.log('hoge')
    const aa2 = await asyncAwait2(aa1)
    const aa3 = await asyncAwait3(aa2)
}
 
asyncAwait().catch(error => { console.log(error) })
