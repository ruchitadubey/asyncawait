async function outside() {

    let promise = new promise((resolve, reject) => {


        setTimeout(() => resolve("done!"), 2000)
    });

    let reult = await promise; // wait until the promise resolves(*)
    console.log(reult); //"done!"
}
outside();