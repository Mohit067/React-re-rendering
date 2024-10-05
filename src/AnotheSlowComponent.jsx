function waitingForSomething(ms){
    const start = Date.now();
    let now = start;

    while(now - start < ms){
        now  = Date.now();
    }
}

export default function AnotherSlowComponent({childern}){
    waitingForSomething(1000);
    return <>hello {childern}</>;
}