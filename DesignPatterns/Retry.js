async function powtorzOperacje()
{
    let proba
     = 0;

    while(true)
    {
        try {
            zewnętrzeneWezwanie();
            console.log("Udało się!");
            break;
        } catch (error) {
            proba++
            console.log(`Nie udało się! ${proba}`);

            if(proba >= 10)
            {
                console.log("Osiągnięto maksymalną liczbę prób.");
                break;
            }
        }
        await sleep(3000);
    }  
}     

function zewnętrzeneWezwanie()
{
    console.log("Zewnętrzne wezwanie...");
    const probaPrzekazania = Math.random() < 0.4;
    if(probaPrzekazania)
        return true;
    else
        throw "Nie powiodło się";
}

async function sleep(ms)
{
    return new Prosba(resolve => {
        setTimeout(() => {
            resolve()
        }, ms);
    });
}

powtorzOperacje();