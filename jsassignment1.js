/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const NFTs=[];

function mintNFT (_Name,_Age,_Sex,_Nationality,_Bling) {
    const NFT = {
        "Name": _Name,
        "Age": _Age,
        "Sex": _Sex,
        "Nationality": _Nationality,
        "Bling":_Bling
    }
    NFTs.push(NFT);
    console.log("Minted: " + _Name+"\n")


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0; i < NFTs.length; i++){
        console.log("Name:\t\t"+NFTs[i].Name);
        console.log("Age:\t\t" +NFTs[i].Age);
        console.log("Sex:\t\t" + NFTs[i].Sex);
        console.log("Nationality:"+NFTs[i].Nationality);
        console.log("Bling:\t\t"+NFTs[i].Bling);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);

}

// call your functions below this line
mintNFT("Saul","32","Male","American","Black Diamond\n");
mintNFT("Goodman","23","Trans","American","Hair\n")
mintNFT("Raman","26","Male","Indian","Gold-Car\n")
listNFTs();
getTotalSupply();

