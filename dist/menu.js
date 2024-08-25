const menuContent = document.getElementById("menuContent")
// Put In Environment Variable During The Build Process
const apiKey = "e0fbad497858e2e977d9630beaac6a64808716b9c26633413fd3eee52850742fcf1dcbecbb3a0739f633702fb3eebcc89e1f158befeb90fedeaab2a675c4b2704b4402f24688f86f3198fdf07d53b42643cc99e1ad7630a0c7fad45e89ad0edb7c9cc7abf0f0252e4de9a337bc7f3fa86b075a77e71abff8e7b781836dc73313"

const fetchCategories = async () => {
    // Sends Tokens That Authenticate The Request
    const options = {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    };
    try {
        const request = await fetch("http://localhost:1337/api/kategorijos?populate=*", options);
        if (!request.ok) {
            throw new Error(`Status ${request.status}`)
        }
        const response = await request.json();
        return response
    }
    catch (error) {
        console.error(`ERROR ${error}`)
        return null
    }
}
const content = async () => {
    const categories = await fetchCategories();
    categories.data.forEach((i) => {
        // For Each Category Create A Div Container
        const divContainer = document.createElement("div")
        divContainer.className = "pb-12 lg:pb-24"
        menuContent.append(divContainer)
        const nameH4 = document.createElement("h4") 
        nameH4.textContent = i.attributes.Pavadinimas
        nameH4.className = "roboto-mono-medium text-center text-2xl pb-8" 
        divContainer.append(nameH4)
        const ulContainer = document.createElement("ul")
        ulContainer.className = "w-[min(80%,_100rem)] mx-auto grid gap-10 grid-cols-1 lg:grid-cols-2"
        divContainer.append(ulContainer)
        // Items That Belong To That Category
        i.attributes.patiekalai.data.forEach((i) => {
            const liContainer = document.createElement("li")
            liContainer.className = "grid grid-cols-1 grid-rows-2 justify-items-center items-center lg:grid-cols-[4fr_1fr]"
            ulContainer.append(liContainer)
            const nameH5 = document.createElement("h5")
            nameH5.className = "text-xl text-center col-[1/2]"
            nameH5.textContent = `${i.attributes.Pavadinimas} `
            liContainer.append(nameH5)
            const priceSpan = document.createElement("span")
            priceSpan.className = "lg:hidden"
            priceSpan.textContent = i.attributes.Kaina
            nameH5.append(priceSpan)
            const priceH5 = document.createElement("h5")
            priceH5.className = "text-xl hidden lg:inline-block lg:col-[2/3] lg:row-[1/3]"
            priceH5.textContent = i.attributes.Kaina
            liContainer.append(priceH5)
            const ingredientsH6 = document.createElement("h6")
            ingredientsH6.className = "text-slate-600 text-sm text-center col-[1/2] self-start"
            ingredientsH6.textContent = i.attributes.Ingredientai
            liContainer.append(ingredientsH6)
        })
    })
}

content()
