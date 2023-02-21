import React, { useEffect } from 'react'

const re =  React

const unsplashApi = "https://api.unsplash.com/search/photos?"
const params = "page=1&query=dogs&"
const token = "client_id=MRVbqPNFSHVJoAuPHTWgOuFaaG3Z6UMO89QTxQWaLso"

const UseRandomImgs = () => {
    const [imagens , setImagens] = re.useState([])
    const [loading,setloading] = re.useState(null)
    const [search,setSearch] = re.useState()



    async function fetchDados(){
            setloading(true)
            const api = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=MRVbqPNFSHVJoAuPHTWgOuFaaG3Z6UMO89QTxQWaLso`)
            const json = await api.json()
            
            const limite = json['results'].length
            await json['results'].map((item) => { 

                if(imagens.length < limite){
                setImagens(prev => {
                    const set = new Set(prev)
                    if(!set.has(item['urls']['thumb'])){
                        set.add(item['urls']['thumb'])
                        return [...set]
                    }
                    return prev
                   })
                 
                }else{
                    console.log('limite batido')
                }} )
            setloading(false)

        // console.log(json['results'].map((item)=> {setImagens(item['urls']['full'])}))
    }


    useEffect(() => {
        fetchDados()

    },[search])
    
    return {imagens,search,setSearch,setImagens,loading}
}

export default UseRandomImgs