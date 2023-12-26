const datas = [
    {
        name: 'ravi',
        profession: 'software engineer'
    },
    {
        name: 'prabhat',
        profession: 'software engineer'
    },
]

const getDatas=()=> {
    console.log('wait 1 sec')
    setTimeout(()=> {
        let output='';
        datas.forEach((data, index)=> {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML=output;
    }, 1000)
}

// const createData=(newData)=> {
//     setTimeout(()=> {
//         datas.push(newData)
//     }, 2000)
// }

// createData({name: 'taher',profession: 'software engineer'},)
// getDatas();

// ------------------------------------------------------------------------------
// Callback
// const createData=(newData, callback)=> {
//     setTimeout(()=> {
//         console.log('wait 2 sec')
//         datas.push(newData)

//         callback();
//     }, 2000)
// }
// createData({name: 'taher',profession: 'software engineer'}, getDatas)


// ------------------------------------------------------------------------------
// ES6 Promise Object
const createData=(newData)=> {

    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('wait 2 sec')
            datas.push(newData)
            let err=false;

            if(!err) resolve();
            else reject('error aa gya h');

        }, 2000)
    })
    
}
// createData({name: 'taher',profession: 'software engineer'})
// .then(getDatas)
// .catch(err=> console.log(err))


// ------------------------------------------------------------------------------
// ES8 Async n Await
async function start() {
    await createData({name: 'taher',profession: 'software engineer'})
    getDatas();
}
start()