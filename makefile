help :
    @echo make startTestNet : Lanza la red local de icp
    @echo make deploy : Lanza todos los canister
    @echo make deployAndRun : Lanza los canister y prepara front end
    @echo make generate : Compila y genera el candid        

startTestNet :
    @echo "Lanzando red local de prueba en icp"
    @echo "Esta terminal debe de quedar abierta"
    dfx start --clean

deploy : 
    @echo "Lanzando todos los canisters"
    dfx deploy 

deployAndRun :
    @echo "Lanza los canister y prepara el front end"
    dfx deploy
    npm run start

generate : 
    @echo "Compila y genera candid"
    dfx generate