code is here
https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAZQDYFN0AcCCYAmyAhgJ4AUAzlAE4CUiA3gFCKuLXpQjVJjoDuiAArU4AWxgV0ZMhwpxUAN3QAadugBW6aPQC8APkYs2JqVAAqMMejggoMvYeYmXbCAnkYAdKjgBzMgADABIGKmoAXwAuRAoMbERgGDBJAAt0fEDaY1cTOQVlMgBGWgBuHJcItSKABjKKiOyIpiYiChJIRPBoeCQOLWgAUWpRagAxbrJ6Z0QoVNFBPkFh0bIAcjmFxBW4ajX65tb2ztBIWAREIimjAEgOLh5L_iIYKBR43AJicgAiIh-Di0mAB6YGICBEKAQVKIdAjXaIfAwDjQXZQEggsFkNodCDXAzMUFsGgkIxE1xEZ6vS5TcrklyUl5vfraKA7caTer0iLgyHQxBkOF0Mlg1zuMCedA-fzrIUxNZqIXZbmYxCNKYtHEnbrnJAQ1CoABKmk0Q3hHMg1xmJKMFKpbyu9TtTPUAzZ5omlqdat5UNSgpG0wqN3Fkq8Qt26xgwFh5t5ID8qTe6Q4irjkkQYDgbywbSk-EQuY4YDepx6FwVsboxmahyY2OOeMc1uopJmJkZ1Md5RMN07b31RpNGjNo09TZ7PohfoFSttLlDCilEeospG8rT1dYtdoGqAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ces2016%2Cstage-1%2Ces2015-loose&prettier=true&targets=&version=7.4.5&externalPlugins=babel-plugin-async-to-promises%401.0.5

```
function SleepAndSay(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${str}: sleep finished`)
            resolve(1);
        }, 10);
    })
}

async function rejectErrorFunc() {
  throw new Error('throw Error');
}

async function a() {
	return await SleepAndSay("a");
}


// catch error directorty
// (async() =>{
//   try {
//       await a();
//       await rejectErrorFunc();
//   } catch (err) {
//       console.log('err: ', err)
//   }
// })()

async function callRejejctErrorFunc() {
  try {
      await a();
      await rejectErrorFunc();
  } catch(err) {
    	console.error('if error caught here, error is not passed parent function ', err)
  }
}


(async() =>{
  try {
      await a();
    	await callRejejctErrorFunc();
  } catch (err) {
      console.error('err: ', err)
  }
})()

```
